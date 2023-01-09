/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require('@plaiceholder/next');
const { withNextBanner } = require('next-banner');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['avatars.githubusercontent.com'],
    minimumCacheTTL: 3600,
  },  
};

module.exports =  withPlaiceholder(
 
  withNextBanner({
    nextBanner: {
      domain: 'https://sarmadgardezi.com',
      layoutDir: 'og-image',
      outputDir: 'images/og-image',
     
    },
    typescript: {
  
      ignoreBuildErrors: true,
    },
    ...nextConfig,
  })
  
  
);
