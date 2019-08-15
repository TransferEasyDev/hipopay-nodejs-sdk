const config = require('../../../config');
const bs = require('../../../entity/baseServer');

class MpServer extends bs.BaseServer {
    '这里写server的其他方法'
}

let mp = new MpServer();

mp.initRenderRouterGet({
    url:'/mp_pay',
    renderHtmlPath:config.ROOT_PATH + '/views/mp_pay_index.html',
    params:{openid: '', merchant_no: ''},
});

mp.initRenderRouterPost({
        url:'/mp_pay',
        renderHtmlPath:config.ROOT_PATH + '/views/mp_pay_index.html',
        params:{openid: '', merchant_no: ''},
        // callback: applicationExcute
});

mp.startServer();
