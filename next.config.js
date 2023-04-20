const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
});

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
// };

// module.exports = nextConfig;
