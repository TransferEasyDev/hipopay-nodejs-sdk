const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');


/* 第一步 获取用户登录凭证 */
/* 第二步 获取openid */
/* 第三步 下单,调用下列接口,传入参数 */
params = {
    'merchant_no': config.MERCHANT_NO,          // 商户交易流水号 Y
    'out_trade_id': 'your_trande_id',          // 商户交易流水号 Y
    'amount': '1',                             // 支付单金额，单位为元，精度最多小数点后两位(如果是JPY和KRW，单位为分) Y
    'currency': 'HKD',                         // 支付单结算币种
    'product_info': 'test product',            // 商品信息
    'appid': config.MERCHANT_MINI_APPID,              // 微信appid
    'openid': 'user_openid',                   // 用户openid
    'client_ip': 'test_agent_order_id',        // 客户端设备IP地址
    'notify_url': 'your_notify_url',           // 异步通知地址
};
let wechat_cn = new wechatCN.WechatCN({'isHK':false, 'isCNY':false});
wechat_cn.miniProgramPay(params);
