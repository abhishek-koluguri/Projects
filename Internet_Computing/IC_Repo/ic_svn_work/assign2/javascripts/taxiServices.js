var getLocation =function(element, fromLocation) {	

	var locationInfo = function(position) {
	
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		
		element.innerHTML = "latitude: " + latitude + "&nbsp longitude: " + longitude;
		fromLocation.value = latitude + ', ' + longitude;	
	}
	
	var locationError = function(error) {
		
		var errorMessage = ["", "Permission Denied", "Position Unavailable", "Time out"];
		
		alert(errorMessage[error.code]);
	}
	
	element.innerHTML = "Please wait while we are getting your current location: <progress id = 'progress' value = '80' max = '100' >80 %</progress>";
	
	navigator.geolocation.getCurrentPosition(locationInfo, locationError);
}

var registerDragDrop = function(dragSource, dropTarget, carInforForForm) {
	
	dragSource.ondragstart = function(event) {
		
		var dataToCopy = event.target.getAttribute("carValue");
		event.dataTransfer.setData("Text", dataToCopy);
		return true;
	};
	
	dropTarget.ondrop = function(event) {
		
		var data = event.dataTransfer.getData("Text");
		
		if(this.innerHTML.indexOf(data) < 0){
			
			this.innerHTML += data + ', ';	
		}
		
		carInforForForm.value = this.innerHTML.substring(5);
		event.preventDefault();
		return false;
	};
	
	dropTarget.ondragover = function(event) {
		
		event.preventDefault();
		return false;
	};
	
	dropTarget.ondragend = function(event) {
		
		event.preventDefault();
		return false;
	};
	
}

var validateFormDetails = function(fromLocation, cardetails, validationMessage) {
	
	if(fromLocation === '') {
		validationMessage.innerHTML = 'Please click on My Location button';
		return false;
	}
	if(cardetails === ''){
		validationMessage.innerHTML = 'Please select atleast one car type';
		return false;
	}
	return true;
}