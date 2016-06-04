var net = require('net');

var server = net.createServer();
var clients = [];

var sendMessageToAllOtherClients = function(sendingClient, data) {
  var isNotSameClient = function(aClient) {
    return aClient !== sendingClient;
  }
  
  var sendTheMessage = function(aClient) {
    aClient.write(data);
  }
  
  clients.filter(isNotSameClient)
         .forEach(sendTheMessage);
}

var receivedConnection = function(client) {
  clients.push(client);
  
  var sendMessage = function(data) {
    sendMessageToAllOtherClients(client, data);
  }
  var removeClient = function() {
    clients.splice(clients.indexOf(client), 1);
  }
  
  client.on('data', sendMessage);
  client.on('end', removeClient);
}

server.on('connection', receivedConnection);
console.log('server started...');
server.listen(8080);