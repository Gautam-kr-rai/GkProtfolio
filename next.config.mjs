/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**', // Allow all paths for this domain
      },
    ],
  },
};

export default nextConfig;

