# AWS Lambda Function - Create Inventory Category

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"category\":\"Chair\"}"
}
```

## Sample REST Request
### URL
POST /category
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
    "category": "Chair"
}
```

## Sample Response
### Body
```
{
  "categoryId": "Q2hhaXI="
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error