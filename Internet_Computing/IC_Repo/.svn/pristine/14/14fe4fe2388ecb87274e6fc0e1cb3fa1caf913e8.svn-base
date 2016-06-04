var express = require('express');
var router = express.Router();

var players = [];

router.get('/', function(req, res, next) {
  res.send({all:players});
});

router.post('/add', function(req, res, next) {

   players.push({username:req.body.username});
   res.send("player added");

});

router.post("/invite", function(req, res, next) {
    var playerInvited = req.body.invitedUser;
    var currentPlayer = req.body.current;
    for(var i=0; i<players.length; i++){
        if(players[i].username  === playerInvited.username){
            players[i].invitedBy = currentPlayer;
        }
    }
});

router.post("/acceptedInvite", function(req, res, next) {
    var playerInvited = req.body.invitedUser;
    var currentPlayer = req.body.current;
    for(var i=0; i<players.length; i++){
        if(players[i].username  === playerInvited.username){
            players[i].acceptedInvite = true;
			players[i].acceptedUser = currentPlayer;
        }
    }
});


module.exports = router;
