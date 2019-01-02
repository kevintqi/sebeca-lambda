# AWS Lambda Function - Remove Inventory Item

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "pathParameters": {
    "categoryId": "Q2hhaXI="
  },
  "body": "{\"itemId\":\"Phe9mzdfO\"}"
}
```

## Sample REST Request
### URL
DELETE /inventory/{categoryId}
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
  "itemId":"Phe9mzdfO"
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
