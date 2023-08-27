const Frame = require('./Core/frame.core.js');
const MainController = require('./App/Controllers/MainController.js');
const RouteController = require('./App/Controllers/RouteController.js');

const Middlewares = [
    //your middleware goes here...
];

const Dependencies = [
    //your dependencies goes here...
];

Frame.middlewares(Middlewares);

Frame.inject(Dependencies);

Frame.get('/', [MainController, 'index']);

Frame.get('/test', [MainController, 'handleResposne']);

Frame.group('/a', [
    ['get', '/contact', [MainController, 'contact']],
    ['post', '/post', [MainController, 'handlePost']]
])

Frame.get('*', [RouteController, '404'])

Frame.run();