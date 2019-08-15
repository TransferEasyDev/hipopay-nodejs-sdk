const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'currency': 'HKD',                              // 币种	        是
};
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.getRate(params);
