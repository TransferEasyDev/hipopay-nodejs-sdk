const wechatCN = require('../../../entity/wechatCN');
const config = require('../../../config');

params = {
    'merchant_no': config.MERCHANT_NO,
    'start_date': '20190101',
    'end_date': '20190120',
};
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.get_bill(params);
