
const hipopay = require('./hipopay');
const base = require('./base');


class Alipay extends base.Base {

    __is_hk(params) {
        if (this.is_hk){
            params['hk_wallet'] = 'true';
        }
        return params;
    }

    app_pay(params) {
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/app/payment',
            "params": params});
        request.post();
    }

    wap_pay(params) {
        params = this.if_cny(params);
        params = this.__is_hk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/wap/payment',
            "params": params});
        request.post();
    }

    consumer_scan_merchant(params) {
        params = this.__is_hk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/qrcode/payment',
            "params": params});
        request.post();
    }

    consumer_scan_web(params) {
        params = this.__is_hk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/web/payment',
            "params": params});
        request.post();
    }

    merchant_scan_conumer(params) {
        params = this.__is_hk(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/barcode/payment',
            "params": params});
        request.post();
    }

    get_rate(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/alipay/forex_rate',
            "params": params});
        request.get();
    }
}

module.exports = Object.freeze({
    Alipay: Alipay,
});