module.exports = {
  //关闭ESlint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // pathRewrite: {'^/api': ''}
        //13700000000 111111
      }
    }
  }
}