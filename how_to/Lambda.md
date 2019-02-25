# Lambda Functions
* `Name` example 'SebecaCreateCategory'
* `Execution role` uses one the following
* * sebeca-lambda-database-management
* * sebeca-lambda-user-pool-management
* * sebeca-lambda-s3-management
* `Publish new version` as '1' or any number
* `Create alias` for
* * 'Dev' as `Version:$LATEST`
* * 'Prod' as `Version:1`
* The aliases should be consistent with the ones used in API Gateway