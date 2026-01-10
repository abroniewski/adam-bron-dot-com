# New Site Setup Checklist: adambron.com

## Files to Include in the Repository

### 1. CI/CD Workflow (Required)
- **File**: `.github/workflows/deploy.yml`
- **Source**: Copy from this repository
- **Status**: Ready to use, no modifications needed

### 2. Project Files (Standard)
- Your Astro application files
- `package.json` with build scripts
- `astro.config.ts`
- `tsconfig.json` (if TypeScript)
- Source code in `src/`
- Public assets in `public/`

### 3. `.htaccess` File (Optional)
- **Location**: `public/.htaccess`
- **Purpose**: Optional - handles redirects, compression, and caching
- **Auto-copied**: Astro automatically copies from `public/` to `dist/` during build
- **Note**: Not required for Astro static sites, but useful for server-side optimizations

## GitHub Secrets to Configure

Go to: **Repository → Settings → Secrets and variables → Actions**

| Secret Name | Value | Example | Required |
|------------|-------|---------|----------|
| `FTP_SERVER` | Domain name (not subdomain) | `adambron.com` | ✅ Yes |
| `FTP_USERNAME` | cPanel FTP username | `username@adambron.com` | ✅ Yes |
| `FTP_PASSWORD` | FTP password | `your-password` | ✅ Yes |
| `FTP_PORT` | FTP port (usually 21) | `21` | ⚠️ Optional |
| `FTP_SERVER_DIR` | Web root directory | `/public_html/` | ⚠️ Optional |

## Quick Setup Steps

1. **Copy workflow file**
   ```bash
   # In your new repository
   mkdir -p .github/workflows
   cp /path/to/adam-bron-dot-com/.github/workflows/deploy.yml .github/workflows/deploy.yml
   ```

2. **Find FTP server info in cPanel**
   - Log into cPanel
   - Go to FTP Accounts
   - Note the FTP server hostname (usually just the domain)

3. **Set GitHub secrets**
   - Repository → Settings → Secrets → Actions
   - Add all required secrets (see table above)

4. **Test deployment**
   - Push to `main` branch, or
   - Manually trigger: Actions → Build and Deploy → Run workflow

## Common FTP Server Formats

| Hosting Type | FTP Server Format | Example |
|-------------|-------------------|---------|
| cPanel (Namecheap) | Domain name | `adambron.com` |
| cPanel (other) | Domain name | `adambron.com` |
| Some hosts | Subdomain | `ftp.adambron.com` |
| Alternative | IP address | `192.0.2.1` |

**Test which works:**
```bash
nslookup adambron.com        # Should work
nslookup ftp.adambron.com    # Usually doesn't work
```

## Server Directory Options

| Setup Type | `FTP_SERVER_DIR` Value |
|-----------|----------------------|
| Main domain | `/public_html/` |
| Subdomain | `/public_html/subdomain/` |
| Addon domain | `/public_html/addondomain/` |
| FTP home = web root | `/` |

## What Gets Deployed

- ✅ Everything in `dist/` directory (Astro build output)
- ✅ `.htaccess` file (if present in `public/`)
- ✅ Static assets (images, fonts, etc.)
- ❌ `node_modules/` (excluded)
- ❌ `api/config.local.php` (protected, won't overwrite)

## Verification

After first deployment, verify:
- [ ] Website loads at `https://adambron.com`
- [ ] Astro routes work (try navigating to different pages)
- [ ] Static assets load correctly
- [ ] No 404 errors for routes

## Troubleshooting

**"ENOTFOUND" error:**
- Use domain name, not `ftp.domain.com`
- Test with: `nslookup adambron.com`

**"Failed to connect":**
- Verify username/password
- Check FTP port (usually 21)
- Try `protocol: ftp` instead of `ftps` in workflow

**Files not appearing:**
- Check `FTP_SERVER_DIR` points to correct directory
- Verify in cPanel File Manager

