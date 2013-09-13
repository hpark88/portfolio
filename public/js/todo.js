function todo_controller($scope){

  $scope.todos = [{text: "Learn Angular", done:false}, {text:"Build an angular app", done:false}];

  $scope.getTotalTodos = function(){
   return $scope.todos.length;
  };

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function(){
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    });
  };
}
















