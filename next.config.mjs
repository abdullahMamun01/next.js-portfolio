/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            
          },
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
            
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          }
        ],
      },
};

export default nextConfig;
