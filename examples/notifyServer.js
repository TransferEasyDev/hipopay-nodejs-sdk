const fs = require("fs");
const crypto = require('crypto');
const xml2json=require('xml2json');
const bodyParser = require('body-parser');

const config = require('../config');
const bs = require(config.ROOT_PATH + '/entity/baseServer');

class NotifyServer extends bs.BaseServer {
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
        // 参数组织
        let param_str = NotifyServer.getParam(params);
        param_str = new Buffer(param_str).toString('utf8');
        param_str += "," + timestamp;
        console.log(param_str);

        // Signature处理
        signature = new Buffer(signature, 'base64').toString();

        // 读取验签公钥
        let publicKey = fs.readFileSync(config.HP_PUBLIC_KEY_PATH, "ascii");

        // 验签
        let verify = crypto.createVerify("RSA-SHA256");
        verify.update(param_str);
        return verify.verify(publicKey, signature, 'hex')
        // TODO: 验签还不对
    }

    initRouterPost({url, content, params, callback}) {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.post(url, function (req, res) {
            // 获取Signature
            let signature = req.header('signature');
            // 获取时间戳
            let timestamp = req.header('timestamp');
            // 获取参数
            Object.assign(params,req.body);

            /* 这段代码是处理header没写 content type的情况, python不带header类型为 text/xml */
            req.rawBody = '';//添加接收变量
            let json={};
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                req.rawBody += chunk;
            });
            req.on('end', function() {
                json=xml2json.toJson(req.rawBody);
                res.send(JSON.stringify(json));
            });
            /* 这段代码是处理header没写 content type的情况, python不带header类型为 text/xml */

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
