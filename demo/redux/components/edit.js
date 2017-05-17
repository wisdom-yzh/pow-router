pow.Component('Edit', {

  template: '\
    <div class="todo-editor">\
      <header class="todo-header">\
        {{if typeof id !== "undefined"}}Edit a TODO item{{else}}Add a new TODO item{{/if}}\
      </header>\
      <section class="edit-body">\
        <input class="edit-title" type="text" id="title" value="{{@title || ""}}"/>\
        <textarea class="edit-content" id="content" cols="30" rows="10">{{@content || ""}}</textarea>\
        <button class="btn edit-submit">Save</button>\
      </section>\
    </div>\
  ',

  onRender: function (data, next) {
    data.title && (data.title = decodeURIComponent(data.title));
    data.content && (data.content = decodeURIComponent(data.content));
    next(data);
  },

  onCreate: function() {
    this.eventHandler = function (e) {
      if (e.target.className !== 'btn edit-submit') return;
      var title = this.rootScope.querySelector('#title').value || 'empty';
      var content = this.rootScope.querySelector('#content').value || 'empty';
      pow.router.redirect('/');
      if (this.props && this.props.id) {
        store.dispatch(Action.editTodo(parseInt(this.props.id), {
          title: title,
          content: content
        }));
      } else {
        store.dispatch(Action.addTodo(title, content));
      }
    }.bind(this);
  },

  onStart: function(rootElement) {
    rootElement.addEventListener('click', this.eventHandler);
  },

  onStop: function(rootElement) {
    rootElement.removeEventListener('click', this.eventHandler);
  }
});