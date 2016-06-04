var tasksController = function($http, $filter, $document) {
  var controller = this;
  
  controller.tasks = [];
  
  var updateTasks = function(tasks) {
    controller.tasks = controller.sortTasks(tasks);
  }
  
  var getTasks = function() {
    $http.get('/tasks')
         .success(updateTasks);
  }
  
  var sortTasks = function(tasks) {
    var orderBy = $filter('orderBy');
    return orderBy(tasks, ['year', 'month', 'day', 'name']);
  }
  
  controller.sortTasks = sortTasks;
  controller.getTasks = getTasks;
  
  $document.ready(controller.getTasks);
}

angular.module('todoApp', [])
       .controller('TasksController', tasksController);