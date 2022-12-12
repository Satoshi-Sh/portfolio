const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/blogapi',
    createProxyMiddleware({
      target: 'https://gleaming-erin-blazer.cyclic.app',
      changeOrigin: true,
    })
  );
};