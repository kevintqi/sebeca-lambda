# AWS Lambda Function - List Inventory

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  }
  "pathParameters": {"category": "Chair"}
}
```

## Sample REST Request
### URL
GET /inventory/{category}
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
      "image": "chairs/itemId.jpg",
      "userPoolId": "UserPoolIdVal",
      "category": "Chair",
      "itemId": "Phe9mzdfO",
      "price": 3.45,
      "name": "Imperial",
      "desc": "brown top, folding legs"
    },
    {
      "quantity": 200,
      "image": "chairs/itemId.jpg",
      "userPoolId": "UserPoolIdVal",
      "category": "Chair",
      "itemId": "u_Nrxql0j",
      "price": 3.45,
      "name": "Imperial",
      "desc": "brown top, folding legs"
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