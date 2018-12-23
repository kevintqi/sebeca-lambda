const RemoverHandler = require('my_util').RemoverHandler;
const CustomerRemover = require('./src/customerremover');

const inputDataModel = require('./src/data/customerremover.json');
const remover = new CustomerRemover();
const removerHandler = new RemoverHandler(remover, inputDataModel);

exports.handler = (event, context, callback) => removerHandler.run(event, context, callback);