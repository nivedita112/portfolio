/** @type {import('next').NextConfig}**/
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // replace with your GitHub repository name
  assetPrefix: '/portfolio/',
  images : {
  unoptimized: true,
  },
};


module.exports = nextConfig
