# Use the official Node.js 20 image
FROM node:20-alpine AS base

# Install libc6-compat (required for some npm/yarn packages)
RUN apk add --no-cache libc6-compat bash curl

WORKDIR /app

# -------------------
# Install dependencies
# -------------------
FROM base AS deps

# Enable yarn via corepack (comes with Node.js)
RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock ./

# Install deps using yarn
RUN yarn install --frozen-lockfile

# -------------------
# Build the app
# -------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# -------------------
# Production runtime
# -------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone build
RUN mkdir .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
