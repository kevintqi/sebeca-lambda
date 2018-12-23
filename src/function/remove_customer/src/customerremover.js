const Remover = require('my_db').Remover;
const tableParams = require('./data/customertable.json');

class CustomerRemover extends Remover {
  constructor() {
    super(tableParams);
  }

  _createId(inputData) {
    this.tableParams.Key.email = inputData.data.email;
  }
}

module.exports = CustomerRemover;