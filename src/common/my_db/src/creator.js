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

  run(requestData) {
    return this.table.exist()
      .then(() => this._create(requestData))
      .catch(() => this.table.create()
        .then( () => this._create(requestData)));
  }

  _create(requestData) {
    const item = new Item(this.tableParams.TableName);
    const data = this._createData(requestData);
    item.addData(data);
    return this.client.put(item).then(result => this._filterResult(result));
  }

  _createData(requestData) {
    throw new Error('_createData not implemented');
  }

  _filterResult(result) {
    throw new Error('_filterResult not implemented');
  }
}

module.exports = Creator;
