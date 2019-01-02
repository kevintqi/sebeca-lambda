const Remover = require('my_db').Remover;
const tableParams = require('./data/inventorytable.json');

class CustomerRemover extends Remover {
  constructor() {
    super(tableParams);
  }

  _createKey(requestData) {
    this.tableParams.Key.categoryId = requestData.path.categoryId;
    this.tableParams.Key.itemId = requestData.body.itemId;
    return this.tableParams.Key;
  }
}

module.exports = CustomerRemover;