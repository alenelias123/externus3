// next.config.mjs

const nextConfig = {
  // Uncomment the following lines only when deploying to GitHub Pages
  // output: 'export',
  // basePath: '/externus3',
  // assetPrefix: '/externus3',
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Host-gated: only www.externus.in matches, so apex and *.vercel.app
    // previews are unaffected and the destination cannot loop back.
    // A separate '/' rule is required because '/:path*' does not match
    // the site root in Next.js redirects.
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.externus.in" }],
        destination: "https://externus.in/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.externus.in" }],
        destination: "https://externus.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
