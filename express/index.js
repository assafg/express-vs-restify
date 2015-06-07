var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
app.get('/', function (req, res) {
  var response = {
    a:100,
    b:200,
    c:300,
    d:400,
    e:500
  };
  res.send(response);
});

app.post('/', jsonParser, function(req, res){
  var body = req.body;
  body.forEach(function(el){
    el.tags = el.tags.map(function (tag) {
      tag.capitalize();
    });
  });
  res.send(body);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
