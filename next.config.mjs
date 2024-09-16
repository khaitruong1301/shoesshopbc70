/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix:'https://cdn.jsdelivr.net'
    images:{
        remotePatterns: [
            {
                protocol:'https',
                port:'',
                hostname:'apistore.cybersoft.edu.vn',
                pathname:'**'
            }
        ],
        formats:['image/avif','image/webp']
    }
};

export default nextConfig;
