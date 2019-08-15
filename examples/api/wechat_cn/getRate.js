const wechatCN = require('../../../entity/wechatCN');

params = {
    'currency': 'HKD',                              // 币种	        是
};
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.get_rate(params);
