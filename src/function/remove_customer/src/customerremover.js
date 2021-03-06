const Remover = require('my_db').Remover;
const tableParams = require('./data/customertable.json');

class CustomerRemover extends Remover {
  constructor() {
    super(tableParams);
  }

  _createKey(requestData) {
    this.tableParams.Key.userPoolId = requestData.headers['user-pool-id'];
    this.tableParams.Key.email = requestData.body.email;
    return this.tableParams.Key;
  }
}

module.exports = CustomerRemover;