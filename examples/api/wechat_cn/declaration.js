const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'out_order_no': '18051893975650968',            // 商户订单号	是	String
    'payment_no': '20180518163203689',              // HipoPay支付单号	是	String
    'customs':  'SHENZHEN',                         // 海关编号(如：SHENZHEN)	是	String
    'mch_customs_no':  '123456789BTW',              // 商户海关备案号	是	String
    'duty':  88,                                    // 关税以分为单位（部分海关需要此参数）	否	int
    'action_type': '',                              // 否	String	ADD
                                                    //ADD(新增): 默认值
                                                    //MODIFY(修改): 与首次报关参数一致
    'sub_order_no': '2018051716124',                // 商户子订单号	是	String

    //注意：应付金额=物流费+商品费
    'sub_order_amount': 46.44,                      // 子订单金额	是	float
    'transport_amount': 46.44,                      // 物流费	是	float
    'product_amount': 46.44,                        // 商品价格	是	float

    //若要身份验证则需要填以下参数
    'cert_id': '510921199308772318',                //身份证号	是	String
    'name': 'Lisa',                                 //姓名	是	String
};
let wechat_cn = new wechatCN.WechatCN({'isHK':false, 'isCNY':false});
wechat_cn.declaration(params);
