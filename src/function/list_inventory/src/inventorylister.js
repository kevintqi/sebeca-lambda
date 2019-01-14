const AWS = require('my_db').AWS;
const KeyConditionBuilder = require('my_db').KeyConditionBuilder;
const FilterBuilder = require('my_db').FilterBuilder;
const Client = require('my_db').Client;

class InventoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const tableName = `${requestData.headers['user-pool-id']}_Inventory`;
    if (requestData.path.categoryId) {
      return this._getFor(tableName, requestData.path.categoryId);
    } 
    return this._getAll(tableName);
  }

  _getFor(tableName, categoryId) {
    const builder = new KeyConditionBuilder(tableName);
    builder
      .setKeyConditionExpression('categoryId = :c')
      .addExpressionValue(':c', categoryId);
    return this.client.query(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }

  _getAll(tableName) {
    const builder = new FilterBuilder(tableName);
    return this.client.scan(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = InventoryLister;
