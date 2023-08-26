class Middleware {

    constructor() {
        this.handle();
    }

    handle() {
        
    }

    class() {
        return this.constructor.name;
    }
}

module.exports = Middleware;