const EventHandler = require('my_util').EventHandler;
const Validator = require('my_util').EventValidator;

class UpdaterHandler {
  constructor(creator, inputDataModel) {
    this.creator = creator;
    this.inputDataModel = inputDataModel;
    this.validator = new Validator();
  }

  run(event, context, callback) {
    const eventHandler = new EventHandler(event, callback);
    this.validator
      .run(eventHandler.requestData, this.inputDataModel)
      .then(requestData => {
        return this.creator
          .run(requestData)
          .then(data => eventHandler.status(200).send(data))
          .catch(err => eventHandler.status(500).send(err));
      })
      .catch(err => eventHandler.status(400).send(err));
  }
}

module.exports = UpdaterHandler;
