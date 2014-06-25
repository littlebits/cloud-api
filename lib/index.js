var oa2 = require('oauth2-implicit')
var api_http = require('littlebits-cloud-http')



exports.bootstrap = bootstrap
exports.api_http = api_http



function bootstrap(options, cb){
  oa2(options)(function(err, credentials){
    if (err) return cb(err)
    options.access_token = credentials.accessToken
    cb(null, api_http.defaults(options))
  })
}