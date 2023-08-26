/* imports */
const Controller = require('./Controller');

class RouteController extends Controller {
    
    title = 'Main Site';

    constructor() {
        super();
    }

    404(Request, Response) {
        
        Response.render('layout/errors/404');
    }
}



module.exports = new RouteController();