# AWS Lambda Function - List Inventory Category

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  }
}
```

## Sample REST Request
### URL
GET /category
```
https://cq7lc4v7id.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:UserPoolIdVal
authorization:AuthorizationVal
```

## Sample Response
### Body
```
{
  "items": [
    {
      "category": "Chair",
      "categoryId": "Q2hhaXI="
    },
    {
      "category": "Tent",
      "categoryId": "VGVudA=="
    },
    {
      "category": "Table",
      "categoryId": "VGFibGU="
    }
  ]
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data       
400 | Bad Request | Error
500 | Internal Server Error |Error
