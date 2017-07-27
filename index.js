var http = require('http');

exports.handler = function (event, context) {
  http.get('http://localhost:3000', function (result) {
    console.log('Success, with: ' + result.statusCode);
    context.done(null);
  }).on('error', function (err) {
    console.log('Error, with: ' + err.message);
    context.done("Failed");
  });
};