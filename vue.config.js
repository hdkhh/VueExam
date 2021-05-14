// vue.config.js
const path = require('path');
const webpack = require('webpack')

module.exports = {
    // eslint 무시
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    productionSourceMap: false,  //map파일 비활성
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'

    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': path.join(__dirname, 'src/')
    //         }
    //     }
    // }

    // configureWebpack: { 
    //     output: { 
    //         filename: '[name].[hash].bundle.js' 
    //     } 
    // }
};