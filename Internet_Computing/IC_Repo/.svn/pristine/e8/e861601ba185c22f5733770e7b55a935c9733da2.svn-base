var getLocation =function(element, fromLocation) {

    var locationInfo = function(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;

        element.innerHTML = "latitude: " + latitude + "&nbsp longitude: " + longitude + "&nbsp altitude: " + altitude;
        fromLocation.value = latitude + ', ' + longitude + ', ' + altitude;
    }

    var locationError = function(error) {
        var errorMessage = ["", "Permission Denied", "Position Unavailable", "Time out"];

        element.innerHTML = "Couldn't get your location due to " + errorMessage[error.code] + " error";
        fromLocation.value = "unavailable";
    }

    element.innerHTML = "Please wait while we are getting your current location: <progress id = 'progress' value = '80' max = '100' >80 %</progress>";

    navigator.geolocation.getCurrentPosition(locationInfo, locationError);
}

var checkConnected = function(connectedCallback, notConnectedCallback) {
    $.get("/?q=" + Math.random(), function(data){
        connectedCallback(data);
    }).fail(function() {
        notConnectedCallback();
    });
}

var connected = function() {

    for(var i=0; i <= localStorage.ordercount ; i++){
        var data = localStorage['order' + i];
        $.ajax({
            url: '/processOrder',
            data: data,
            dataType:'json',
            type:'POST',
            asyn:false
        });
    }
    document.getElementById('message').innerHTML = "Work order sent to server.";
    localStorage.clear();
}

var notConnected = function() {
    document.getElementById('meessage').innerHTML = "Work order stored locally.";
}

var storeInLocalStorage = function(order) {
    var ordercount = parseInt(localStorage.ordercount) + 1 || 0;
    localStorage['order' + ordercount] = order;
    localStorage.ordercount = ordercount;
}

var clearForm = function() {
    $('#reset').click();
    document.getElementById('locationInfo').innerHTML = "";
    document.getElementById('message').innerHTML = "";
    document.getElementById('wordCount').innerHTML = "";
}

var workOrder = function(event) {
    storeInLocalStorage($('#work_order').serialize());
    checkConnected(connected, notConnected);
    event.preventDefault();
    setTimeout(function () { clearForm(); }, 3000);
}

var checkNoOfWords = function(obj){

    var maxWords = 300;

    var words = obj.value.split(/[\s]+/);
    var remainingWords = maxWords - words.length;

    document.getElementById("wordCount").innerHTML = remainingWords;

    if(words.length > maxWords){

        document.getElementById("wordCount").innerHTML = "Only 300 words";
        return false;
    }
    return true;
}