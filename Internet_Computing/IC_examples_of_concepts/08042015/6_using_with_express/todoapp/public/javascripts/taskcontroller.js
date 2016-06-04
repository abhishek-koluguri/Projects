angular.module('tasksApp', [])
        .controller('TasksController', function($http) {
          var controller = this;

          var tasks;
          
          var getTasks = function() {
            return tasks;
          }
          
          var successFunction = function(data) {
            fetchTask();
            controller.updateMessage = data; 
          }
          
          var addATask = function() {
            $http.post('/tasks/add', controller.newTask)
                 .success(successFunction);
          }
          
          var deleteTask = function(task) {
            $http.post('/tasks/delete', task)
                 .success(successFunction);
          }
          
          var fetchTask = function() {
            $http.get('/tasks')
                 .success(function(data) {
                   tasks = data;
                 });
          }

          fetchTask();
          controller.updateMessage = '';
          controller.newTask = '';          
          controller.getTasks = getTasks;
          controller.addATask = addATask;
          controller.deleteTask = deleteTask;
        });