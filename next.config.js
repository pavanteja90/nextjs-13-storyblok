/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.storyblok.com'
            }
        ],
        domains: [
            "www.canstarblue.com.au",
            "cdn.canstarblue.com.au"]
    }
};

module.exports = nextConfig;
