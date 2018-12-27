const RemoverHandler = require('my_util').RemoverHandler;
const ItemRemover = require('./src/itemremover');

const inputDataModel = require('./src/data/itemremover.json');
const remover = new ItemRemover();
const removerHandler = new RemoverHandler(remover, inputDataModel);

exports.handler = (event, context, callback) => removerHandler.run(event, context, callback);