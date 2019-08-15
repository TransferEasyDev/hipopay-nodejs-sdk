const alipay = require('../../../entity/alipay');
const config = require('../../../config');


params = {
    'merchant_no': config.MERCHANT_NO,
    'start_date': '20190101',
    'end_date': '20190120',
};
let ali = new alipay.Alipay();
ali.get_bill(params);
