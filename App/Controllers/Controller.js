/* imports */
const moment = require('moment');

class Controller {
    
    moment;
    static __NAME__ = 'ASD';

    constructor() {
        this.moment = moment();
    }

    class() {
        return this.constructor.name;
    }
}

module.exports = Controller;