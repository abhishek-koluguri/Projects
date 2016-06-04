var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 8080;

var sendIndexHTML = function(response) {
  var fileContent = fs.readFileSync('./index.html');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(fileContent);  
}

var handler = function(request, response) {
  if(request.url === '/')
    sendIndexHTML(response);
  else {
    var cities = 'Boulder, Colorado Springs, Denver';
    if(request.url === '/TX.txt')
      cities = 'Austin, Dallas, Houton';
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(cities);
  }
}

var server = http.createServer(handler).listen(port);
