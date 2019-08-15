const express = require('express');
const multer = require('multer');
const ejs = require('ejs');

const config = require('../config');

class BaseServer {
    constructor() {
        this.app = express();
        this.upload = multer();

        this.app.use(express.static(config.ROOT_PATH + '/public'));
        this.app.engine('html', ejs.renderFile);
        this.app.use(this.upload.array());
    }

    initRenderRouterGet({url, renderHtmlPath, params, callback}) {

        this.app.get(url, function (req, res) {
            Object.assign(params,req.query);
            console.log(params);
            if (callback) {
                callback('可以在这里运行业务代码');
            }
            res.render(renderHtmlPath, params);
        });
    }
    initRenderRouterPost({url, renderHtmlPath, params, callback}) {

        this.app.post(url, function (req, res) {
            Object.assign(params,req.body);
            console.log(params);
            if (callback) {
                callback('可以在这里运行业务代码');
            }
            res.render(renderHtmlPath, params);
        })
    }

    initRouterPost({url, content, params, callback}) {

        this.app.post(url, function (req, res) {
            Object.assign(params,req.body);
            console.log(params);
            if (callback) {
                callback('可以在这里运行业务代码');
            }
            res.write(content);
            res.end();
        })
    }

    startServer() {
        const server = this.app.listen(8086, function () {

            const host = '127.0.0.1';
            const port = server.address().port;
            console.log("应用实例，访问地址为 http://%s:%s/", host, port)

        });
    }
}

module.exports = Object.freeze({
    BaseServer: BaseServer,
});