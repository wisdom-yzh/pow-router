pow.Component('App', {

  template: '\
    <article class="todo-list">\
      {{if !empty && todo && todo.length}}\
        <header class="todo-header">This is a TodoList Demo</header>\
        {{each todo as row}}\
          {{if row.status != 2}}\
          <section class="todo-item">\
            <p class="todo-title">{{row.title}}</p>\
            <p class="todo-content">{{row.content}}</p>\
            <footer class="todo-footer" data-id="{{row.id}}">\
              <div class="todo-status todo-status-{{row.status}}"></div>\
              <div class="todo-time">{{row.timestamp}}</div>\
              <button class="btn todo-edit">Edit</button>\
              <button class="btn todo-delete">Delete</button>\
            </footer>\
          </section>\
          {{/if}}\
        {{/each}}\
      {{else}}\
      <header class="todo-header">Your TodoList is Empty~</header>\
      {{/if}}\
    </article>\
    <button class="btn todo-add">add a new item</button>\
  ',
  
  onRender: function (data, next) {
    if (!data || !data.todo) data = { todo: store.getState() };
    var empty = data.todo.filter(function (item) {
      return item.status !== 2;
    }).length === 0;
    next(pow.utils.assign({ empty: empty }, data));
  },

  onCreate: function() {
    // add first task
    if (!store.getState().length) {
      store.dispatch(Action.addTodo(
        'This is a simple todo webapp',
        'I use pow-router and redux to do that~'
      ));
    }
    // set event handler
    this.eventHandler = function(e) {
      var target = e.target;
      var className = target.className;
      if (className === 'btn todo-add') {
        pow.router.redirect('/edit');
      } else {
        var todo_id = parseInt(target.parentNode.getAttribute('data-id'));
        switch (className) {
          case 'btn todo-edit':
            pow.router.redirect('/edit', {
              id: todo_id,
              title: store.getState()[todo_id].title,
              content: store.getState()[todo_id].content
            });
            break;
          case 'btn todo-delete':
            store.dispatch(Action.removeTodo(todo_id));
            break;
          case 'btn todo-status':
            store.dispatch(Action.triggerTodo(todo_id));
            break;
        }
      }
    };
  },

  onStart: function(rootElement) {
    rootElement.addEventListener('click', this.eventHandler);
  },

  onStop: function(rootElement) {
    rootElement.removeEventListener('click', this.eventHandler);
  }
});
