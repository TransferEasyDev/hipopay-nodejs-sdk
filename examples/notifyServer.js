const config = require('../config');
const bs = require('../entity/baseServer');

class NotifyServer extends bs.BaseServer {
    '这里写server的其他方法'
}

let ns = new NotifyServer();

ns.initRouterPost({
    url: '/notify',
    content: 'success',
    params: {
        status: '',
        trade_type: '',
        exchange_rate: '',
        payment_no: '',
        currency: '',
        settle_currency: '',
        amount: '',
        trade_time: '',
        finish_time: '',
        pay_currency: '',
        pay_amount: '',
        out_trade_id: ''
    }
});

ns.startServer();
