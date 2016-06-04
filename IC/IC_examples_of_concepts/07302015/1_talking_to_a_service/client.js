var http = require('http');

var options = { 
  host: 'www.google.com', 
  port: 80, 
  path: '/'
};

var handleResponse = function(response) {
  var data = '';
  
  var processChunk = function(chunk) {
    data += chunk;
  }
  
  var displayResponse = function() {
    console.log(data);
  }
  
  response.on('data', processChunk);
  response.on('end', displayResponse);  
}

var processError = function(error) {
  console.log("ERROR: " + error);
}

var request = http.request(options, handleResponse);
request.on('error', processError);

request.end();