const CreatorHandler = require('my_util').CreatorHandler;
const UrlCreator = require('./src/urlcreator');

const inputDataModel = require('./src/data/urlcreator.json');
const creator = new UrlCreator();
const creatorHandler = new CreatorHandler(creator, inputDataModel);

exports.handler = (event, context, callback) => creatorHandler.run(event, context, callback);