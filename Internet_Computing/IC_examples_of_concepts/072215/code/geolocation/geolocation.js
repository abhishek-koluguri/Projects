var getGeoLocation = function(elementToUpdate,
  stopButton) {
  var locationInfo = function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    var details = '';
    for(var prop in position.coords) {
      details += 
        "<p>" + prop + " : " + position.coords[prop]  + "</p>";
    }
    elementToUpdate.innerHTML = details;
  }
  
  var locationInfoError = function(error) {
    var errorMessage = ['',
     'Permission denied',
     'Position unavailable',
     'timeout'];
     
    alert("error receiving location info: " +
      errorMessage[error.code]);
  }
  
  var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 30000
  };
  
  var watchId = navigator.geolocation.watchPosition(
    locationInfo, locationInfoError, options);
    
  stopButton.onclick = function() {
    navigator.geolocation.clearWatch(watchId);
    stopButton.disabled = true;
  }
}