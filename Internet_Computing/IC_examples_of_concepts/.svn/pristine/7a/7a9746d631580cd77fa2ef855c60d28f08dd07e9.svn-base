var express = require('express');
var router = express.Router();

var convertStringToTask = function(taskString) {
  return {
    name: taskString.name,
    month: parseInt(taskString.month),
    day: parseInt(taskString.day),
    year: parseInt(taskString.year)
  };
}

var tasksAreDifferent = function(task1, task2) {
  return task1.name !== task2.name || task1.month !== task2.month ||
         task1.day !== task2.day || task1.year !== task2.year;
}

var tasks = [
  {name: "practice TDD", month: 4, day: 10, year: 2015},
  {name: "rock the world", month: 4, day: 21, year: 2015},
  {name: "create sustainable code", month: 4, day: 21, year: 2015},
];

router.get('/', function(req, res, next) {
  res.send(tasks);
});

router.post('/add', function(req, res, next) {
  tasks.push(convertStringToTask(req.body));
  res.send("task created");
});

router.post("/delete", function(req, res, next) {
  var taskToDelete = convertStringToTask(req.body);
  
  tasks = tasks.filter(function(task) { return tasksAreDifferent(task, taskToDelete); });
  res.send("task deleted");  
});

module.exports = router;

