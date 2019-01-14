const AWS = require('./aws');
const Table = require('./table');
const KeyBuilder = require('./item').KeyBuilder;
const Client = require('./client');

class Remover {
  constructor(tableParams) {
    this.tableName = tableParams.TableName;
    this.tableParams = tableParams;
    this.table = new Table(AWS, this.tableParams);
    this.client = new Client(AWS);
  }

  run(requestData) {
    this.tableParams.TableName = `${requestData.headers['user-pool-id']}_${this.tableName}`;
    const table = new Table(AWS, this.tableParams);
    return table.exist()
      .then(() => this._remove(requestData));
  }

  _remove(requestData) {
    const builder = new KeyBuilder(this.tableParams.TableName);
    const key = this._createKey(requestData);
    builder.setKey(key);
    return this.client.delete(builder.getItem()).then(result => this._filterResult(result));
  }

  _createKey(requestData) {
    throw new Error('_createKey not implemented');
  }

  _filterResult(result) {
    return {};
  }
}

module.exports = Remover;