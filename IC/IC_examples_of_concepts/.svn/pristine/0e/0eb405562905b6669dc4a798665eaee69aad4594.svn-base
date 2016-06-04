var http = require('http');
var url = require('url');
var querystring = require('querystring');

var port = 8080;

var handler = function(request, response) {
  var params = querystring.parse(url.parse(request.url).query);
  var name = params.name;
  if(typeof(name) === 'undefined')
    name = 'there, type ?name=Bob on address line';
  
  var writeStuff = function(status, message) {
    response.writeHead(status, {'Content-Type': 'text/plain'});
    response.end(message);
  }

  writeStuff(200, "Hello " + name);
}

var server = http.createServer(handler).listen(port);
console.log("starting server...");