pow.Component('Hello', {

  template: '\
    <h1>{{data}}</h1>\
  ',

  onCreate: function() {
    this.state = {
      data: 'hello world~'
    };

    var self = this;
    this.event = function() {
      self.setState({
        data: 'lucky dog~'
      });
    };
  },

  onStart: function(rootScope) {
    rootScope.addEventListener('click', this.event);
  },

  onStop: function(rootScope) {
    rootScope.removeEventListener('click', this.event);
  }

});
