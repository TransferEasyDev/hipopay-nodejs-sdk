
const hipopay = require('./hipopay');
const base = require('./base');


class WechatCN extends base.Base {


    appPay(params){
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/app/payment',
            "params": params});
        request.post();
    }

    miniProgramPay(params){
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/mini_program/payment',
            "params": params});
        request.post();
    }

    consumerScanWeb(params){
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/web/payment',
            "params": params});
        request.post();
    }

    consumerScanDevice(params){
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/qrcode/payment',
            "params": params});
        request.post();
    }

    merchantScanConsumer(params){
        params = this.ifCny(params);
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/barcode/payment',
            "params": params});
        request.post();
    }

    getRate(params){
        let request = new hipopay.HipoPay({
            "apiUrl": '/wechatpay/forex_rate',
            "params": params});
        request.get();
    }
}

module.exports = Object.freeze({
    WechatCN: WechatCN,
});
