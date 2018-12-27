const RemoverHandler = require('my_util').RemoverHandler;
const OrderRemover = require('./src/orderremover');

const inputDataModel = require('./src/data/orderremover.json');
const remover = new OrderRemover();
const removerHandler = new RemoverHandler(remover, inputDataModel);

exports.handler = (event, context, callback) => removerHandler.run(event, context, callback);