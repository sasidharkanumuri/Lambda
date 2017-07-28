var http = require('http');

exports.handler = function (event, context) {
  http.get('http://www.reactboilerplate.com', function (result) {
    console.log('Success, with: ' + result.statusCode);
    context.done(null);
  }).on('error', function (err) {
    console.log('Error, with: ' + err.message);
    context.done("Failed");
  });
};