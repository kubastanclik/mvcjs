const Middleware = require('./Middleware');

class LogMiddleware extends Middleware {

    handle(Request, Response) {
        console.log(Request?.query);
    }
}


module.exports = new LogMiddleware();
        