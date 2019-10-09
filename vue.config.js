const path = require('path');
const app_env = process.env.VUE_APP_ENV;
const isCordova = process.env.VUE_BUILD_TYPE === 'cordova';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }
  },

  publicPath: '/',

  //输出文件夹，我这里设为www,主要是和Cordova配合生成安卓应用的。
  outputDir: 'dist',
  assetsDir: 'app/theme/template1/',
  //不生成map
  productionSourceMap: false,

  runtimeCompiler: isCordova,

  css: {
 //   modules: true
  },

  pluginOptions: {
    cordovaPath: 'cordova'
  }
}
