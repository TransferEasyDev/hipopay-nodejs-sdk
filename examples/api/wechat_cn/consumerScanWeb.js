const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'out_trade_id': '20190815002',             // 商户交易流水号 Y
    'amount': '1',                              // 支付单金额，单位为元，精度最多小数点后两位(如果是JPY和KRW，单位为分) Y
    'currency': 'HKD',                           // 支付单结算币种
    'product_info': 'test',                      // 商品信息
    'client_ip': '127.0.0.1',                    // 客户端设备IP地址
    'notify_url': 'http://vukv2v.natappfree.cc/notify',             // 异步通知地址
};
// is_cny 是否采用人民币(CNY)计价，取值"TRUE"/"FALSE"，默认值为"FALSE"
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.consumerScanWeb(params);
