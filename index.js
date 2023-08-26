const Frame = require('./Core/frame.core.js');
const MainController = require('./App/Controllers/MainController.js');
const RouteController = require('./App/Controllers/RouteController.js');

Frame.get('/', [MainController, 'index']);

Frame.get('*', [RouteController, '404'])

Frame.run();