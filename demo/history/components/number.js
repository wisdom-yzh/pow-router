pow.Component('Number', {
  
  template: '\
    <div>history: {{history}}</div>\
    <div>count: {{count}}</div>\
    <div id="total">add history and count</div>\
    <div id="count">only add count</div>\
    <div id="history">only add history</div>\
    <div id="back">back</div>\
  ',

  onCreate: function() {
    
    var redirect = function(history, count, needHistory) {
      return function() {
        pow.router.redirect('/' + history + '/' + count, {}, needHistory);
      }
    }

    var history = parseInt(this.props.history) || 1;
    var count = parseInt(this.props.count) || 0;
    var eventHandler = {
      total: redirect(history+1, count+1, true),
      count: redirect(history, count+1, false),
      history: redirect(history+1, count, true),
      back: function() { pow.router.back() }
    };
    this.event = function(e) {
      var id = e.target.getAttribute('id');
      eventHandler[id]();
    }
  },

  onStart: function(rootScope) {
    rootScope.addEventListener('click', this.event);
  },

  onStop: function(rootScope) {
    rootScope.removeEventListener('click', this.event);
  }

});
