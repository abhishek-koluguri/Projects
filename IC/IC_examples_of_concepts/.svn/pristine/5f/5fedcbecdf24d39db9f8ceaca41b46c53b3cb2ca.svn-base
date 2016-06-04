var readfromweb = require('../src/readfromweb');

exports.testCanary = function(test) {
  test.ok(true);
  test.done();
}

exports.testRequestValidURL = function(test) {
  var checkResponse = function(statusCode, data) {
    test.ok(200, statusCode);
    test.ok(data.indexOf('Feeling Lucky') >= 0);
    test.done();
  }
  
  readfromweb.readFrom('http://www.google.com', checkResponse);
}

exports.testRequestInvalidHost = function(test) {
  var checkResponse = function(statusCode, data) {
    test.ok(200, statusCode);
    test.ok(data.indexOf('Feeling Lucky') < 0);
    test.done();
  }
  
  readfromweb.readFrom('http://www.ggle.com', checkResponse);
}

exports.testRequestInvalidURL = function(test) {
  var checkResponse = function(statusCode, data) {
    test.ok(404, statusCode);
    test.ok(data.indexOf('Feeling Lucky') < 0);
    test.done();
  }
  
  readfromweb.readFrom('http://www.google.com/blah', checkResponse);
}



