const AWS = require('my_db').AWS;
const FilterBuilder = require('my_db').FilterBuilder;
const Client = require('my_db').Client;

class CategoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const tableName = `${requestData.headers['user-pool-id']}_Category`;
    const builder = new FilterBuilder(tableName);
    return this.client.scan(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = CategoryLister;
