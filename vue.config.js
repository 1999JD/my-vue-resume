const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "My Vue App";
        return args;
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/my-vue-resume/' : '/'
};