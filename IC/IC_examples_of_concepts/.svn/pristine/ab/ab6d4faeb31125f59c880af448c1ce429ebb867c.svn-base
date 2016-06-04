var urlinfo = require('../src/urlinfo');

var sampleFileData = 'http://www.google.com\nhttp://www.cs.uh.edu\n';

exports.testCanary = function(test) {
  test.ok(true);
  test.done();
}

exports.testReadFile = function(test) {
  var checkFileContent = function(error, data) {
    test.equals(data, sampleFileData);
    test.done();
  }
  urlinfo.readFile('urls.txt', checkFileContent);
}

exports.testReadInvalidFile = function(test) {
  var checkFileContent = function(error, data) {
    test.ok(error);
    test.ok(data === undefined);
    test.done();
  }
  
  urlinfo.readFile('notfound.txt', checkFileContent);
}

exports.testReceiveFileContentInvokesProcessURL = function(test) {
  var urlsGiven = [];
  urlinfo.processURL = function(url) {
    urlsGiven.push(url);
  }
  
  var expectedURLs = ['http://www.google.com', 'http://www.cs.uh.edu'];
  
  urlinfo.receiveFileContent(sampleFileData);
  
  test.deepEqual(urlsGiven, expectedURLs);
  test.done();
}



