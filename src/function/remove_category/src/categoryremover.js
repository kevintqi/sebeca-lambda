const Remover = require('my_db').Remover;
const tableParams = require('./data/categorytable.json');

class CustomerRemover extends Remover {
  constructor() {
    super(tableParams);
  }

  _createKey(requestData) {
    this.tableParams.Key.categoryId = requestData.body.categoryId;
    return this.tableParams.Key;
  }
}

module.exports = CustomerRemover;