# API Gateway
* `API name` example 'Sebeca_C001'
* `Enable CORS` with resource 
* * Append 'user-pool-id' for `Access-Control-Allow-Headers`
* Use stageVariables for Lambda function
* * `Lambda Function` example 'SebecaListCategory:${stageVariables.lambdaAlias}'
* Create `Stages` for 'dev' and releases, such as 'v1-0-0'
* * Add 'lambdaAlias' for `Stage Variables` with 'Dev' or 'Prod'
* * The 'lambdaAlias' values are consistent with the aliases of the Lambda function