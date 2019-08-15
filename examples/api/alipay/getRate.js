const alipay = require('../../../entity/alipay');

params = {
    'currency': 'HKD',   // 币种	是
};
let ali = new alipay.Alipay();
ali.get_rate(params);

