const Creator = require('my_db').Creator;
const tableParams = require('./data/ordertable.json');

class OrderCreator extends Creator {
  constructor() { 
    super(tableParams);
  }

  _createId(inputData) {
    inputData.data.createdAt = Date.now();
    inputData.data.orderId = inputData.data.createdAt;
  }

  _filterResult(result) {
    return {
      userPoolId: result.Item.userPoolId,
      orderId: result.Item.orderId
    };
  }
}

module.exports = OrderCreator;
