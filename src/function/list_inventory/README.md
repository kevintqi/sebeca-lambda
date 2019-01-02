# AWS Lambda Function - List Inventory

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  }
  "pathParameters": {"categoryId": "Q2hhaXI="}
}
```

## Sample REST Request
### URL
GET /inventory/{categoryId}
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
      "quantity": 200,
      "image": "chairs/eWRhpRV.jpg",
      "categoryId": "Q2hhaXI=",
      "itemId": "PMZ0y5LtI",
      "price": 3.15,
      "name": "Imperial",
      "desc": "red, folding legs"
    },
    {
      "quantity": 200,
      "image": "chairs/eWRhpRV.jpg",
      "categoryId": "Q2hhaXI=",
      "itemId": "dSvwXOoJV",
      "price": 3.15,
      "name": "Imperial",
      "desc": "red, folding legs"
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