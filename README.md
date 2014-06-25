# cloud-client-api
Bootstrap the littleBits Cloud APIs into a client app

## Installation

    component install littlebits/cloud-api

## API

##### .bootstrap()

    bootstrap :: Options, (err, api_http ->) ->

##### `Options`
A configuration object that is passed through to:

- `oauth2-implicit` options, refer to https://github.com/jasonkuhrt/oauth2-implicit#options--
- `cloud-client-api-http` defaults, refer to https://github.com/littlebits/cloud-client-api-http#set

##### `Callback :: err, api_http ->`
A callback that is executed once `oauth2-implicit` has completed. Helpfully, it wires up the `api_http` with the received `credentials`.

- `err`  
Any error from `oauth2-implicit` (https://github.com/jasonkuhrt/oauth2-implicit#callback--err-credentials---void), or `null`.
- `api_http`  
An "instance" of `cloud-client-api-http` that has had the received credentials applied to its `.defaults()`. Its ready to go, request away!


======
#### .api_http()

Is `cloud-client-api-http`. For docs refer to https://github.com/littlebits/cloud-client-api-http.

Normally you will acquire `api_http` from `.bootstrap` since automatic authorization setup is very convenient. There is no known pattern/use-case for accessing `api_http` directly, but it is there for whe you discover that reason.
