class Supplement {
    
    tableName;
    rawQuery;
    columns = [];
    __ID__ = [`id INT NOT NULL AUTO_INCREMENT`, `PRIMARY KEY(id)`];
    __ENGINE__ = 'engine=innoDB';
    __CREATED_AT__ = 'created_at';
    __UPDATED_AT__ = 'updated_at';
    __DELETED_AT__ = 'deleted_at';
    __SEP__ = ',';

    constructor() {
        
    }

    create() {
        this.rawQuery = `CREATE TABLE ${this.tableName} (${this.__ID__[0]}, ${this.columns.join(this.__SEP__)}, ${this.__ID__[1]}) ${this.__ENGINE__}`;

        return this;
    }

    update() {
        this.rawQuery = `ALTER TABLE ${this.tableName}`;

        return this;
    }

    table(tableName) {
        this.tableName = tableName;

        return this;
    }

    addTimestamps() {
        this.columns.push(`${this.__UPDATED_AT__} DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        this.columns.push(`${this.__CREATED_AT__} DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        this.columns.push(`${this.__DELETED_AT__} DATETIME`);

        return this;
    }

    addColumn(name, type, options) {
        let nullable = !options['null'] ? 'NOT NULL' : '';
        let defaultValue = options['default'] ? `DEFAULT options['default']` : '';

        if (type.toLowerCase() === 'enum') {
            type = `enum(${options['values'].join(',')})`;
        }

        this.columns.push(`${name} ${type} ${nullable} ${defaultValue}`);

        return this;
    }

    dump(preety = false) {
        this.__SEP__ = preety ? ',\n' : this.__SEP__;
        
        this.create();

        return this.rawQuery;

    }

}

module.exports = Supplement;