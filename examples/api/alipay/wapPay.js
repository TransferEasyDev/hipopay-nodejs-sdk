const config = require('../../../config');
const alipay = require(config.ROOT_PATH + '/entity/alipay');

params = {
    'out_trade_id': 'your_trade_id',        // 商户交易流水号  Y
    'amount': '100',                        // 支付单金额，单位为元，精度最多小数点后两位(如果是JPY和KRW，单位为分) Y
    'currency': 'HKD',                      // 计价币种 Y
    'product_info': 'test product',         // 商品信息 Y
    'client_ip': '0.0.0.0',                 // 客户端设备IP地址 Y
    'return_url': 'your_return_url',        // 跳转地址 Y
    'notify_url': 'your_notify_url',        // 异步通知地址  N
};

// isHK 是否使用支付宝香港钱包，取值"TRUE"/"FALSE"，默认值为"FALSE"
let ali = new alipay.Alipay({'isHK':false, 'isCNY':false});
ali.wapPay(params);

