/* imports */
const Controller = require('./Controller');
const Doc = require('../../Core/Doc/Doc.core');
const {request} = require("express");

class MainController extends Controller {

    index(Request, Response) {

        let data = 'asd';
        let file = `${Request.query.file}.txt`;

        Doc.disc('files');

        Doc.save(data, file);

        Response.render('index', {
            time: ''
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