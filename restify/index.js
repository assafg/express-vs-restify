var restify = require('restify');


var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: false }));

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

server.get('/', function (req, res, next) {
  var response = {
    a:100,
    b:200,
    c:300,
    d:400,
    e:500
  };
  res.send(response);
  next();
});

server.post('/', function (req, res, next) {
  var body = req.body;
  body.forEach(function(el){
    el.tags = el.tags.map(function (tag) {
      tag.capitalize();
    });
  });
  res.send(body);
  next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
