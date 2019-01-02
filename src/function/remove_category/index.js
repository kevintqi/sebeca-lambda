const RemoverHandler = require('my_util').RemoverHandler;
const CategoryRemover = require('./src/categoryremover');

const inputDataModel = require('./src/data/categoryremover.json');
const remover = new CategoryRemover();
const removerHandler = new RemoverHandler(remover, inputDataModel);

exports.handler = (event, context, callback) => removerHandler.run(event, context, callback);