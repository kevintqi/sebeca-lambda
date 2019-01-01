const AWS = require('./aws');
const Table = require('./table');
const DataBuilder = require('./item').DataBuilder;
const Client = require('./client');

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
    const builder = new DataBuilder(this.tableParams.TableName);
    const data = this._createData(requestData);
    builder.setData(data);
    return this.client.put(builder.getItem()).then(result => this._filterResult(result));
  }

  _createData(requestData) {
    throw new Error('_createData not implemented');
  }

  _filterResult(result) {
    throw new Error('_filterResult not implemented');
  }
}

module.exports = Creator;
