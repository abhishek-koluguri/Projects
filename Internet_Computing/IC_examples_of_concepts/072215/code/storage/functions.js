var save = function(person) {
  localStorage.person = JSON.stringify(person);
}

var load = function(tags) {
  var person = JSON.parse(localStorage.person);
	for(var i = 0; i < tags.length; i++) {
		tags[i].value = person[tags[i].id];
	}
}
