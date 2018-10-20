const CreatorHandler = require('my_util').CreatorHandler;
const Creator = require('./src/inventorycreator');

const inputDataModel = require('./src/data/inventorycreation.json');
const creator = new Creator();
const creatorHandler = new CreatorHandler(creator, inputDataModel);

exports.handler = (event, context, callback) => creatorHandler.run(event, context, callback);
