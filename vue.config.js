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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('postcss-plugin-px2rem')({
            rootValue: 100, // 换算基数，把根标签的字体规定为1rem为100px
            unitPrecision: 8, // 允许REM单位增长到的十进制数字。
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 1 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    },
  },
}
