const config = require('../../../config');
const alipay = require(config.ROOT_PATH + '/entity/alipay');


params = {
    'merchant_no': config.MERCHANT_NO,
    'start_date': '20190701',
    'end_date': '20190720',
};
let ali = new alipay.Alipay();
ali.getBill(params);
