const AWS = require('my_db').AWS;
const KeyConditionBuilder = require('my_db').KeyConditionBuilder;
const Client = require('my_db').Client;

class InventoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const builder = new KeyConditionBuilder('Inventory');
    builder
      .setKeyConditionExpression('category = :c')
      .addExpressionValue(':c', requestData.path.category);
    return this.client.query(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = InventoryLister;
