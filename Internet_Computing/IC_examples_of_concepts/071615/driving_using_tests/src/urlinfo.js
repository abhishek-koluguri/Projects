var readFile = function(fileName, receiveFileContent) {
  var fs = require('fs');
  fs.readFile(fileName, 'utf8', receiveFileContent);
}

var receiveFileContent = function(fileContent) {
  var urls = fileContent.split('\n');
  
  var isNotEmpty = function(url) {
    return url.length > 0;
  }
  urls.filter(isNotEmpty).forEach(exports.processURL);
}

exports.readFile = readFile;
exports.receiveFileContent = receiveFileContent;
