#!/bin/bash

# Build the V2 version
echo "Building V2 version..."
npm run build:v2

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod --env REACT_APP_ENTRY=v2

echo "V2 version has been deployed to Vercel!"
echo "Make sure to set your custom domain in the Vercel dashboard." 