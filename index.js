const Frame = require('./Core/frame.core.js');

const MainController = require('./App/Controllers/MainController.js');

class m1 {
    get() {
        return (res, req, next) => {
            console.log('from class');
            next();
        }
    }
}

Frame.get('/', [MainController, 'index']);

Frame.run();