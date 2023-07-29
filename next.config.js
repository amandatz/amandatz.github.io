/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer(nextConfig)
