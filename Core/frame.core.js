/**
 * Frame Core file.
 */

const { __APP__, __PORT__, __VIEWS__ } = require('../frame.config.js');

const twig = require('twig'); // call twig

__APP__.set('view engine', 'twig'); // set twig

__APP__.set('views', __VIEWS__); // set views directory

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

    use(middleware) {
        if (Array.isArray(middleware)) {
            middleware.forEach(middleware => {
                if (Array.isArray(middleware)) {
                    this.__APP__.use(middleware[0][middleware[1]]());
                } else {
                    this.__APP__.use(middleware);
                }
            })
        } else {
            this.__APP__.use(middleware);
        }
        
        return this;
    }
}


module.exports = new Frame(__APP__);
