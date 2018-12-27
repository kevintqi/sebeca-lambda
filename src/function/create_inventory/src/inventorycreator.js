const Creator = require('my_db').Creator;
const shortId = require('shortid');
const tableParams = require('./data/inventorytable.json');

class InventoryCreator extends Creator {
  constructor() { 
    super(tableParams);
  }

  _createData(requestData) {
    requestData.body.itemId = shortId.generate();
    return requestData.body;
  }

  _filterResult(result) {
    return {
      category: result.Item.category,
      itemId: result.Item.itemId
    };
  }
}

module.exports = InventoryCreator;
