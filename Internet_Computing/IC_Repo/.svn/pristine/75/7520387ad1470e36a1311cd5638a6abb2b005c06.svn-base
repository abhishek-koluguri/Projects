var weatherapp = require('../src/weatherapp');

var sampleWOEIDs = '12590119\r\n2459115\r\n2379574';

exports.testCanary = function(test) {
  test.ok(true);
  test.done();
}

exports.testReadFile = function(test) {
	var checkFileContent = function(data){
		test.equals(sampleWOEIDs, data);
		test.done();
	}
	
	var checkError = function(err) { }
  weatherapp.readFile('../assign1/ListOfCityIdsForTest.txt', checkError, checkFileContent);
}

exports.testReadInvalidFile = function(test) {
	var checkError = function(error){
		test.done();
	}
	var checkFileContent = function() { }
  weatherapp.readFile('invalidFile.txt', checkError, checkFileContent);
}

exports.testGetContentFromWebForValidWoeid = function(test) {
	var processContent = function(data){
		test.ok(data.length > 0);
		test.done();
	}
	weatherapp.getContentFromWeb('12590119', processContent);
}

exports.testProcessWebContentForInValidData = function(test) {
	test.deepEqual(weatherapp.processWebContent(''), []);
	test.done();
}

exports.testProcessWebContentForValidData = function(test) {
	test.deepEqual(weatherapp.processWebContent("<rss><channel><yweather:location city=\"Houston\" region=\"TX\" country=\"United States\"/><item><yweather:condition text=\"Fair\" code=\"33\" temp=\"84\"/></item></channel></rss>"), ['Houston','TX', 84]);
	test.done();
}

exports.testSortResultsEmptyArray = function(test){
	test.deepEqual(weatherapp.sortResults([]) ,[]);
	test.done();
}

exports.testSortResultsWithInvalidWoeid = function(test){
	test.deepEqual(weatherapp.sortResults([[],['San Jose', 'CA', '100'], ['Austin', 'TX', '100']]) ,[['Austin', 'TX', '100'], ['San Jose', 'CA', '100'], []]);
	test.done();
}

exports.testSortResultsWithSameCities = function(test){
	test.deepEqual(weatherapp.sortResults([['Houston', 'TX', '100'], ['Houston', 'TX', '100']]) ,[['Houston', 'TX', '100'], ['Houston', 'TX', '100']]);
	test.done();
}

exports.testSortResultsIfFirstElementisGreat = function(test){
	test.deepEqual(weatherapp.sortResults([['San Jose', 'CA', '100'], ['Austin', 'TX', '100']]) ,[['Austin', 'TX', '100'], ['San Jose', 'CA', '100']]);
	test.done();
}

exports.testSortResultsIfSecondElementisGreat = function(test){
	test.deepEqual(weatherapp.sortResults([['Chicago', 'IL', '100'], ['Houston', 'TX', '100']]) ,[['Chicago', 'IL', '100'], ['Houston', 'TX', '100']]);
	test.done();
}

exports.testSortResultsWithSameCityNamesDifferentStatesIfFirstElementisGreat = function(test){
	test.deepEqual(weatherapp.sortResults([['Arlington', 'VA', '100'], ['Arlington', 'TX', '100']]) ,[['Arlington', 'TX', '100'], ['Arlington', 'VA', '100']]);
	test.done();
}

exports.testSortResultsWithSameCityNamesDifferentStatesIfSecondElementisGreat = function(test){
	test.deepEqual(weatherapp.sortResults([['Arlington', 'TX', '100'], ['Arlington', 'VA', '100']]) ,[['Arlington', 'TX', '100'], ['Arlington', 'VA', '100']]);
	test.done();
}

exports.testGetWeatherDetailsForInvalidFile = function(test) {
	var processError = function(err) {
		test.done();
	}
	
	var processWeatherData = function(results) {}
	weatherapp.getWeatherDetails('filenotfound.txt', processError, processWeatherData);
}

exports.testGetWeatherDetailsForValidFile = function(test) {
	var processError = function(err) { }
	
	var processWeatherData = function(results) {
		test.ok(results[0][0]==='Chicago' && results[0][1] === 'IL' && results[0][2] <= 200);
		test.ok(results[1][0]==='Houston' && results[1][1] === 'TX' && results[1][2] <= 200);
		test.ok(results[2][0]==='New York' && results[2][1] === 'NY' && results[2][2] <= 200);
		test.done();
	}
	
	weatherapp.getWeatherDetails('../assign1/ListOfCityIdsForTest.txt', processError, processWeatherData);
}