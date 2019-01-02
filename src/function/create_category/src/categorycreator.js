const Creator = require('my_db').Creator;
const btoa = require('btoa');
const tableParams = require('./data/categorytable.json');

class CategoryCreator extends Creator {
  constructor() { 
    super(tableParams);
  }

  _createData(requestData) {
    requestData.body.categoryId = btoa(requestData.body.category);
    return requestData.body;
  }

  _filterResult(result) {
    return {
      category: result.Item.categoryId
    };
  }
}

module.exports = CategoryCreator;
