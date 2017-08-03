var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/' + 'index.html');
});

var server = app.listen(8081, function() {
  console.log('server listening at localhost:%s', server.address().port);
});

