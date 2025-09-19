# 🚀 Real Estate Website Deployment Guide

This guide will help you deploy your Next.js real estate website to a VPS with your GoDaddy domain `secureyourland.com` and Cloudflare.

## 📋 Prerequisites

### VPS Requirements
- Ubuntu 20.04+ or similar Linux distribution
- At least 2GB RAM
- 20GB+ storage
- Root or sudo access

### Domain Setup
- Domain: `secureyourland.com` (GoDaddy)
- Cloudflare account for DNS management

## 🔧 VPS Setup

### 1. Connect to Your VPS
```bash
ssh root@your-vps-ip
```

### 2. Update System
```bash
apt update && apt upgrade -y
```

### 3. Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Add user to docker group
usermod -aG docker $USER
```

### 4. Install Git
```bash
apt install git -y
```

## 🌐 Domain Configuration

### 1. GoDaddy DNS Settings
In your GoDaddy domain management:
- Point `secureyourland.com` to your VPS IP
- Point `www.secureyourland.com` to your VPS IP

### 2. Cloudflare Setup
1. Add your domain to Cloudflare
2. Update nameservers in GoDaddy to Cloudflare nameservers
3. In Cloudflare DNS:
   - Add A record: `secureyourland.com` → Your VPS IP
   - Add A record: `www.secureyourland.com` → Your VPS IP
   - Enable "Proxied" (orange cloud) for both records

## 📁 Deploy Application

### 1. Clone Repository
```bash
git clone https://github.com/your-username/real-estate-website.git
cd real-estate-website
```

### 2. Configure Environment Variables
```bash
# Edit the production environment file
nano .env.production
```

Update these values:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
RESEND_API_KEY=your_actual_resend_api_key
```

### 3. Deploy Application
```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 4. Setup SSL Certificates
```bash
# Make SSL setup script executable
chmod +x ssl-setup.sh

# Run SSL setup (replace email with your actual email)
sed -i 's/your-email@example.com/your-actual-email@domain.com/g' ssl-setup.sh
./ssl-setup.sh
```

## 🔒 Security Configuration

### 1. Firewall Setup
```bash
# Install UFW
apt install ufw -y

# Configure firewall
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80
ufw allow 443
ufw enable
```

### 2. Fail2Ban (Optional)
```bash
apt install fail2ban -y
systemctl enable fail2ban
systemctl start fail2ban
```

## 📊 Monitoring & Maintenance

### 1. View Logs
```bash
# Application logs
docker-compose logs -f real-estate-app

# Nginx logs
docker-compose logs -f nginx
```

### 2. Update Application
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### 3. Backup
```bash
# Create backup script
cat > backup.sh << 'BACKUP_EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf backup_$DATE.tar.gz .env.production ssl/
echo "Backup created: backup_$DATE.tar.gz"
BACKUP_EOF

chmod +x backup.sh
```

## 🚨 Troubleshooting

### Common Issues

1. **Application not starting**
   ```bash
   docker-compose logs real-estate-app
   ```

2. **SSL certificate issues**
   ```bash
   sudo certbot certificates
   ```

3. **Domain not resolving**
   - Check Cloudflare DNS settings
   - Verify nameservers in GoDaddy

4. **Port conflicts**
   ```bash
   netstat -tulpn | grep :80
   netstat -tulpn | grep :443
   ```

### Performance Optimization

1. **Enable Cloudflare Caching**
   - Set caching level to "Standard"
   - Enable "Auto Minify" for CSS, JS, HTML

2. **Database Optimization** (if using Sanity)
   - Optimize Sanity queries
   - Use image optimization

3. **CDN Configuration**
   - Configure Cloudflare for static assets
   - Enable Brotli compression

## 📞 Support

If you encounter issues:
1. Check the logs: `docker-compose logs -f`
2. Verify environment variables
3. Ensure all services are running: `docker-compose ps`
4. Check firewall and port accessibility

## 🎉 Success!

Once deployed, your website will be available at:
- **https://secureyourland.com**
- **https://www.secureyourland.com**

The deployment includes:
- ✅ Docker containerization
- ✅ Nginx reverse proxy
- ✅ SSL certificates (Let's Encrypt)
- ✅ Security headers
- ✅ Rate limiting
- ✅ Auto-renewal of SSL certificates
- ✅ Health checks
- ✅ Logging and monitoring
