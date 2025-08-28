/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'sofctamu.estore.flywire.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;
