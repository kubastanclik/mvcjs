const fs = require('fs');
class Doc {

    destinationPath;
    currentCatalog;
    files;

    constructor() {

    }
    disc(catalogName) {
        this.destinationPath = '/Users/jakub/JS/mvcjs/storage/';
        this.currentCatalog = this.destinationPath + catalogName;
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