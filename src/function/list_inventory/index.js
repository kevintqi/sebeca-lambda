const GetterHandler = require('my_util').GetterHandler;
const InventoryLister = require('./src/inventorylister');

const inventoryLister = new InventoryLister();
const getterHandler = new GetterHandler(inventoryLister);

exports.handler = (event, context, callback) => getterHandler.run(event, context, callback);
