/* imports */
const Controller = require('./Controller');

class MainController extends Controller {

    index(Request, Response, Dependencies) {
        Response.render('index', {
            time: Dependencies.moment().format('YYYY-MM-DD')
        });
    }

    contact(Request, Response) {
        console.log();
        Response.render('contact', {
            data: Request.params
        });
    }

    handlePost(Request, Response) {
        Response.render('data', {
            data: Request.body,
            args: Request.params
        });
    }
}



module.exports = new MainController();