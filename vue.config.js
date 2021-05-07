const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Joyce' Vue Simple Resume";
        return args;
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/my-vue-resume/' : '/'
};