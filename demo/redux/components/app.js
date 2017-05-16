pow.Component('App', {

  template: '\
    <article class="todo-list">\
      {{if todo && todo.length}}\
        {{each todo as row}}\
          {{if row.status != 2}}\
          <section class="todo-item" data-id="{{row.id}}">\
            <p class="todo-title">{{row.title}}</p>\
            <p class="todo-content">{{row.content}}</p>\
            <div class="todo-footer">\
              <div class="todo-status todo-status-{{row.status}}"></div>\
              <div class="todo-time">update time: {{row.timestamp}}</div>\
            </div>\
          </section>\
          {{/if}}\
        {{/each}}\
      {{else}}\
      Your TodoList is Empty~\
      {{/if}}\
    </article>\
  ',

  onCreate: function() {
    // add first todo
    if (!store.getState().length) {
      store.dispatch(Action.addTodo(
        'This is a simple todo webapp',
        'I use pow-router and redux to do that~'
      ));
    }
    // set event handler
    this.eventHandler = function(e) {
      
    };
  },

  onStart: function(rootElement) {
    rootElement.addEventListener('click', this.eventHandler);
  },

  onStop: function(rootElement) {
    rootElement.removeEventListener('click', this.eventHandler);
  }
});
