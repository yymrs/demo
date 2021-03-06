var data = require('./routers/data.js')

//配置项
module.exports = {
    devServer: {
        // 配置信息：https://github.com/chimurai/http-proxy-middleware#options    https://h5.ele.me
        proxy: {
            "/api": {
                // https://u.m.gome.com.cn
                target: "http://localhost:3000", //设置调用的目标接口主机名和商品
                changeOrigin: true, //是否跨域
                ws: false, // 是否使用websocket
                pathRewrite: {
                    "^/api": "" //重写接口，如果你访问的接口是：/api/users/getUsers重写接口时，会把/api用空字符替换，并和target拼接，从而接口地址变成http://localhost:3000/users/getUsers
                },
                cookieDomainRewrite: { "*": "localhost" } // 域名重写，把所有其他域名重写成localhost，让cookies跨域。登录时让cookies跨域。
            },
            "/guomei":{
                target: "https://u.m.gome.com.cn", //设置调用的目标接口主机名和商品
                changeOrigin: true, //是否跨域
                ws: false, // 是否使用websocket
                pathRewrite: {
                    "^/guomei": "" //重写接口，如果你访问的接口是：/api/users/getUsers重写接口时，会把/api用空字符替换，并和target拼接，从而接口地址变成http://localhost:3000/users/getUsers
                },
                cookieDomainRewrite: { "*": "localhost" }
            },
            "/mineo":{
                target: "https://m.gome.com.cn", //设置调用的目标接口主机名和商品
                changeOrigin: true, //是否跨域
                ws: false, // 是否使用websocket
                pathRewrite: {
                    "^/mineo": "" //重写接口，如果你访问的接口是：/api/users/getUsers重写接口时，会把/api用空字符替换，并和target拼接，从而接口地址变成http://localhost:3000/users/getUsers
                },
                cookieDomainRewrite: { "*": "localhost" }
            }
        },
        // 自已编写的接口   
        before: app => {
            data(app);
        }
    }
}