const fs = require('fs');
const DocHelper = require('../Doc/Doc.helper');
class Doc {

    destinationPath;
    currentCatalog;
    bufferFile;
    files;
    helper;

    constructor() {
        this.helper = DocHelper;
    }
    disc(catalogName) {
        this.destinationPath = '/Users/jakub/JS/mvcjs/storage/';
        console.log( this.helper.checkThatTheNameEndsSlash(this.destinationPath));
        this.currentCatalog = this.helper.checkThatTheNameEndsSlash(this.destinationPath) + this.helper.checkThatTheNameEndsSlash(catalogName);

        return this;
    }

    get(filename) {
        this.bufferFile = fs.readFileSync(this.currentCatalog + '/' + filename);

        return this;
    }

    as(type) {
        let convertedFile;

        switch(type) {
            case 'string':
                convertedFile = this.bufferFile.toString();
                break;
            case 'json':
                convertedFile = this.bufferFile.toJSON();
                break;
            default:
                convertedFile = this.bufferFile.toString();
        }

        return convertedFile;
    }

    save(data, fileName) {
            if (!this.helper.validateFilenameSafety(fileName)) {
                console.error('File not safe!');
                return false;
            }

            fs.writeFile(this.currentCatalog + fileName, data, (err) => {
                if (err) {
                    return err;
                } else {
                    return true;
                }
            });
    }

    list(fullPath = false) {
        fs.readdir(this.currentCatalog, (err, files) => {
            if (err) {
                return err;
            }
            this.files = files;
        });

        return this.files.map((file) => {
            if (fullPath) {
                return this.destinationPath + this.currentCatalog + file;
            } else {
                return file;
            }
        });
    }
}

module.exports = new Doc();