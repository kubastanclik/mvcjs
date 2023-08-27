/* App core */
const __EXPRESS__ = require('express');
const __APP__ = new __EXPRESS__();

/* Config */
const __APP_NAME__ = 'My Frame App';
const __ENVIROMENT__ = 'dev' // 'prod' | 'dev'
const __PORT__ = 3009;
const __VIEWS__ = './Views';
const __LOGDIR__ = 'Logs';

/* Supplement config */

const __SUPPLEMENT__ = {
    primary_key: ['id', 'int', 'AUTO_INCREMENT'],
    engine: 'innoDB'
}

module.exports = {
    __EXPRESS__,
    __APP__, 
    __PORT__,
    __APP_NAME__,
    __ENVIROMENT__,
    __SUPPLEMENT__,
    __VIEWS__,
    __LOGDIR__
}