var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    processOrder(req, res);
    res.end();
});

var processOrder = function(req, res){

    console.log("Work Order submitted with following details: \n");
    console.log("\nWorker Description: " + req.body.work_description);
    console.log("\nWorker Name: " + req.body.workerName);
    console.log("\nSeverity: " + req.body.Severity);
    console.log("\nSent from Location: " + req.body.fromLocation);
    console.log("\nDate: " + req.body.date);
}
module.exports = router;