
const hipopay = require('./hipopay');

class Base {
    constructor(is_hk, is_cny) {
        this.is_hk = is_hk;
        this.is_cny = is_cny;
    }

    ifCny(params){
        if (this.is_cny) {
            params['is_rmb'] = 'TRUE';
        }
        return params;
    }

    getBill(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/download_bill',
            "params": params
        });
        request.get();
    }

    getPayment(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment',
            "params": params
        });
        request.get();
    }

    refund(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment_refund',
            "params": params
        });
        request.post()
    }

    getRefund(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment_refund',
            "params": params
        });
        request.get()
    }
}

module.exports = Object.freeze({
    Base: Base,
});