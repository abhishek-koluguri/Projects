var invokeIfConnected = function(callback) {
	var xhr = new XMLHttpRequest();
	var handler = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200)
				callback();
		}
	}
	xhr.onreadystatechange = handler;
	xhr.open("GET", "/?q=" + Math.random());
	xhr.send();
}

var storeLocally = function(issue, stored) {
  var issueCount = parseInt(localStorage.issueCount) + 1 || 0;
  
  localStorage['issue' + issueCount] = issue;
  localStorage.issueCount = issueCount;
  
  stored.innerHTML = '';
  for(var i = 0; i < issueCount; i++) {
    stored.innerHTML += "<BR>" + localStorage['issue' + i];
  }
}

var sendToServer = function() {
  alert("sending " + localStorage.length + " data to server");
  localStorage.clear();
  stored.innerHTML = '';
}

var saveData = function(issue, stored) {
  storeLocally(issue, stored);
  invokeIfConnected(sendToServer);
}

