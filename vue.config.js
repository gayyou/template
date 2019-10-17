const webpack = require("webpack");
const path = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: false,
  // 下面为代理服务器配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001',          // 目标服务器的基础地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // 构建时开启多进程处理 babel 编译
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // 编译scss文件
  pluginOptions: {
    'sass-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/mixin.scss')
      ]
    }
  },
}
