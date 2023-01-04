const {createProxyMiddleware} = require("http-proxy-middleware");
const URL = process.env.REACT_APP_URL_API

module.exports = app => {
    app.use(
        createProxyMiddleware(`${URL}/temas.php`, {
            target: 'https://serversoziali-production.up.railway.app',
            changeOrigin: true,
        })
    )
}