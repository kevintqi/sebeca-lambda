const AWS = require('my_db').AWS;
const KeyConditionBuilder = require('my_db').KeyConditionBuilder;
const Client = require('my_db').Client;

class OrderLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const builder = new KeyConditionBuilder('Order');
    builder
      .setKeyConditionExpression('customerId = :c')
      .addExpressionValue(':c', requestData.path.customerId);
    return this.client.query(builder.getItem()).then(data => {
      return { orders: data.Items };
    });
  }
}

module.exports = OrderLister;
