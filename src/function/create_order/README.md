# AWS Lambda Function - Create Order

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"customerId\":\"eUBjLmNvbQ==\",\"event\":{\"name\":\"LA Jazz Festival\",\"info\":\"2017 LA Jazz Festival at Hollywood Bowl\",\"location\":{ \"street\":\"123 Main St\",\"city\":\"Torrance\",\"zipCode\":\"90501\", \"state\":\"CA\"},\"schedule\":{  \"startDate\":\"none\", \"endDate\": \"none\"}}, \"items\":[{\"category\": \"Chair\",\"itemId\": \"eWRhpRV\",\"quantity\": 200,\"image\": \"chairs\/eWRhpRV.jpg\",\"price\":3.15, \"name\":\"Imperial\", \"desc\": \"brown top, folding legs\"}]}"
}
```

## Sample REST Request
### URL
POST /order
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
  "customerId":"eUBhLmNvbQ==",
  "event": {  
    "name":"LA Jazz Festival",
    "info":"2017 LA Jazz Festival at Hollywood Bowl",
    "contact" : {  
      "name":"John Doe",
      "phoneNumber":"1234567",
      "email":"y@a.com"  
    },
    "location":{  
      "street":"123 Main St",
      "city":"Torrance",
      "zipCode":"90501",
      "state":"CA"
    },
    "schedule":{  
      "startDate":"none",
      "endDate": "none"
    }
  },
  "items": [
    {
      "category": "Chair",
      "name": "Imperial",
      "itemId": "uuid",
      "quantity": 200,
      "price": 3.45,
      "image":"chairs/itemId.jpg",
      "desc": "brown top, folding legs"
    }
  ],
  "totalPrice": 690.00,
  "totalQuantity": 200,
  "useLastJob": false
}
```

## Sample Response
### Body
```
{
  "userPoolId": "UserPoolIdVal",
  "orderId": 1539646993405
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
