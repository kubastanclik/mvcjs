const Middleware = require('./Middleware');

class LogMiddleware extends Middleware {

    handle(Request, Response) {
        const Log = require('../../Core/Bootstrap/Log.js');
        
        Log.addToAccessLog(Request, Response)
    }
}


module.exports = new LogMiddleware();
        