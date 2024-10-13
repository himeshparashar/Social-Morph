/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
    remotePatterns: [
      {
        hostname: 'img.clerk.com',
      }
    ],
  },
};

export default nextConfig;
