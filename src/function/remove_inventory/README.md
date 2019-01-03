# AWS Lambda Function - Remove Inventory Item

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"categoryId\":\"Q2hhaXI=\",\"itemId\":\"Phe9mzdfO\"}"
}
```

## Sample REST Request
### URL
DELETE /inventory
```
 https://cq7lc4v7id.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:UserPoolIdVal
authorization:AuthorizationVal
```
### Body
```
{  
  "categoryId":"Q2hhaXI=",
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