#!/bin/bash

# SSL Certificate Setup Script for Let's Encrypt
# Usage: ./ssl-setup.sh

set -e

echo "🔒 Setting up SSL certificates with Let's Encrypt..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if certbot is installed
if ! command -v certbot &> /dev/null; then
    print_status "Installing certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Create SSL directory
mkdir -p ssl

# Stop nginx temporarily
print_status "Stopping nginx temporarily..."
docker-compose stop nginx

# Get SSL certificate
print_status "Obtaining SSL certificate from Let's Encrypt..."
sudo certbot certonly --standalone -d secureyourland.com -d www.secureyourland.com --email your-email@example.com --agree-tos --non-interactive

# Copy certificates to ssl directory
print_status "Copying certificates..."
sudo cp /etc/letsencrypt/live/secureyourland.com/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/secureyourland.com/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*.pem

# Start nginx
print_status "Starting nginx with SSL..."
docker-compose up -d nginx

print_status "✅ SSL certificates installed successfully!"
print_status "🔒 Your website is now secured with HTTPS!"

# Setup auto-renewal
print_status "Setting up automatic certificate renewal..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx") | crontab -

print_status "🎉 SSL setup completed! Certificates will auto-renew."
