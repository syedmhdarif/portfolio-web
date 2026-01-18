# Deployment Guide

This portfolio is configured for dual deployment to both GitHub Pages and Cloudflare Pages.

## GitHub Pages Deployment

Automatically deploys when you push to `master` branch.

**URL**: `https://syedmhdarif.github.io/portfolio-web/`

The GitHub Pages build uses `BASE_PATH=/portfolio-web` to handle the subpath routing.

## Cloudflare Pages Deployment

Automatically deploys when you push to `master` branch.

**URL**: `https://syed-arif-portfolio.pages.dev/`

### Required GitHub Secrets for Cloudflare

Add these secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

1. **CLOUDFLARE_API_TOKEN**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create token with "Cloudflare Pages" template or "Edit Cloudflare Workers" permissions
   
2. **CLOUDFLARE_ACCOUNT_ID**
   - Found in your Cloudflare dashboard URL: `https://dash.cloudflare.com/{ACCOUNT_ID}/`
   - Or in Workers & Pages > Overview section

## Manual Deployment

### Cloudflare Pages
```bash
npm run deploy
```

### GitHub Pages
The workflow handles this automatically, but you can trigger it manually from the Actions tab.

## Key Differences

- **GitHub Pages**: Uses `/portfolio-web` basename (repository name)
- **Cloudflare Pages**: Uses `/` basename (root path)

The `BASE_PATH` environment variable in `react-router.config.ts` handles this automatically during builds.
