const Frame = require('./Core/frame.core.js');
const MainController = require('./App/Controllers/MainController.js');
const RouteController = require('./App/Controllers/RouteController.js');
const LogMiddleware = require('./App/Middlewares/LogMiddleware.js');
const moment = require('moment');

const Middlewares = [
    LogMiddleware
    //your middlewares goes here...
];

const Dependencies = {
    moment
};

Frame.middlewares(Middlewares);

Frame.inject(Dependencies);

Frame.get('/', [MainController, 'index']);

Frame.group('/a', [
    ['get', '/contact/:id/', [MainController, 'contact']],
    ['post', '/post', [MainController, 'handlePost']]
])

Frame.get('*', [RouteController, '404'])

Frame.run();