const path = require('path')
const { smart } = require('webpack-merge')
const CommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 包体积分析
const isAnalyzer = process.env.NODE_ENV === 'production_analyzer'

const plugins = [new CleanWebpackPlugin()]
if (isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin())
}

module.exports = smart(CommonConf, {
    mode: 'production',
    output: {
        filename: '[name].min.js',
        path:  path.join(__dirname, '..', 'dist'),
        library: 'miniEditor',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    plugins,
    devtool: 'source-map',
})
