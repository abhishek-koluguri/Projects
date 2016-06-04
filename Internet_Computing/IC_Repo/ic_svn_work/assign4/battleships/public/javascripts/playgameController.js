angular.module('playgame', [])
    .controller('PlayGameController', function($http, $timeout, $location, $document) {
        var controller = this;
		controller.username = '';
		controller.opponent = '';
        controller.placedships = [];
		controller.oponentships = [];
		controller.hits = 0;
		controller.miss = 0;
		controller.gamestarted = false;
		controller.myturn = false;
		controller.gameover = false;
		controller.existingships = {};
		
		var updatePlayerAndOponent = function() {
			var both = location.search.substring(1).split("&");
			controller.username = both[0].split("=")[1];
			controller.opponent = both[1].split("=")[1];
		}
		
		var placeorhit = function(row, column) {
			var cell = row + "_" + column;
			if(!controller.gamestarted){
				if(controller.existingships[cell] != 'putship'){
					if(controller.placedships.length < 5){
						controller.placedships.push(cell);
						controller.existingships[cell] = 'putship';
						return 'putship';
					}else if(controller.placedships.indexOf(cell) >= 0){
						controller.existingships[cell] = 'putship';
						return 'putship';
					}
				}else{
					return controller.existingships[cell];
				}
				
			}else if(controller.gamestarted && controller.myturn){
				if(controller.existingships[cell] != 'hitship' && controller.existingships[cell] != 'missship'){
					if(controller.oponentships.indexOf(cell) >=0 ){
						controller.hits += 1;
						if(controller.hits === 5){
							controller.gameover = true;
							updateTurn(true);
							document.getElementById("gameover").innerHTML = "You Won";
							document.getElementById("turn").innerHTML = "";	
						}
						controller.myturn = false;
						controller.changeTurn();
						controller.existingships[cell] = 'hitship';
						return 'hitship';
					}else if(controller.oponentships.indexOf(cell) < 0){
						controller.miss += 1;
						controller.changeTurn();
						controller.myturn = false;
						controller.existingships[cell] = 'missship';
						return 'missship';
					}
				}else{
					return controller.existingships[cell];
				}
			}else{
				return controller.existingships[cell];
			}
		}
		
		var detailsToSend = function() {
			return {
				user:{username:controller.username, ships:controller.placedships}, 
				opponent:{username:controller.opponent},
				turn:false,
				gameover:controller.gameover
			};
		}
		
		var updateOpponent = function(data) {
			if(typeof data != 'undefined' && typeof data.player != 'undefined' && data.player.ships != 'undefined' && data.player.ships.length === 5){
				controller.oponentships = data.player.ships;
				controller.gamestarted = true;
				controller.myturn = data.turn;
				updateTurnMessage();
			}
		}
		
		var getOpponentDetails = function() {
			if(!controller.gamestarted && controller.placedships.length === 5) {
				$http.post('/game/postdetails', detailsToSend()).success(updateOpponent);
			}
		}
		
		var updateTurnMessage = function() {
			if(controller.myturn){
				document.getElementById("turn").innerHTML = "Your turn, hit a cell..";	
			}else{
				document.getElementById("turn").innerHTML = "Opponents turn, wait..";
			}
			
		}
		
		var updateFurnFn = function(data){
			if(!controller.gameover){
				controller.myturn = data.turn;
				controller.gameover = data.gameover;
				if(data.gameover){
					document.getElementById("turn").innerHTML = "";	
					document.getElementById("gameover").innerHTML = "You Lost";
					controller.myturn = false;
				}else{
					updateTurnMessage();						
				}
			}
		}
		
		var updateTurn = function(gameover1) {
			if(!controller.myturn && controller.gamestarted && !controller.gameover){
				$http.post('game/updateturn', detailsToSend()).success(updateFurnFn);
			}else if(gameover1){
				$http.post('game/updateturn', detailsToSend()).success(updateFurnFn);
			}
			
		}
		
		var changeTurn = function(){
			var details = {
				user:{username:controller.username, ships:controller.placedships}, 
				opponent:{username:controller.opponent},
				turn:controller.myturn,
				gameover:controller.gameover
			};
			
			$http.post('game/changeturn', details);
		}
		
		controller.changeTurn = changeTurn;
		controller.getOpponentDetails = getOpponentDetails;
		controller.placeorhit = placeorhit;
		updatePlayerAndOponent();
        var poll = function() {
            $timeout(function() {
				controller.getOpponentDetails();
				updateTurn();
                poll();
            }, 50);
        }
        poll();
});
