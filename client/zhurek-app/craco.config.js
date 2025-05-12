module.exports = {
  devServer: {
    proxy: {
      '/gateway/api/v1': {
        target: 'http://localhost:8088',
        // secure: false,
        changeOrigin: true,
      }
    }
  }
};
