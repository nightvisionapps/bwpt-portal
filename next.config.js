/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      util: require.resolve('util/'),
    };
    return config;
  },
};

module.exports = nextConfig;
