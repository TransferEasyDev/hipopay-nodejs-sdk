
const hipopay = require('./hipopay');

class Base {
    constructor(is_hk=false, is_cny=false) {
        this.is_hk = is_hk;
        this.is_cny = is_cny;
    }

    if_cny(params){
        if (this.is_cny) {
            params['is_rmb'] = 'TRUE';
        }
        return params;
    }

    get_bill(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/download_bill',
            "params": params});
        request.get();
    }

    get_payment(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment',
            "params": params});
        request.get();
    }

    refund(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment_refund',
            "params": params});
        request.post()
    }

    get_refund(params) {
        let request = new hipopay.HipoPay({
            "apiUrl": '/payment_refund',
            "params": params});
        request.get()
    }
}

module.exports = Object.freeze({
    Base: Base,
});