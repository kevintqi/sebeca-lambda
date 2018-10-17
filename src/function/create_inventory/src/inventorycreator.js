const AWS = require("my_db").AWS;
const Table = require("my_db").Table;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const shortId = require('shortid');

const tableParams = require("./data/inventorytable.json");

class InventoryCreator {
  constructor() {   
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(inputData) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createInventory(inputData);
      });
    } else {
      return this._createInventory(inputData);
    }
  }

  _createInventory(inputData) {
    const item = new Item(tableParams.TableName);
    inputData.data.userPoolId = inputData.headers['user-pool-id'];
    inputData.data.itemId = shortId.generate();
    item.addData(inputData.data);
    return this.client.put(item).then(result => {
      return {
        userPoolId: result.Item.userPoolId,
        itemId: result.Item.itemId
      };
    });
  }
}

module.exports = InventoryCreator;
