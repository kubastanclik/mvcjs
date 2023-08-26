const Frame = require('./Core/frame.core.js');
const MainController = require('./App/Controllers/MainController.js');
const RouteController = require('./App/Controllers/RouteController.js');
const LogMiddleware = require('./App/Middlewares/LogMiddleware.js');

const Middlewares = [
    LogMiddleware
    //your middlewares goes here...
];

Frame.middlewares(Middlewares);

Frame.get('/', [MainController, 'index']);

Frame.group('/a', [
    ['get', '/contact/:id/', [MainController, 'contact']],
    ['post', '/post', [MainController, 'handlePost']]
])

Frame.get('*', [RouteController, '404'])

Frame.run();