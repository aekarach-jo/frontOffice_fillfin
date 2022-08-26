/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  apiPath: 'http://api.fillfin.com',
  socketPath: 'http://socket.fillfin.com',
  images: {
    domains: ['http://api.fillfin.com'],
  }
}

module.exports = nextConfig
