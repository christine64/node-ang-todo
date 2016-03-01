angular.module("ang-app", ["$scope", "$http"])
  .controller("mainController", mainController);

function mainController($scope, $http, Todos) {
  $scope.formData = {};

  //show todos
  $http.get("/api/todos")
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log("Error " + data);
    });


    //when submitting 
    $scope.createTodo = function() {
      $http.post("/api/todos", $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log("Error " + data);
        });
    };

    //delete
    $scope.deleteTodo = function(id) {
      $http.delete("/api/todos" + id) 
        .success(function(data) {
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log("Error " + data);
        });

    };
};