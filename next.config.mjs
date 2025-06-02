// next.config.mjs

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/externus3', // only if using GitHub Pages
    assetPrefix: '/externus3', 
};

export default nextConfig;
