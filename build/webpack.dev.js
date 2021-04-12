const { smart } = require('webpack-merge')
const path = require('path')
const CommonConf = require('./webpack.common')

module.exports = smart(CommonConf, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path:  path.join(__dirname, '..', 'dist'),
        library: 'miniEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    devtool: 'eval-source-map',
})
