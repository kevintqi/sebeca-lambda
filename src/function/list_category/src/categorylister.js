const AWS = require('my_db').AWS;
const FilterBuilder = require('my_db').FilterBuilder;
const Client = require('my_db').Client;

class CategoryLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(requestData) {
    const builder = new FilterBuilder('Category');
    return this.client.scan(builder.getItem()).then(data => {
      return { items: data.Items };
    });
  }
}

module.exports = CategoryLister;
