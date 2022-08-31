/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  apiPath: 'https://api.fillfin.com',
  socketPath: 'https://socket.fillfin.com',
  images: {
    domains: ['api.fillfin.com'],
  }
}

module.exports = nextConfig
