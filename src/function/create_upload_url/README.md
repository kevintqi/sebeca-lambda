# AWS Lambda Function - Create Upload URL

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"fileName\":\"fileNameVal.png\",\"contentType\":\"image/png\"}"
}
```

## Sample REST Request
### URL
POST /dev/assets
```
 https://cq7lc4v7id.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:us-west-2_uvLRuYLaz
authorization:AuthorizationVal
```
### Body
```
{  
  "fileName":"fileNameVal.png",
  "contentType":"image/png"
}
```

## Sample Response
### Body
```
{
  "dataUrl":"https://s3.us-west-2.amazonaws.com/c001.assets.sebeca.com/image/png/fileNameVal.png",
  "uploadUrl": "https://s3.us-west-2.amazonaws.com/c001.assets.sebeca.com/image/png/fileNameVal.png?AWSAccessKeyId=ASIA2&Content-Type=image%2Fpng&Expires=1543690119&Signature=m4rAj2qiLiTxtq%2Bifw&x-amz-security-token=FQoGZ"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
