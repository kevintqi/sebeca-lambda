const AWS = require('my_db').AWS;
const Table = require('my_db').Table;
const Item = require('my_db').Item;
const Client = require('my_db').Client;

class Remover {
    constructor(tableParams) {
        this.tableParams = tableParams;
        this.table = new Table(AWS, this.tableParams);
        this.client = new Client(AWS);
    }

    run(inputData) {
        return this.table.exist()
            .then(() => this._remove(inputData));
    }

    _remove(inputData) {
        const item = new Item(this.tableParams.TableName);
        this.tableParams.Key.userPoolId = inputData.headers['user-pool-id'];
        this._createId(inputData);
        item.addKey(this.tableParams.Key);
        return this.client.delete(item).then(result => this._filterResult(result));
    }

    _createId(inputData) {
        throw new Error('_createId not implemented');
    }

    _filterResult(result) {
        return {};
    }
}

module.exports = Remover;