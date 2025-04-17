/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    experimental: {
        webpackMemoryOptimizations: true,
    },
    images: {
        remotePatterns: [new URL('https://picsum.photos/**')],

    },
};

export default nextConfig;
