(function (scope) {
  
  var TODO_STATUS = {
    TODO: 0,
    FINISHED: 1,
    REMOVED: 2
  };

  /**
   * reducer todo
   *
   * @param {Array} state
   * @param {Object} action
   * @return {Array} new state
   */
  function todo(state, action) {
    if (action.type === Action.TYPES.ADD_TODO) {
      return state.concat({
        id: state.length,
        title: action.title || 'empty title',
        content: action.content || 'empty content',
        status: TODO_STATUS.TODO,
        timestamp: new Date()
      });
    } else if (action.type === Action.TYPES.TRIGGER_TODO) {
      return state.map(function(item) {
        return item.id === action.id
          ? pow.utils.assign(item, { status: 1 - item.status })
          : item;
      });
    } else if (action.type === Action.TYPES.REMOVE_TODO) {
      return state.map(function(item) {
        return item.id === action.id 
          ? pow.utils.assign(item, { status: TODO_STATUS.REMOVED })
          : item;
      });
    } else if (action.type === Action.TYPES.EDIT_TODO) {
      return state.map(function(item) {
        return item.id === action.id 
          ? pow.utils.assign(item, {
              title: action.title || item.title,
              content: action.content || item.content
            })
          : item;
      });
    }
    return state;
  }

  scope.Reducer = {
    TODO_STATUS: TODO_STATUS,
    todo: todo,
  };

})(window);
