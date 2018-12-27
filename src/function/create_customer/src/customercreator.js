const Creator = require('my_db').Creator;
const btoa = require('btoa');
const tableParams = require('./data/customertable.json');

class CustomerCreator extends Creator {
  constructor() {
    super(tableParams);
  }

  _createData(requestData) {
    requestData.body.userPoolId = requestData.headers['user-pool-id'];
    requestData.body.customerId = btoa(requestData.body.email);
    return requestData.body;
  }

  _filterResult(result) {
    return {
      userPoolId: result.Item.userPoolId,
      customerId: result.Item.customerId
    };
  }
}

module.exports = CustomerCreator;
