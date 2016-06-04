angular.module('battleshipPlayers', [])
    .controller('ViewPlayersController', function($http, $timeout, $location) {
        var viewPlayersController = this;
        viewPlayersController.currentUserName = '';
        viewPlayersController.currentUser = {};
        viewPlayersController.players = [];
        viewPlayersController.allPlayers = [];
        viewPlayersController.invitedBy = {};
        viewPlayersController.invitedFlag = false;

        var removeCurrentUser = function(){
            for (var i = 0; i < viewPlayersController.players.length; i++) {
                if (viewPlayersController.players[i].username === viewPlayersController.currentUserName) {
					viewPlayersController.allPlayers.push(viewPlayersController.players[i]);
                    viewPlayersController.currentUser = viewPlayersController.players[i];
                    viewPlayersController.players.splice(i, 1);
                    break;
                }
            }
        };

        viewPlayersController.getPlayers = function() {
            $http.get('/players')
                .success(function(data) {
                    viewPlayersController.currentUserName = location.search.substring(1).split("=")[1];
                    viewPlayersController.players = data.all;
                    removeCurrentUser();
                });
        };


        viewPlayersController.invitePlayer = function(player) {
            $http.post('/players/invite', {current:viewPlayersController.currentUser, invitedUser: player});
        };

        var acceptFlag = function(player) {
        	for (var i = 0; i < viewPlayersController.allPlayers.length; i++) {
				if(typeof viewPlayersController.allPlayers[i].invitedBy !='undefined' && player.username === viewPlayersController.allPlayers[i].invitedBy.username){
					return true;
				}
			}
			return false;
        }
		
		var redirectAcceptedUser = function(player) {
			var url = 'playgame.html?user=' + viewPlayersController.currentUser.username + '&vsUser=' + player.username;
			indicateToOtherUserAboutInvite(player);
			location.href = url;
		}
		
		var indicateToOtherUserAboutInvite = function(player) {
			$http.post("/players/acceptedInvite", {current:viewPlayersController.currentUser, invitedUser: player})
		}
		
		var redirectInviteIsAccepted = function() {
				if(typeof viewPlayersController.currentUser.acceptedInvite !='undefined' && viewPlayersController.currentUser.acceptedInvite){
					var url = 'playgame.html?user=' + viewPlayersController.currentUser.username + '&vsUser=' + viewPlayersController.currentUser.acceptedUser.username;
					location.href = url;
				}
		}

        viewPlayersController.getPlayers();
		viewPlayersController.acceptFlag = acceptFlag;
		viewPlayersController.redirectAcceptedUser = redirectAcceptedUser;
        var poll = function() {
            $timeout(function() {
                viewPlayersController.getPlayers();
				redirectInviteIsAccepted();
                poll();
            }, 1000);
        }
        poll();
});
