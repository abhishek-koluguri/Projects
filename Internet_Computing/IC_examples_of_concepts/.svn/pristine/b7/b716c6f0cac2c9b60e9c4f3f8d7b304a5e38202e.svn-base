angular.module('todoApp', [])
  .controller('TasksController', function($http) {
    var tasksController = this;
    
    tasksController.getTasks = function() {
      $http.get('tasks')
           .success(function(data) {
             tasksController.tasks = [];
             tasksController.tasks = data;
           });      
    }
         
    tasksController.addTask = function() {
      tasksController.updateMessage = '';
      $http.post('tasks/add', tasksController.task)
           .success(function(data) {
             tasksController.task = {};
             tasksController.updateMessage = data;
             tasksController.getTasks();
           });
    };
    
    tasksController.deleteTask = function(task) {
      $http.post('tasks/delete', task)
           .success(function(data) {
             tasksController.updateMessage = data;
             tasksController.getTasks();
           });
    };
    
    tasksController.tasks = [];
    tasksController.getTasks();
  });