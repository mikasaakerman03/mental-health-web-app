module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8080',
        logLevel: 'debug',
        // secure: true,
        // changeOrigin: true,
      }
    },
  }
};
