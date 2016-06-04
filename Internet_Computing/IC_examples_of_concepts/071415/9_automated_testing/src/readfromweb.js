var http = require('http');

var readFrom = function(url, callback) {
  var processResponse = function(response) {
    var data = '';
    
    var getChunk = function(responseData) {
      data += responseData;
    }
    var sendData = function() {
      callback(response.statusCode, data);
    }
    
    response.on('data', getChunk);
    response.on('end', sendData);
  }
  
  http.get(url, processResponse);
}

exports.readFrom = readFrom;