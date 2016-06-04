angular.module('battleshipApp', [])
  .controller('GameController', function($http) {
    var gameController = this;

    var playersAreDifferent = function(newPlayer) {
        var exists = false;
        for(var i = 0; i < players.length; i++)
        {
            if(players[i].equals(newPlayer)){

                exists = true;
            }
        }
        return exists;
    }

    gameController.getPlayers = function() {
      $http.get('players')
           .success(function(data) {
             gameController.players = [];
             gameController.players = data;
           });      
    }
         
    gameController.addPlayer = function() {

      gameController.updateMessage = '';

        $http.post('players/add', gameController.player)
           .success(function(data) {
             gameController.player = {};
             gameController.updateMessage = data;
             gameController.getPlayers();
           });
    };

    gameController.players = [];
    gameController.getPlayers();
  });