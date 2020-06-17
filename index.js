var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h2>Hello World !</h2>');
});
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
