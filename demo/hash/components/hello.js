pow.Component('Hello', {

  template: '\
    <ul>\
      <li id="world">goto world</li>\
      <li id="lucky">goto lucky</li>\
      <li id="dog">goto dog</li>\
    </ul>\
  ',

  onCreate: function () {
    this.event = function (e) {
      var id = e.target.getAttribute('id')
      pow.router.redirect('/' + id)
    }
  },

  onStart: function (rootScope) {
    rootScope.querySelector('ul').addEventListener('click', this.event)
  },

  onStop: function (rootScope) {
    rootScope.querySelector('ul').removeEventListener('click', this.event)
  }
})
