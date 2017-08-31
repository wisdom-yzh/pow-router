pow.Component('App', {

  template: '\
    {{if profile && profile.username && profile.password}}\
      <h3>Your profile is:</h3>\
      <ul>\
        <li>username: {{profile.username}}</li>\
        <li>password: {{profile.password}}</li>\
      </ul>\
      <button class="logout">logout</button>\
      <p>but nothing else in this page ;-)</p>\
    {{else}}\
      <h3>Please press the button to login</h3>\
      <button class="login">login</button>\
    {{/if}}',

  onCreate: function () {
    window.store && this.setState({ profile: window.store })
  },

  onStart: function (rootScope) {
    var self = this
    var $root = $(rootScope)
    $root.find('.login').on('click', function () {
      pow.router.redirect('/login')
    })
    $root.find('.logout').on('click', function () {
      window.store = null
      self.setState({ profile: window.store })
    })
  }
})
