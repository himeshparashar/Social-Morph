/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com", "minvo.pro"], // Add "minvo.pro" to the domains array
    remotePatterns: [
      {
        hostname: 'img.clerk.com',
      },
      {
        hostname: 'minvo.pro', // Add "minvo.pro" to remotePatterns 
      },
    ],
  },
};

export default nextConfig;
