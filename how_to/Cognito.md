# Cognito

## Configuration Required By Clients
* User Pool Id
* App Client Id
* Identity Pool Id

## Create a User Pool
* `Pool name` example 'Sebeca_C001'
* Step through settings
* Sign in with `Email address or phone number` -> `Allow email addresses`
* Required attributes
* * email
* * name
* * phone number
* `Only allow administrtors to create users`
* MFA off
* `No verification`
* Do not create a role for SMS
* Default the reset

## Create a App Client
* `App client name` example 'Sebeca_C001'
* Uncheck `Generate client secret`
* Default the rest

## Create an Identity Pool
* `Identity pool name` example 'Sebeca_C001'
* Do not check `Enable access to unauthenticated identities`
* Use Cognito for Authentication Provider with created User Pool and App Client
* * User Pool Id
* * App Client Id

