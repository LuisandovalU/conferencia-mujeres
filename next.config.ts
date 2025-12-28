import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    typescript: {
        // !! ATENCIÓN: Solo para emergencias !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // !! ATENCIÓN: Solo para emergencias !!
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;