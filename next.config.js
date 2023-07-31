const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
});
// uncomment to use downloaded fonts
// const withFonts = require('next-fonts');
//  module.exports = withFonts({
//     enableSvg: true,
//     webpack(config, options) {
//       return config;
//     }
//  });
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
// };

// module.exports = nextConfig;
