const fs = require('fs');
class Doc {

    destinationPath;
    currentCatalog;
    bufferFile;
    files;

    constructor() {

    }
    disc(catalogName) {
        this.destinationPath = '/Users/jakub/JS/mvcjs/storage/';
        this.currentCatalog = this.destinationPath + catalogName;

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

    list(fullPath = false) {
        fs.readdir(this.currentCatalog, (err, files) => {
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