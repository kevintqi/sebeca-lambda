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

  run(requestData) {
    return this.table.exist()
      .then(() => this._remove(requestData));
  }

  _remove(requestData) {
    const item = new Item(this.tableParams.TableName);
    const key = this._createKey(requestData);
    item.addKey(key);
    return this.client.delete(item).then(result => this._filterResult(result));
  }

  _createKey(requestData) {
    throw new Error('_createKey not implemented');
  }

  _filterResult(result) {
    return {};
  }
}

module.exports = Remover;