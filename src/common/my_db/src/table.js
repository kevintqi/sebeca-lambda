class Table {
  constructor(AWS, params) {
    this.db = new AWS.DynamoDB();
    this.params = params;
  }

  exist() {
    return this.describe();
  }

  describe() {
    return new Promise((resolve, reject) => {
      this.db.describeTable(
        { TableName: this.params.TableName },
        (err, data) => {
          if (err) {
            return reject(err);
          }
          return resolve(data);
        }
      );
    });
  }

  create() {
    return this.describe().catch(err => {
      if (err.code === 'ResourceNotFoundException') {
        return new Promise((resolve, reject) => {
          this.db.createTable(this.params, (err, data) => {
            if (err) {
              return reject(err);
            }
            return resolve(data);
          });
        });
      }
      throw err;
    });
  }
}

module.exports = Table;
