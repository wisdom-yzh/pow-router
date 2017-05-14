pow.Component('Login', {

  template: '\
    <h3>login form</h3>\
    <div>\
      <p>username:<input class="username" type="text"></p>\
      <p class="error err_user">please input username!</p>\
      <p>password:<input class="password" type="password"></p>\
      <p class="error err_pwd">please input password!</p>\
      <button>login</button>\
    </div>',

  onCreate: function() {
    window.store && pow.router.redirect('/');
  },

  onStart: function(rootScope) {
    var $root = $(rootScope);
    $root.find('button').on('click', function() {
      var username = $root.find('.username').val();
      var password = $root.find('.password').val();
      $root.find('.error').hide();
      if (username !== '' && password !== '') {
        window.store = {
          username: username,
          password: password
        };
        pow.router.redirect('/');
      } else if (username == '') {
        $root.find('.err_user').show();
      } else {
        $root.find('.err_pwd').show();
      }
    }); 
  }
});
