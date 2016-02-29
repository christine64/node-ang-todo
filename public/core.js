var toDo = angular.module("ang-app", []);

function mainController($scope, $http) {
  $scope.formData = {};
}

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
          $scope.formData {};
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

}
//   .controller("mainController", mainController);

// function mainController($rootScope, $scope) {
//   var self = this;

//   this.formData = {};

//   $http.get("/api/todos")
//     .done(function(data){
//       this.todos = data;
//       console.log(data);
//     })
//     .error(function(data) {
//       console.log("Error " + data);
//     })
// }