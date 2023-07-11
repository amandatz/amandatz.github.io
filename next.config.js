/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = (phase, {defaultConfig}) => {
    if ('sassOptions' in defaultConfig) {
        defaultConfig['sassOptions'] = {
            includePaths: ['./src'],
            prependData: `@use "@styles/_variables.scss";`,
        }
    }
    return defaultConfig;
}

module.exports = nextConfig
