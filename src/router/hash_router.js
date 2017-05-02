var utils = require('../utils');
var Router = require('./router');

function HashRouter(routers) {
  Router.call(this, routers);
}

utils.inherit(Router, HashRouter);

HashRouter.prototype.start = function() {
  var self = this;
  window.onhashchange = function(event) {
    self.onChange();
  }
  Router.prototype.start.call(this);
}




module.exports = HashRouter;
