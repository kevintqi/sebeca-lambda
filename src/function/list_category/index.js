const GetterHandler = require('my_util').GetterHandler;
const CategoryLister = require('./src/categorylister');

const categoryLister = new CategoryLister();
const getterHandler = new GetterHandler(categoryLister);

exports.handler = (event, context, callback) => getterHandler.run(event, context, callback);
