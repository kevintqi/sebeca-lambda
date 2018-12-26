const AWS = require('my_db').AWS;
const Table = require('my_db').Table;
const Item = require('my_db').Item;
const Client = require('my_db').Client;

class Creator {
    constructor(tableParams) {
        this.tableParams = tableParams;
        this.table = new Table(AWS, this.tableParams);
        this.client = new Client(AWS);
    }

    run(inputData) {
        return this.table.exist()
            .then(() => this._create(inputData))
            .catch(() => this.table.create()
                .then( () => this._create(inputData)));
    }

    _create(inputData) {
        const item = new Item(this.tableParams.TableName);
        inputData.data.userPoolId = inputData.headers['user-pool-id'];
        this._createId(inputData);
        item.addData(inputData.data);
        return this.client.put(item).then(result => this._filterResult(result));
    }

    _createId(inputData) {
        throw new Error('_createId not implemented');
    }

    _filterResult(result) {
        throw new Error('_filterResult not implemented');
    }
}

module.exports = Creator;
