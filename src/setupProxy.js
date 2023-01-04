const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware('/temas.php', {
            target: 'https://serversoziali-production.up.railway.app',
            changeOrigin: true,
        })
    )
}