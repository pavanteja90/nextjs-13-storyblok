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
            "cdn.canstarblue.com.au",
            "localhost"
        ]
    },
    async headers() {
        return [
          {
            // Workaround to allow storyblock to fetch the mock API :-( 
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      }
    
};

module.exports = nextConfig;
