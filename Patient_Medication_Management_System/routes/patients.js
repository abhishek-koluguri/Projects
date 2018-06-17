var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://localhost:27017/pmms';
const dbName = 'pmms';
const collectionName = 'patients';

//TODO: Error handling for all api calls
// 2. Authentication mechanism overview
// 3. Tests for all api calls
// 4. TenantID
// 5. see if toArray is needed

// MongoClient.connect(connectionUrl, function(err, db) {
//   console.log("Connected successfully to server");

//   insertDocuments(db, function() {
//     db.close();
//   });
// });

// var insertDocuments = function(dbConnection, callback) {
//   var db = dbConnection.db('pmms');
//   var collection = db.collection('patientMedInfo');
//   collection.insertMany([{_id : "test", medicatons : [
// {medname:'morphine',dose:'10mg',startDate:'10/10/15'},
// {medname:'acetaminophen',dose:'325mg',startDate:'10/11/15',stopDate:'10/14/15'},
// {medname:'furosemide',dose:'20mg',startDate:'10/31/15'}], temperature : "90", pulse : "70"}, 
//     {_id : "test1", medicatons : [
// {medname:'morphine',dose:'10mg',startDate:'10/10/15'},
// {medname:'acetaminophen',dose:'325mg',startDate:'10/11/15',stopDate:'10/14/15'},
// {medname:'furosemide',dose:'20mg',startDate:'10/31/15'}], temperature : "90", pulse : "70"}, 
//     {_id : "test2", medicatons : [
// {medname:'morphine',dose:'10mg',startDate:'10/10/15'},
// {medname:'acetaminophen',dose:'325mg',startDate:'10/11/15',stopDate:'10/14/15'},
// {medname:'furosemide',dose:'20mg',startDate:'10/31/15'}], temperature : "90", pulse : "70"}  ], function(err, result) {
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

var getListOfPatients = function(dbConnection, callback) {
    var db = dbConnection.db('pmms');
  var collection = db.collection('patients');
  collection.find({}).toArray(function(err, docs) {
    callback(docs);
  });
}

var getMedInfoOfPatient = function(dbConnection, id, callback) {
    var db = dbConnection.db('pmms');
    var collection = db.collection('patientMedInfo');
    collection.find({ _id: id }).toArray(function(err, docs) {
        callback(docs);
    });
}

// var getMedInfoOfPatient = function(dbConnection, id, callback) {
//     var db = dbConnection.db('pmms');
//     var collection = db.collection('patientMedInfo');
//     collection.find({ _id: id }).toArray(function(err, docs) {
//         callback(docs);
//     });
// }

var getMedicationsOfPatient = function(dbConnection, id, callback) {
    var db = dbConnection.db('pmms');
    var collection = db.collection('patientMedInfo');
    collection.find({ _id: id }).toArray(function(err, docs) {
        callback(docs);
    });
} 

var getStatsOfPatient = function(dbConnection, id, callback) {
    var db = dbConnection.db('pmms');
    var collection = db.collection('patientMedInfo');
    collection.find({ _id: id }).toArray(function(err, docs) {
        callback(docs);
    });
}

var updateStatsOfPatient = function(dbConnection, id, temp, pulse, callback) {
    var db = dbConnection.db('pmms');
    var collection = db.collection('patientMedInfo');
    collection.update({ _id: id }, { $set: { "temperature" : temp, "pulse" : pulse } }, function(err, docs){
        callback(docs);
    });
}

router.get('/', function(req, res, next) {

  MongoClient.connect(connectionUrl, function(err, db) {
    getListOfPatients(db, function(result) {
      db.close();
      res.send({patients:result});
    });
  });  
});

router.get('/add', function(req, res, next) {

  res.send("added");  
});

router.get('/patientMedInfo/:id', function(req, res, next) {

    var id = req.params.id;
    MongoClient.connect(connectionUrl, function(err, db) {
        getMedInfoOfPatient(db, id, function(result) {
            db.close();
            res.send({result});
        });  
    }); 
});

router.get('/medications/:id', function(req, res, next) {

    var id = req.params.id;
    MongoClient.connect(connectionUrl, function(err, db) {
        getMedicationsOfPatient(db, id, function(result) {
            db.close();
            var medications = result[0].medicatons;
            res.send({medications});
        });  
    }); 
});

router.get('/stats/:id', function(req, res, next) {

    var id = req.params.id;
    MongoClient.connect(connectionUrl, function(err, db) {
        getStatsOfPatient(db, id, function(result) {
            db.close();
            var temp = result[0].temperature;
            var pulse = result[0].pulse;
            res.send({temp:temp, pulse:pulse});
        });  
    }); 
});

router.patch('/stats/:id/:temp/:pul', function(req, res, next) {

    var id = req.params.id;
    var temp = req.params.temp;
    var pulse = req.params.pul;
    console.log(temp + " " + pulse);
    MongoClient.connect(connectionUrl, function(err, db) {
        updateStatsOfPatient(db, id, temp, pulse, function(result) {
            db.close();
            res.send({updated:true});
        });  
    }); 
});

module.exports = router;