var weatherapp = require('../src/weatherapp');

var printingResult = function(result){
	if(result.length != 0){
		process.stdout.write(result[0]);
			for(var i = 0; i < ( 20 - result[0].length ); i++){ process.stdout.write(' '); }
				process.stdout.write( result[1] + '        ' + result[2] + '\n' );
	}
}

var processResult = function(result){
	console.log('\nCity,             ' + 'State,   ' + 'Temperature      \n');
	result.forEach(printingResult);
}

var processError = function(error){
	console.log("Problem opening the file you mentioned:" + error);
}

weatherapp.getWeatherDetails('../assign1/ListOfCityIds.txt', processError, processResult);
