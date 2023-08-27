/**
 * Frame Core file.
 */

const { __APP__, __PORT__, __VIEWS__ } = require('../frame.config.js');

const twig = require('twig'); // call twig

const bodyParser = require('body-parser'); // call body-parser

const __DEPENDENCIES__ = require('../Core/Bootstrap/Dependencies.js'); // call predefinied dependencies

const __MIDDLEWARES__ = require('../Core/Bootstrap/Middlewares.js'); // call predefinied middlewares

__APP__.set('view engine', 'twig'); // set twig

__APP__.set('views', __VIEWS__); // set views directory

__APP__.get('/favicon.ico', (req, res) => res.status(204)); // handle favicon

__APP__.use( bodyParser.json() );       // to support JSON-encoded bodies

__APP__.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

class Frame {

    __APP__;
    DEPENDENCIES;
    MIDDLEWARES;

    constructor(app, dependencies, middleware) {
        this.__APP__ = app;
        this.DEPENDENCIES = dependencies;
        this.MIDDLEWARES = middleware;
        this.middlewares(this.MIDDLEWARES);
    }

    inject(dependencies) {
        this.DEPENDENCIES = {
            ...this.DEPENDENCIES,
            ...dependencies
        };
    }

    middlewares(middleware) {
    
        for(let key in middleware) {
            this.__APP__.use((req, res, next) => {
                middleware[key].handle(req, res);
                next();
            });
        }
        
        
        return this;
    }
    
    run(app) {
        __APP__.listen(__PORT__, () => {
            console.log(`Example app listening on port ${__PORT__}`);
        });
    }
    
    get(path, callback) {
        try {
            __APP__.get(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    post(path, callback) {
        try {
            __APP__.post(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    put(path, callback) {
        try {
            __APP__.put(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    put(path, callback) {
        try {
            __APP__.put(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    delete(path, callback) {
        try {
            __APP__.delete(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    any(path, callback) {
        try {
            __APP__.all(path, (req, res) => callback[0][callback[1]](req, res, this.DEPENDENCIES));
        } catch (e) {
            res.send(e);
        }

        return this;
    }

    group(path, callbacks) {
        callbacks.forEach(elem => {
            try {
                let callback = elem[2];
                this[elem[0]](path + elem[1], callback);
            } catch (e) {
                throw new Error(e);
            }
            
        })
    }
}


module.exports = new Frame(__APP__, __DEPENDENCIES__, __MIDDLEWARES__);
