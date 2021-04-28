const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')


module.exports = {
   
    images: {
        domains: ['images.unsplash.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
}