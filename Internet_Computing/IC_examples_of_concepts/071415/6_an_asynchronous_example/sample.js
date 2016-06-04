var add = function(a, b) {
  return a + b;
}

var displayResult = function(data) {
  console.log(data);
}

displayResult(add(1, 2));
//a blocking call

//clearly if it is really really fast,
//don't make it non-blocking, so this is
//a silly example.
var addNonBlocking = function(a, b, callback) {
  var sendResult = function() {
    callback(a + b);
  }
  setTimeout(sendResult, 5000);
}

addNonBlocking(1, 2, displayResult);