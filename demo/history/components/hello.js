pow.Component('Hello', {

  template: '\
    <h1>{{data}}</h1>\
    <a id="next">goto page number</a>\
  ',

  onCreate: function () {
    this.state = {
      data: 'hello world~'
    }

    var self = this
    this.event = function (e) {
      if (e.target.getAttribute('id') == 'next') {
        pow.router.redirect('/1/0')
        return
      }
      self.setState({
        data: 'lucky dog~'
      })
    }
  },

  onStart: function (rootScope) {
    rootScope.addEventListener('click', this.event)
  },

  onStop: function (rootScope) {
    rootScope.removeEventListener('click', this.event)
  }

})
