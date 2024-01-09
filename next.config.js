/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com'
            },
            {
                protocol: 'https',
                hostname: '**.scdn.co'
            },
            {
                protocol: 'https',
                hostname: '**.spotifycdn.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    reactStrictMode: true,
}

module.exports = nextConfig
