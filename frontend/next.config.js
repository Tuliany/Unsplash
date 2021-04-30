const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')


module.exports = {
    future: {
        webpack5: true,
    },
    webpack: function (config, options) {
        config.experiments = {};
        return config;
    },
    images: {
        domains: ['images.unsplash.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
}