const config = require('../../../config');
const wechatCN = require(config.ROOT_PATH + '/entity/wechatCN');

params = {
    'merchant_no': config.MERCHANT_NO,
    'start_date': '20190701',
    'end_date': '20190720',
};
let wechat_cn = new wechatCN.WechatCN();
wechat_cn.getBill(params);
