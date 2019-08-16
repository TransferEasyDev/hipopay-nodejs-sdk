const fs = require("fs");
const crypto = require('crypto');

const config = require('../config');
const bs = require(config.ROOT_PATH + '/entity/baseServer');

class NotifyServer extends bs.BaseServer {
    // '这里写server的其他方法';
    static getParam(params){
        let origin_str = "";

        let keys = Object.keys(params).sort();

        for(let i in keys) {
            if (i === "0"){
                origin_str = keys[i] + '=' + params[keys[i]];
            }
            else {
                origin_str += "&" + keys[i] + '=' + params[keys[i]];
            }
        }
        return origin_str;
    }

    static callbackVerify({signature, timestamp, params}) {
        // 组织原始加密字串
        // console.log(params);
        // TODO: 还获取不到HP发来的参数，不知道这帮人咋搞的
        console.log(signature);

        // Signature处理
        let sigBuf = new Buffer(signature, 'base64');
        signature = sigBuf.toString();
        console.log(signature);

        // 参数组织
        console.log(params);
        let param_str = NotifyServer.getParam(params);
        param_str += "," + timestamp;
        console.log(param_str);

        // 读取验签公钥
        let publicKey = fs.readFileSync(config.HP_PUBLIC_KEY_PATH, "ascii");

        // 验签
        let verify = crypto.createVerify("RSA-SHA256");
        verify.update(param_str);
        return verify.verify(publicKey, signature, 'hex')
        // TODO: 验签还不对
    }

    initRouterPost({url, content, params, callback}) {
        this.app.post(url, function (req, res) {
            // 获取Signature
            let signature = req.header('signature');
            // 获取时间戳
            let timestamp = req.header('timestamp');
            // 获取参数
            Object.assign(params,req.body);

            // console.log(req.body);


            let verifyResult = NotifyServer.callbackVerify({
                signature: signature,
                timestamp: timestamp,
                params: params
            });

            // 判断结果
            console.log(verifyResult);
            if (verifyResult) {
                if (callback) {
                    callback('可以在这里运行业务代码');
                }
                res.write(content);
                res.end();
            }
            else {
                res.write('signature verified failed !!!');
                res.end();
            }
        })
    }
}

let ns = new NotifyServer();

ns.initRouterPost({
    url: '/notify',
    content: 'success',
    params: {
        status: '',
        trade_type: '',
        exchange_rate: '',
        payment_no: '',
        currency: '',
        settle_currency: '',
        amount: '',
        trade_time: '',
        finish_time: '',
        pay_currency: '',
        pay_amount: '',
        out_trade_id: ''
    }
});

ns.startServer();
