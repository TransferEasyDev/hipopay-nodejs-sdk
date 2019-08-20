const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'payment_no': 'hp_payment_no',        // 支付单号 N
    'out_refund_id': 'your_refund_id',    // 外部退款单号 N
    'refund_amount': '100',               // 退款金额。传入此参数，可发起多次退款，退款总额不超过订单金额；不传此参数则是全额退款；
};

let wechat_cn = new wechatCN.WechatCN({'isHK':false, 'isCNY':false});
wechat_cn.refund(params);

