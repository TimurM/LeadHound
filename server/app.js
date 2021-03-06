var express = require('express');
var app = express();


app.use(express.static('client'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});

require('./config/middleware.js')(app, express);
