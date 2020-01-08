const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    //以下三个请求参数三选一
    'out_order_no': '18051893975650968',            // 商户订单号	否	String
    'payment_no': '20180518163203689',              // HipoPay支付单号	否	String
    'sub_order_no': '2018051716124',                // 商户子订单号	否	String
};
let wechat_cn = new wechatCN.WechatCN({'isHK':false, 'isCNY':false});
wechat_cn.redeclaration(params);
