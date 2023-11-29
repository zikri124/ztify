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
            }
        ]
    },
    reactStrictMode: true,
}

module.exports = nextConfig
