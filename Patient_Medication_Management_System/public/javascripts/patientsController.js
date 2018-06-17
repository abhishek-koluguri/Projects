angular.module('pmmsApp', [])
  .controller('PatientsController', ['$scope', '$http', function($scope, $http) {
    var patientsController = this;

    patientsController.getPatients = function() {
      $http.get('/patients')
           .success(function(data) {
             $scope.patients = data.patients;
           });      
    }

    patientsController.getPatientMedications = function(id) {
      var url = "/patients/medications/" + id;
      $scope.selectedPatientId = id;
      $http.get(url)
           .success(function(data) {
             $scope.medications = data.medications;
           });      
    }

    patientsController.getPatientStats = function(id) {
      var url = "/patients/stats/" + id;
      $http.get(url)
           .success(function(data) {
             $scope.temp = data.temp;
             $scope.pulse = data.pulse;
           });      
    }

    patientsController.updatePatientStats = function(id, temp, pulse) {
      var url = "/patients/stats/" + id + "/" + temp + "/" + pulse;
      console.log(id + " " + temp + " " + pulse);
      $http.patch(url)
           .success(function(data) {
             patientsController.patients = data.patients;
           });      
    }

    patientsController.getPatients();
  }]);