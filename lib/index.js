var oa2 = require('oauth2-implicit')
var api_http = require('littlebits-cloud-http')



exports.api_http = api_http

exports.bootstrap = function(options, cb){
  oa2(options)(function(err, credentials){
    if (err) return cb(err)
    options.access_token = credentials.accessToken
    cb(null, api_http.defaults(options))
  })
}