var fs = require('fs');

var displayFileContent = function(error, data) {
  if(error) {
    console.log("oops, sorry");
    console.log(error);
  } else {
    console.log("Read the file!");
    console.log(data);    
  }
}

fs.readFile('/etc/hosts', 'utf8', displayFileContent);
fs.readFile('/etc/hots', 'utf8', displayFileContent);