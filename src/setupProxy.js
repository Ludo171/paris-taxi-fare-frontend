const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(createProxyMiddleware('/rides',
    { target: 'http://localhost:4000/' }
  ));
  app.use(createProxyMiddleware('/pricing',
    { target: 'http://localhost:5000/' }
  ));
}
