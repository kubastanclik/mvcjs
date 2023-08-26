/* imports */
const { __APP_NAME__ } = require('../../frame.config');
const Controller = require('./Controller');

class MainController extends Controller {
    
    title = 'Main Site';

    constructor() {
        super();
    }

    index(Request, Response) {
        let params = {
            appName: __APP_NAME__
        };
        Response.render('index', params);
    }
}



module.exports = new MainController();