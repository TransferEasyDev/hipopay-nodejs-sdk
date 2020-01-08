const config = require('../../../config');
const alipay = require(config.ROOT_PATH + '/entity/alipay');

params = {
    'out_order_no': '18051893975650968',            // 商户订单号	是	String
    'payment_no': '20180518163203689',              // HipoPay支付单号	是	String
    'customs':  'SHENZHEN',                         // 海关编号(如：SHENZHEN)	是	String
    'mch_customs_no':  '123456789BTW',              // 商户海关备案号	是	String
    'merchant_customs_name':  'xxxhanguo_card',     // 商户海关备名称	是	String
    'sub_order_no': '2018051716124',                // 商户子订单号	是	String
    //注意：应付金额=物流费+商品费
    'sub_order_amount': 46.44,                      // 子订单金额	是	float

    //若要身份验证则需要填以下参数
    'cert_id': '510921199308772318',                //身份证号	是	String
    'name': 'Lisa',                                 //姓名	是	String
};
// isHK 是否使用支付宝香港钱包，取值"TRUE"/"FALSE"，默认值为"FALSE"
let ali = new alipay.Alipay({'isHK':false, 'isCNY':false});
ali.declaration(params);

