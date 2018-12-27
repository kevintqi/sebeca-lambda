const AWS = require('my_db').AWS;
const Item = require('my_db').Item;
const Client = require('my_db').Client;

class OrderLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const item = new Item('Order');
    item
      .addKeyConditionExpression('customerId = :c')
      .withExpressionValues({':c': requestData.path.customerId});
    return this.client.query(item).then(data => {
      return { orders: data.Items };
    });
  }
}

module.exports = OrderLister;
