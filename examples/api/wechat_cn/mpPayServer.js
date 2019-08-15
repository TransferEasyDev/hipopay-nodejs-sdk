const config = require('../../../config');
const bs = require(config.ROOT_PATH + '/entity/baseServer');

class MpServer extends bs.BaseServer {
    // '这里写server的其他方法'
}

let mp = new MpServer();

mp.initRenderRouterGet({
    url:'/mpPay',
    renderHtmlPath:config.ROOT_PATH + '/views/mp_pay_index.html',
    params:{openid: '', merchant_no: ''},
});

mp.startServer();
