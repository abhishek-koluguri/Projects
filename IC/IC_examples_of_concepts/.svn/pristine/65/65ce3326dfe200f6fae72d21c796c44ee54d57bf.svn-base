var http = require('http');

var getInfoForURLs = function(fileName, reportURLInfo) {
  var receiveContent = function(error, data) {
    var urls = data.split('\n');

    totalURLs = urls.length;
    urls.forEach(processUrl);
  }

  var processUrl = function(url) {
    var processResponse = function(response) {
      var data = '';
      var getChunk = function(responseData) {
        data += responseData;
      }
      var sendContent = function() {
        if(response.statusCode === 200)
          processContent(url, data);
        else
          processError(url, response.statusCode);

        processIfLastResponse();
      }

      response.on('data', getChunk);
      response.on('end', sendContent);
    }

    http.get(url, processResponse);
  }

  var totalURLs = 0;
  var urlInfo = [];
  var urlErrors = [];

  var processContent = function(url, content) {
    urlInfo.push({url: url, length: content.length});
  }

  var processError = function(url, statusCode) {
    urlErrors.push({url: url, code: statusCode});
  }

  var processIfLastResponse = function() {
    if(urlInfo.length + urlErrors.length === totalURLs) {
      reportURLInfo(urlInfo, urlErrors);
    }
  }

  var readFile = function(fileName, callback) {
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', callback);
  }

  readFile(fileName, receiveContent);
}

var displayURLInfo = function(urlInfo, urlErrors) {
  console.log("Info for URLs");

  var displayAURLInfo = function(info) {
    console.log(info.url + "  " + info.length);
  }
  urlInfo.forEach(displayAURLInfo);
  
  console.log("Error code for URLs");
  var displayErrorForURL = function(info) {
    console.log(info.url + "  " + info.code);
  }
  urlErrors.forEach(displayErrorForURL);
}

getInfoForURLs("urls.txt", displayURLInfo);