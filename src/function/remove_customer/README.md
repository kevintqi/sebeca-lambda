# AWS Lambda Function - Remove Customer

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"email\":\"y@x.com"}"
}
```

## Sample REST Request
### URL
DELETE /customer
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
  "email":"y@c.com"
}
```

## Sample Response
### Body
```
{}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
