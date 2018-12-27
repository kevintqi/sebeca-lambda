const ModelValidator = require('./modelvalidator');
const headerSchema = require('./data/eventheader.json');

class EventValidator {
  run(requestData, schema) {
    return new ModelValidator(headerSchema).run(requestData.headers)
      .then(() => {
        if (schema) {
          return new ModelValidator(schema).run(requestData.body);
        }
        return requestData;
      }).then(() => requestData);
  }
}

module.exports = EventValidator;