/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      port: '',
      // pathname: '/600/**',
    },
  ],
};

export default nextConfig;
