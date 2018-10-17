# AWS Lambda Function - Create Inventory

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"category\":\"Chair\",\"name\":\"Imperial\",\"desc\":\"red, folding legs\",\"price\": 3.15, \"quantity\": 200,\"image\": \"chairs\/eWRhpRV.jpg\"}"
}
```

## Sample REST Request
### URL
POST /inventory
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
    "category": "Chair",
    "name": "Imperial",
    "quantity": 200,
    "price": 3.45,
    "image":"chairs/itemId.jpg",
    "desc": "brown top, folding legs"
}
```

## Sample Response
### Body
```
{
  "userPoolId": "UserPoolIdVal",
  "itemId": "u_Nrxql0j"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error