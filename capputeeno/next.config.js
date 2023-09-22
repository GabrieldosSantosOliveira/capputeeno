/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{styledComponents:true},
  images:{
    remotePatterns: [{
      protocol: 'https',
      hostname: 'storage.googleapis.com',
    }]
  }
}

module.exports = nextConfig
