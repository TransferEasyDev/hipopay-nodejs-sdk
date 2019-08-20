
const hipopay = require('./hipopay');

class Base {
    constructor({isHK, isCNY}) {
        this.isHK = isHK;
        this.isCNY = isCNY;
        console.log(this.isCNY);
        console.log(this.isHK);
    }

    ifCny(params){
        if (this.isCNY) {
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