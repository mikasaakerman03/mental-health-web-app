module.exports = {
  devServer: {
    proxy: {
      '/gateway/api/v1': {
        target: 'http://127.0.0.1:8088',
        // secure: false,
        changeOrigin: true,
      }
    }
  }
};
