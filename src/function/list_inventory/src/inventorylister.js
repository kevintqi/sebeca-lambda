const AWS = require('my_db').AWS;
const Item = require('my_db').Item;
const Client = require('my_db').Client;

class InventoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(inputData, eventHandler) {
    const item = new Item('Inventory');
    item
      .addKeyConditionExpression('category = :c')
      .withExpressionValues({':c': eventHandler.path.category });
    return this.client.query(item).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = InventoryLister;
