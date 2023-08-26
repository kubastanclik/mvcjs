class Middleware {

    __CONFIG__;

    constructor() {
        this.__CONFIG__ = require('../../frame.config');
        this.handle();
    }

    handle() {
        
    }

    class() {
        return this.constructor.name;
    }
}

module.exports = Middleware;