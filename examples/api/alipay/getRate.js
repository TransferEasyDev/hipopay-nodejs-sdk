const config = require('../../../config');
const alipay = require(config.ROOT_PATH + '/entity/alipay');

params = {
    'currency': 'HKD',   // 币种	是
};
let ali = new alipay.Alipay({'isHK':false, 'isCNY':false});
ali.getRate(params);

