const Creator = require('my_db').Creator;
const shortId = require('shortid');
const tableParams = require('./data/inventorytable.json');

class InventoryCreator extends Creator {
  constructor() { 
    super(tableParams);
  }

  _createId(inputData) {
    inputData.data.itemId = shortId.generate();
  }

  _filterResult(result) {
    return {
      userPoolId: result.Item.userPoolId,
      itemId: result.Item.itemId
    };
  }
}

module.exports = InventoryCreator;
