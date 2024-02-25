/* imports */
const Controller = require('./Controller');
const Doc = require('../../Core/Doc/doc.core');

class MainController extends Controller {

    index(Request, Response) {

        Response.render('index', {
            time: Doc.list()
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