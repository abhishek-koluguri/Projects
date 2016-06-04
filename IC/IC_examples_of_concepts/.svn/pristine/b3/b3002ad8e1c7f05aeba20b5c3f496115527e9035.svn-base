var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var name = req.body.name;
  console.log(name);
  
  res.write("hello " + name);
  res.end();
});

module.exports = router;
