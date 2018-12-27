# AWS Lambda Function - Remove Order

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "pathParameters": {
    "customerId": "eUBhLmNvbQ=="
  },
  "body": "{\"orderId\":1539647202196}"
}
```

## Sample REST Request
### URL
DELETE /order/{customerId}
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
  "orderId":1539647202196
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
