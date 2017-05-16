pow.Component('Number', {
  
  template: '\
    <div>history: {{history_count}}</div>\
    <div>count: {{count}}</div>\
    <button id="total">add history and count</button>\
    <button id="count">only add count</button>\
    <button id="history">only add history</button>\
    <button id="back">back</button>\
  ',

  onCreate: function() {
    
    var redirect = function(history, count, needHistory) {
      return function() {
        pow.router.redirect('/' + history + '/' + count, {}, needHistory);
      }
    };

    var history = parseInt(this.props.history_count) || 1;
    var count = parseInt(this.props.count) || 0;
    var eventHandler = {
      total: redirect(history+1, count+1, true),
      count: redirect(history, count+1, false),
      history: redirect(history+1, count, true),
      back: function() { pow.router.back(); }
    };
    this.event = function(e) {
      var id = e.target.getAttribute('id');
      eventHandler[id]();
    };
  },

  onStart: function(rootScope) {
    rootScope.addEventListener('click', this.event);
  },

  onStop: function(rootScope) {
    rootScope.removeEventListener('click', this.event);
  }

});
