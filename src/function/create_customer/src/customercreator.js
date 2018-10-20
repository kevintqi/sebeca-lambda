const Creator = require('my_db').Creator;
const btoa = require('btoa');
const tableParams = require('./data/customertable.json');

class CustomerCreator extends Creator {
  constructor() {
    super(tableParams);
  }

  _createId(inputData) {
    inputData.data.customerId = btoa(inputData.data.email);
  }

  _filterResult(result) {
    return {
      userPoolId: result.Item.userPoolId,
      customerId: result.Item.customerId
    };
  }
}

module.exports = CustomerCreator;
