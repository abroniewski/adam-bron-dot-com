# Setting Up CI/CD for a New Site

This guide walks you through setting up automated deployment for a new website (e.g., `adambron.com`).

## Prerequisites

- GitHub repository for the new site
- cPanel hosting account with FTP access
- Domain name configured and pointing to your hosting

## Step 1: Copy the CI/CD Workflow

Copy the deployment workflow file to your new repository:

1. Copy `.github/workflows/deploy.yml` from this repository
2. Place it in your new repository at `.github/workflows/deploy.yml`

The workflow file is ready to use - no modifications needed (it reads from GitHub secrets).

## Step 2: Find Your FTP Server Information

### Option A: Check cPanel FTP Accounts

1. Log into your cPanel
2. Go to **FTP Accounts**
3. Find your FTP account (or create one if needed)
4. Look for the **FTP Server** information

**Important Notes:**
- The FTP server is usually your **domain name** (e.g., `adambron.com`)
- It's **NOT** usually `ftp.adambron.com` (that subdomain often doesn't exist)
- If unsure, test with: `nslookup adambron.com` (should resolve to an IP)

### Option B: Test DNS Resolution

In your terminal, test which hostname works:

```bash
# Test the domain (most common)
nslookup adambron.com

# If that works, use: adambron.com
# If it doesn't, check cPanel for the exact server hostname
```

### Option C: Use Server IP Address

If the hostname doesn't resolve, you can use the server's IP address:
1. Find your server IP in cPanel → **Server Information**
2. Use the IP address as the FTP server (e.g., `192.0.2.1`)

## Step 3: Determine Server Directory

The `server-dir` depends on your cPanel setup:

- **Main domain**: Usually `/public_html/`
- **Subdomain or addon domain**: Could be `/public_html/subdomain/` or `/subdomain/`
- **Root directory**: Could be `/` if FTP user's home is already the web root

**To find it:**
1. Log into cPanel
2. Check **File Manager** - where is your website's root directory?
3. From the FTP user's home directory, what's the path to your web root?

## Step 4: Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets:

### Required Secrets:

1. **`FTP_SERVER`**
   - Value: Your FTP server hostname (e.g., `adambron.com`)
   - ⚠️ **NOT** `ftp://adambron.com` or `ftp.adambron.com`
   - Just the hostname: `adambron.com`

2. **`FTP_USERNAME`**
   - Value: Your cPanel FTP username
   - Usually in format: `username@adambron.com` or just `username`

3. **`FTP_PASSWORD`**
   - Value: Your FTP password
   - Make sure there are no extra spaces or line breaks

### Optional Secrets:

4. **`FTP_PORT`** (optional)
   - Default: `21`
   - Only set if your FTP uses a different port

5. **`FTP_SERVER_DIR`** (optional)
   - Default: `/`
   - Set to `/public_html/` if that's your web root
   - Or `/public_html/subdomain/` for subdomains

## Step 5: Verify the Workflow

The workflow file (`.github/workflows/deploy.yml`) includes:

- ✅ Automatic deployment on push to `main` branch
- ✅ Manual trigger option (`workflow_dispatch`)
- ✅ Secret verification
- ✅ DNS resolution testing
- ✅ Build and deployment steps

## Step 6: Test the Deployment

1. **Push to main branch** - triggers automatic deployment
2. **Or manually trigger**: Go to **Actions** tab → **Build and Deploy to cPanel** → **Run workflow**

## Troubleshooting

### Error: "ENOTFOUND" or "server doesn't seem to exist"

- ✅ Check that `FTP_SERVER` is the domain name (not `ftp.domain.com`)
- ✅ Test DNS: `nslookup yourdomain.com` should resolve
- ✅ Try using the server IP address instead
- ✅ Verify no spaces or special characters in the secret

### Error: "Failed to connect"

- ✅ Verify `FTP_USERNAME` and `FTP_PASSWORD` are correct
- ✅ Check that `FTP_PORT` is correct (usually 21)
- ✅ Try changing `protocol: ftps` to `protocol: ftp` in the workflow
- ✅ Verify your FTP account is active in cPanel

### Error: "Files deployed but not visible"

- ✅ Check `FTP_SERVER_DIR` - it should point to your web root
- ✅ Verify files are in the correct directory on the server
- ✅ Check file permissions in cPanel File Manager

## Quick Checklist

- [ ] Workflow file copied to `.github/workflows/deploy.yml`
- [ ] `FTP_SERVER` secret set (domain name, not subdomain)
- [ ] `FTP_USERNAME` secret set
- [ ] `FTP_PASSWORD` secret set
- [ ] `FTP_SERVER_DIR` secret set (if not using default `/`)
- [ ] DNS resolves for FTP server hostname
- [ ] Test deployment triggered
- [ ] Files appear on website

## Example Configuration

For a site at `adambron.com`:

```
FTP_SERVER: adambron.com
FTP_USERNAME: username@adambron.com
FTP_PASSWORD: your-secure-password
FTP_SERVER_DIR: /public_html/
FTP_PORT: 21 (or leave unset for default)
```

## Notes

- The workflow excludes `api/config.local.php` to protect server-side secrets
- The workflow uses FTPS (secure FTP) by default
- Build artifacts go to `dist/` directory (Astro default)
- The `.htaccess` file in `public/` (if present) is automatically copied to `dist/` during build
- For Astro static sites, `.htaccess` is optional but useful for redirects, compression, and caching

