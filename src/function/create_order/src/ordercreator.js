const Creator = require('my_db').Creator;
const tableParams = require('./data/ordertable.json');

class OrderCreator extends Creator {
  constructor() { 
    super(tableParams);
  }

  _createData(requestData) {
    requestData.body.createdAt = Date.now();
    requestData.body.orderId = requestData.body.createdAt;
    return requestData.body;
  }

  _filterResult(result) {
    return {
      customerId: result.Item.customerId,
      orderId: result.Item.orderId
    };
  }
}

module.exports = OrderCreator;
