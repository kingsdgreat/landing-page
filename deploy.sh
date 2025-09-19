#!/bin/bash

# Real Estate Website Deployment Script
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment of Real Estate Website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env.production exists
if [ ! -f .env.production ]; then
    print_error ".env.production file not found. Please create it with your production environment variables."
    exit 1
fi

# Load environment variables
export $(cat .env.production | grep -v '^#' | xargs)

print_status "Building Docker image..."
docker-compose build --no-cache

print_status "Stopping existing containers..."
docker-compose down

print_status "Starting services..."
docker-compose up -d

print_status "Waiting for services to be ready..."
sleep 30

# Check if the application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    print_status "✅ Application is running successfully!"
    print_status "🌐 Your website should be accessible at: https://secureyourland.com"
else
    print_error "❌ Application failed to start. Check the logs with: docker-compose logs"
    exit 1
fi

print_status "Deployment completed successfully! 🎉"
print_status "To view logs: docker-compose logs -f"
print_status "To stop: docker-compose down"
print_status "To restart: docker-compose restart"
