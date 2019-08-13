
const hipopay = require('./hipopay');
const base = require('./base');


class WechatCN extends base.Base {


    app_pay(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/app/payment',
            "params": params});
        request.post();
    }

    mp_pay(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/mp/payment',
            "params": params});
        request.post();
    }

    mini_program_pay(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/mini_program/payment',
            "params": params});
        request.post();
    }

    consumer_scan_web(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/web/payment',
            "params": params});
        request.post();
    }

    consumer_scan_device(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/qrcode/payment',
            "params": params});
        request.post();
    }

    merchant_scan_consumer(params){
        params = this.if_cny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/barcode/payment',
            "params": params});
        request.post();
    }

    get_rate(params){
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/forex_rate',
            "params": params});
        request.get();
    }
}

module.exports = Object.freeze({
    WechatCN: WechatCN,
});
