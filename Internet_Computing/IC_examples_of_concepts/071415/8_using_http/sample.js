var http = require('http');

var processResponse = function(response) {
  var data = '';
  var count = 0;
  var getChunk = function(responseData) {
    data += responseData;
    count = count + 1;
  }
  
  var displayData = function() {
    console.log("Got data in " + count + " chunks");
    console.log("*********");
    console.log("*********");
    console.log("*********");
    console.log("*********");
    console.log(data);
  }
  
  response.on('data', getChunk);
  response.on('end', displayData);
}

http.get('http://www.google.com', processResponse);