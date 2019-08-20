const fs = require("fs");
const crypto = require('crypto');
const https = require('https');
const qs = require('querystring');
const config = require("../config");

class HipoPay {

    constructor({apiUrl, params}) {
        this.apiUrl = apiUrl;
        this.params = params;

        this.timestamp = Date.now();

        this.signature = this.sign();

        this.headers = {
            "MerchantNO": config.MERCHANT_NO,
            "Version": config.MERCHANT_API_VERSION,
            "Timestamp": this.timestamp,
            "Signature": this.signature,
            "Content-Type":'application/x-www-form-urlencoded',

        };

        if (apiUrl === '/download_bill') {
            this.headers["Version"] = '3.0'
        }
    }

    getOriginStr(){
        let origin_str = "";

        let keys = Object.keys(this.params).sort();

        for(let i in keys) {
            if (i === "0"){
                origin_str = keys[i] + '=' + encodeURIComponent(this.params[keys[i]]);
            }
            else {
                origin_str += "&" + keys[i] + '=' + encodeURIComponent(this.params[keys[i]]);
            }
        }
        origin_str = origin_str + ',' + this.timestamp;
        return origin_str;
    }

    getParam(){
        let origin_str = "";

        let keys = Object.keys(this.params).sort();

        for(let i in keys) {
            if (i === "0"){
                origin_str = keys[i] + '=' + this.params[keys[i]];
            }
            else {
                origin_str += "&" + keys[i] + '=' + this.params[keys[i]];
            }
        }
        return origin_str;
    }


    sign() {
        let origin_str = this.getOriginStr();
        let privateKey = fs.readFileSync(config.MERCHANT_PRIVATE_KEY_PATH, "ascii");
        // console.log(privateKey);
        console.log(origin_str);

        let signObj = crypto.createSign("RSA-SHA256");
        signObj.update(origin_str);
        let signature = signObj.sign(privateKey);
        return signature.toString('base64');
    }

    get() {
        let params = this.getParam();
        const options = {
            hostname: config.HP_HOST,
            port: 443,
            path: this.apiUrl + '?' + params,
            method: 'GET',
            headers: this.headers,
        };
        const req = https.request(options, (res) => {
            console.log('状态码:', res.statusCode);
            console.log('请求头:', this.headers);
            console.log('参数:', this.params);
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });
        req.on('error', (e) => {
            console.error(e);
        });
        req.end();
    }

    post() {
        const options = {
            hostname: config.HP_HOST,
            port: 443,
            path: this.apiUrl,
            method: 'POST',
            headers: this.headers,
        };
        const req = https.request(options, (res) => {
            console.log('状态码:', res.statusCode);
            console.log('请求头:', this.headers);
            console.log('参数:', this.params);
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });
        req.on('error', (e) => {
            console.error(e);
        });
        let content=qs.stringify(this.params);
        req.write(content);
        req.end();
    }

    // delete() {}
    
    // put() {}
}

module.exports = Object.freeze({
    HipoPay: HipoPay,
});

