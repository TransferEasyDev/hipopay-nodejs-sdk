const alipay = require('../../../entity/alipay');


params = {
    'payment_no': 'hp_payment_no',        // 支付单号 N
    'out_trade_id': 'your_trade_id',      // 商户交易流水号 N
};
let ali = new alipay.Alipay();
ali.get_payment(params);

