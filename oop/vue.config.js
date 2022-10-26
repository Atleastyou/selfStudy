module.exports = {
  publicPath: '/',
  
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: process.env.NODE_ENV === 'production'
  },
  
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 3000,
    open: true,
    proxy: {
      '/api/*': {
        target: 'http://192.168.2.30:8098',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  
  configureWebpack: config => {},
  
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false
}