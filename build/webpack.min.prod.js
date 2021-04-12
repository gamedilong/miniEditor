const { smart } = require('webpack-merge')
const CommonConf = require('./webpack.common')

module.exports = smart(CommonConf, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path:  path.join(__dirname, '..', 'dist'),
        library: 'miniEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    devtool: 'source-map',
    optimization: {
        minimize: false, // 非压缩
    },
})
