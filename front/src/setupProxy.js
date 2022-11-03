const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/user', '/question', '/answer'],
    createProxyMiddleware({
      target: 'https://1814-211-179-90-114.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};