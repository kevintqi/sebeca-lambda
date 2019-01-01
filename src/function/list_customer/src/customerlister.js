const AWS = require('my_db').AWS;
const KeyConditionBuilder = require('my_db').KeyConditionBuilder;
const Client = require('my_db').Client;

class CustomerLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const builder = new KeyConditionBuilder('Customer');
    builder
      .setKeyConditionExpression('userPoolId = :u')
      .addExpressionValue(':u', requestData.headers['user-pool-id']);
    return this.client.query(builder.getItem()).then(data => {
      return { customers: data.Items };
    });
  }
}

module.exports = CustomerLister;
