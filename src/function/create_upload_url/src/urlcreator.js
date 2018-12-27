const AWS = require('my_db').AWS;
const Url = require('url');

class UrlCreator {
  constructor() {
    this.params = {
      Bucket: process.env.ASSETS_BUCKET_NAME,
      Expires: 180
    };
    this.s3 = new AWS.S3();
  }

  run(requestData) {
    this.params.Key = `${requestData.body.contentType}/${requestData.body.fileName}`;
    this.params.ContentType = requestData.body.contentType;
    return new Promise((resolve, reject) => {
      this.s3.getSignedUrl('putObject', this.params, (err, uploadUrl) => {
        if (err) {
          console.log(err, err.stack);
          return reject(err);
        }
        resolve(this._buildOutput(uploadUrl));
      });
    });
  }

  _buildOutput(uploadUrl) {
    const urlObj = Url.parse(uploadUrl);
    urlObj.search = null;
    urlObj.query = null;
    return {
      'dataUrl': Url.format(urlObj),
      'uploadUrl': uploadUrl,
    };
  }
}

module.exports = UrlCreator;