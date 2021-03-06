const hipopay = require('./hipopay');
const base = require('./base');


class Alipay extends base.Base {

    isHk(params) {
        if (this.isHK){
            params['hk_wallet'] = 'true';
        }
        return params;
    }

    appPay(params) {
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/app/payment',
            "params": params
        });
        request.post();
    }

    wapPay(params) {
        params = this.ifCny(params);
        params = this.isHk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/wap/payment',
            "params": params
        });
        request.post();
    }

    consumerScanMerchant(params) {
        params = this.isHk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/qrcode/payment',
            "params": params
        });
        request.post();
    }

    consumerScanWeb(params) {
        params = this.isHk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/web/payment',
            "params": params
        });
        request.post();
    }

    merchantScanConumer(params) {
        params = this.isHk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/barcode/payment',
            "params": params
        });
        request.post();
    }

    getRate(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/forex_rate',
            "params": params
        });
        request.get();
    }
    declaration(params){
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/declaration',
            "params": params
        });
        request.post();
    }

    getDeclaration(params){
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/declaration',
            "params": params
        });
        request.get();
    }

    redeclaration(params){
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/redeclaration',
            "params": params
        });
        request.post();
    }
}

module.exports = Object.freeze({
    Alipay: Alipay,
});