/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  apiPath: 'http://192.168.1.54:8001',
  socketPath: 'http://192.168.1.54:5000',
  images: {
    domains: ['192.168.1.54'],
  }
}

module.exports = nextConfig
