# AWS Lambda Function - List Orders

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
GET /order/{customerId}
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
  "orders": [
    {
      "event": {
        "name": "LA Jazz Festival",
        "schedule": {
          "endDate": "none",
          "startDate": "none"
        },
        "location": {
          "zipCode": "90501",
          "state": "CA",
          "city": "Torrance",
          "street": "123 Main St"
        },
        "info": "2017 LA Jazz Festival at Hollywood Bowl",
        "contact": {
          "name": "John Doe",
          "email": "y@a.com",
          "phoneNumber": "1234567"
        }
      },
      "totalPrice": 690,
      "useLastJob": false,
      "orderId": 1539647202196,
      "totalQuantity": 200,
      "userPoolId": "UserPoolIdVal",
      "createdAt": 1539647202196,
      "items": [
        {
          "itemId": "uuid",
          "image": "chairs/itemId.jpg",
          "quantity": 200,
          "price": 3.45,
          "name": "Imperial",
          "category": "Chair",
          "desc": "brown top, folding legs"
        }
      ],
      "customerId": "eUBhLmNvbQ=="
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
