/**
 * Frame Core file.
 */

const { __APP__, __PORT__, __VIEWS__ } = require('../frame.config.js');

const twig = require('twig'); // call twig

__APP__.set('view engine', 'twig'); // set twig

__APP__.set('views', __VIEWS__); // set views directory

__APP__.get('/favicon.ico', (req, res) => res.status(204));

class Frame {

    __APP__;

    constructor(app) {
        this.__APP__ = app;
    }
    
    run(app) {
        __APP__.listen(__PORT__, () => {
            console.log(`Example app listening on port ${__PORT__}`);
        });
    }
    
    get(path, callback, middleware = null) {
        try {
            __APP__.get(path, (req, res) => callback[0][callback[1]](req, res));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    post(path, callback, middleware = null) {
        try {
            __APP__.post(path, (req, res) => callback[0][callback[1]](req, res));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    middlewares(middleware) {
        if (Array.isArray(middleware)) {
            middleware.forEach(middleware => {
                this.__APP__.use((req, res, next) => {
                    middleware.handle(req, res);
                    next();
                });
            })
        } else {
            this.__APP__.use((req, res, next) => {
                middleware.handle
                next();
            });
        }
        
        return this;
    }
}


module.exports = new Frame(__APP__);
