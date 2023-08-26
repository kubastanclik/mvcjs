class Log {
    fs;
    path;
    moment;
    fileName;
    basePath;

    constructor() {

        this.path = require("path");
        this.fs = require('fs');
        this.moment = require('moment');
        this.fileName = this.moment().format('YYYY-MM-DD').toString() + '_access_log.txt';
        this.basePath = this.path.resolve(__dirname, `../../Logs/${this.fileName}`);

    }

    addToAccessLog(Request, Response) {

        let content = '';

        if (!this.fs.existsSync(this.basePath)) {
            this.fs.writeFile(this.basePath, '', (error, data) => {
                // do something...
            });
        }

        this.fs.readFile(this.basePath, 'utf-8', (error, data) => {
            if (!data) {
                content = [];
            } else {
                content = data.split('\n');
            }
            
            content.push(`[${this.moment().format('YYYY-MM-DD HH:mm:ss')}][${Request?.headers['x-forwarded-for'] || Request?.socket.remoteAddress}] - ${Request?.protocol + '://' + Request?.get('host') + Request?.originalUrl}`)

            this.fs.writeFile(this.basePath, content.join('\n'), (error, data) => {
                // do something...
            });
        })
    }
}

module.exports = new Log();