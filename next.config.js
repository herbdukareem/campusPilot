// import { fileURLToPath } from "node:url";
// import createJiti from "jiti";
// const jiti = createJiti(fileURLToPath(import.meta.url));
// Import env here to validate during build. Using jiti we can import .ts files :)
// jiti("./app/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'coeminna.ec.bantigioasis.com',
            pathname: '/public/assets/images/**',
          },
        ],
      },
}

module.exports = nextConfig
