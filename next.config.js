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
                hostname: 'i.scdn.co'
            },
            {
                protocol: 'https',
                hostname: 'mosaic.scdn.co'
            },
            {
                protocol: 'https',
                hostname: 'seed-mix-image.spotifycdn.com'
            },
            {
                protocol: 'https',
                hostname: 'seeded-session-images.scdn.co'
            },
            {
                protocol: 'https',
                hostname: 'thisis-images.spotifycdn.com'
            },
            {
                protocol: 'https',
                hostname: 'image-cdn-ak.spotifycdn.com'
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
