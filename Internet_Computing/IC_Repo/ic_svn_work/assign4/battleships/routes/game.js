var express = require('express');
var router = express.Router();

var gamedetails = {};

router.post('/postdetails', function(req, res, next) {
	var player = req.body.user;
	var opponent = req.body.opponent;
	
	var keyp = player.username+"_"+opponent.username;
	var keyo = opponent.username+"_"+player.username;
	
	if(typeof gamedetails[keyp] != 'undefined' && typeof gamedetails[keyo] === 'undefined'){
	gamedetails[keyp].turn = true;
	}else if(typeof gamedetails[keyp] === 'undefined' && typeof gamedetails[keyo] != 'undefined'){
	gamedetails[keyp] = {player:player, opponent:opponent, turn:true};
	}else if(typeof gamedetails[keyp] != 'undefined' && typeof gamedetails[keyo] != 'undefined'){
		gamedetails[keyp].turn = true;
		gamedetails[keyo].turn = false;
	}else{
		gamedetails[keyp] = {player:player, opponent:opponent, turn:true};
	}
	
	res.send(gamedetails[opponent.username+"_"+player.username]);

});

router.post('/changeturn', function(req, res, next) {
	var player = req.body.user;
	var opponent = req.body.opponent;
	
	var keyp = player.username+"_"+opponent.username;
	var keyo = opponent.username+"_"+player.username;
	
	gamedetails[keyp].turn = true;
	gamedetails[keyo].turn = false;
	
	res.send(gamedetails[keyo]);

});

router.post('/updateturn', function(req, res, next) {
	var player = req.body.user;
	var opponent = req.body.opponent;
	
	var keyp = player.username+"_"+opponent.username;
	var keyo = opponent.username+"_"+player.username;
	
	if(req.body.gameover){
		gamedetails[keyp].gameover = true;
		gamedetails[keyo].gameover = true;
	}
	
	res.send(gamedetails[keyo]);

});

module.exports = router;
