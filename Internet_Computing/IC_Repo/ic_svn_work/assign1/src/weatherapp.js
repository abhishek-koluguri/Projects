var http = require('http');
var XmlDocument = require('xmldoc').XmlDocument;

exports.processWebContent = function(data){
	try{
		var xml = new XmlDocument(data);
		var channel = xml.childNamed('channel');
		var location = channel.childrenNamed('yweather:location');
		var temperature = 0;
		for(var index in channel.childrenNamed('item')[0].children){
			if(channel.childrenNamed('item')[0].children[index].name === 'yweather:condition'){
				temperature = channel.childrenNamed('item')[0].children[index].attr.temp;
			}
		}
		return [location[0].attr.city, location[0].attr.region, temperature];
	}catch(ex){
		return [];
	}
}

exports.sortResults = function(result) {
	return result.sort(function(a, b){
		if(a.length ===0 || b.length ===0){
			return 1;
		}
		var city1 = a[0].toLowerCase(), city2 = b[0].toLowerCase();
			if(city1 === city2){
				var state1 = a[1].toLowerCase(), state2 = b[1].toLowerCase();
				
				if (state1 < state2)
					return -1 
				if (state1 > state2)
					return 1
				return 0;
			}else{
				if (city1 < city2)
					return -1 
				else
					return 1
			}	
		});
}

exports.getContentFromWeb = function(woeid, callback) {
	var data = '';
    
	var processResponse = function(response) {
		var getChunk = function(responseData) {
			data += responseData;
		}
		var sendData = function() {
			callback(data.replace(/\n/g,''));
		}
    
		response.on('data', getChunk);
		response.on('end', sendData);
	}
  
	http.get('http://weather.yahooapis.com/forecastrss?w=' + woeid, processResponse);
}

exports.readFile = function(fileName, callbackErr, callbackData){
	var fs = require('fs');
	
	var getFileContent = function(error, data){
			if(error)
				callbackErr(error);
			else
				callbackData(data);	
	}
	
	fs.readFile(fileName, 'utf8', getFileContent);
}

exports.getWeatherDetails = function(filename, callBackProcessError, callBackProcessResult) {
	
	var processFileData = function(data) {
		var woeids = data.split('\r\n');
		var results = [];
		var processSingleWoeid = function(woeid) {
			var collectResultsFromWeb = function(data) {
				results.push(exports.processWebContent(data));
				if(results.length == woeids.length){
					callBackProcessResult(exports.sortResults(results));
				}
			}
			
			exports.getContentFromWeb(woeid, collectResultsFromWeb)
		}
		
		woeids.forEach(processSingleWoeid);
	}
	
	exports.readFile(filename, callBackProcessError, processFileData);
}