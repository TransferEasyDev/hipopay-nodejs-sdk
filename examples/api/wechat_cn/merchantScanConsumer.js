const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'out_trade_id': 'your_trade_id',           // 商户交易流水号 Y
    'amount': 'USD',                           // 支付单金额，单位为元，精度最多小数点后两位(如果是JPY和KRW，单位为分) Y
    'currency':  '0.01',                       // 支付单结算币种 Y
    'auth_code':  '',                          // 二维码内容 Y
    'product_info':  '',                       // 商品信息 Y
    'client_ip': '',                           // 客户端设备IP地址 Y
    'notify_url': '0.0.0.0',                   // 异步通知地址 N
}
// is_cny 是否采用人民币(CNY)计价，取值"TRUE"/"FALSE"，默认值为"FALSE"
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.merchantScanConsumer(params);
