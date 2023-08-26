/* imports */
const moment = require('moment');

class Controller {
    
    moment;

    constructor() {
        this.moment = moment();
    }

    class() {
        return this.constructor.name;
    }
}

module.exports = Controller;