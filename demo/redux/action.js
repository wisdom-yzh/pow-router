(function (scope) {
  
  var TYPES = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    TRIGGER_TODO: 'TRIGGER_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
  };

  function addTodo(title, content) {
    return {
      type: TYPES.ADD_TODO,
      title: title,
      content: content
    }
  }

  function editTodo(id, params) {
    return {
      type: TYPES.EDIT_TODO,
      title: params.title,
      content: params.content
    }
  }

  function triggerTodo(id) {
    return {
      type: TYPES.TRIGGER_TODO,
      id: id
    }
  }

  function removeTodo(id) {
    return {
      type: TYPES.REMOVE_TODO,
      id: id
    }
  }

  scope.Action = {
    TYPES: TYPES,
    addTodo: addTodo,
    triggerTodo: triggerTodo,
    removeTodo: removeTodo,
    editTodo: editTodo
  };

})(window);
