const alipay = require('../../../entity/alipay');


params = {
    'refund_no': 'hp_refund_no',        // 退款单号，和out_refund_id不可同时为空
    'out_refund_id': 'your_refund_id',  // 外部退款单号，和refund_no不可同时为空
};
let ali = new alipay.Alipay();
ali.get_refund(params);

