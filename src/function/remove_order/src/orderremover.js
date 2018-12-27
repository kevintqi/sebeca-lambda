const Remover = require('my_db').Remover;
const tableParams = require('./data/ordertable.json');

class OrderRemover extends Remover {
  constructor() {
    super(tableParams);
  }

  _createKey(requestData) {
    this.tableParams.Key.customerId = requestData.path.customerId;
    this.tableParams.Key.orderId = requestData.body.orderId;
    return this.tableParams.Key;
  }
}

module.exports = OrderRemover;