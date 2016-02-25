angular.module("ang-app", [])
  .controller("mainController", mainController);

function mainController($rootScope, $scope) {
  var self = this;

  this.formData = {};

  $http.get("/api/todos")
    .done(function(data){
      this.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log("Error " + data);
    })
}