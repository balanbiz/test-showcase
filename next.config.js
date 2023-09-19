/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.rawg.io",
                port: "",
                pathname: "/media/games/**",
            },
        ],
    },
    env: {
        API_KEY: process.env.API_KEY,
    },
};

module.exports = nextConfig;
