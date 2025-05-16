# Akshay Hegde - Personal Landing Page

This repository contains two versions of Akshay Hegde's personal landing page:
- V1: Original landing page
- V2: Enhanced landing page with updated company experiences and SEO improvements

## Development

To run locally:

```bash
# Run V1 (default version)
npm start

# Run V2
npm run start:v2
```

## Deployment to Vercel

### Option 1: Deploying Both Versions with Different URLs

1. **For V1 (Original Version)**:
   - Create a new Vercel project or use your existing one
   - Deploy without any special environment variables
   - Set your custom domain (e.g., v1.hedge7.com or hedge7.com)

2. **For V2 (Enhanced Version)**:
   - Create a new Vercel project
   - Set environment variable `REACT_APP_ENTRY` to `v2`
   - Use the build command: `npm run build:v2`
   - Set your custom domain (e.g., v2.hedge7.com or hedge7.com)

### Option 2: Switching Versions on the Same URL

To switch from V1 to V2 on the same Vercel project:

1. Go to your Vercel project settings
2. Add environment variable: `REACT_APP_ENTRY` = `v2`
3. Redeploy your project

## SEO Features

V2 includes enhanced SEO features:
- Structured JSON-LD data for Person, Organizations, and Website schemas
- Open Graph and Twitter Card meta tags for better social sharing
- Semantic HTML5 elements and proper heading hierarchy
- Accessible attributes for better screen reader support
- Optimized image loading with descriptive alt text
- Mobile-responsive design and performance optimizations
- robots.txt and sitemap.xml for better indexing 