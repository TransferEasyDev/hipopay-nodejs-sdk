const config = require('../../../config');
const alipay = require(config.ROOT_PATH + '/entity/alipay');

params = {
    //以下三个请求参数三选一
    'out_order_no': '18051893975650968',            // 商户订单号	否	String
    'payment_no': '20180518163203689',              // HipoPay支付单号	否	String
    'sub_order_no': '2018051716124',                // 商户子订单号	否	String
};
// isHK 是否使用支付宝香港钱包，取值"TRUE"/"FALSE"，默认值为"FALSE"
let ali = new alipay.Alipay({'isHK':false, 'isCNY':false});
ali.getDeclaration(params);

