const AWS = require('my_db').AWS;
const KeyConditionBuilder = require('my_db').KeyConditionBuilder;
const FilterBuilder = require('my_db').FilterBuilder;
const Client = require('my_db').Client;

class InventoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    if (requestData.path.categoryId) {
      return this._getFor(requestData.path.categoryId);
    } 
    return this._getAll();
  }

  _getFor(categoryId) {
    const builder = new KeyConditionBuilder('Inventory');
    builder
      .setKeyConditionExpression('categoryId = :c')
      .addExpressionValue(':c', categoryId);
    return this.client.query(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }

  _getAll() {
    const builder = new FilterBuilder('Inventory');
    return this.client.scan(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = InventoryLister;
