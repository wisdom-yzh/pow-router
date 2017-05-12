var utils = require('../utils');
var Router = require('./router');

function HashRouter(routers) {
  Router.call(this, routers);
}

utils.inherit(Router, HashRouter);

/**
 * get location by hash
 */
HashRouter.prototype.getLocation = function() {
  var baseUrl = this.routerBaseUrl;
  var path = window.location.hash;
  if (path.indexOf(baseUrl) !== 0) {
    return false;
  }
  return path.substr(baseUrl.length);
};

/**
 * @override Router::redirect
 */
HashRouter.prototype.redirect = function(path, qs, needHistory) {
  path = this.routerBaseUrl + path;
  if (qs) {
    path = path + '?';
    for (var key in qs) {
      path = path + key + '=' + qs[key] + '&';
    }
    path = path.substr(0, path.length - 1);
  }
  if (needHistory === undefined || needHistory) {
    window.location.hash = path;
  } else {
    var finalPath = window.location.pathname +
                    window.location.search + '#' + path;
    window.location.replace(finalPath);
  }
  // automatic trigger onHashChange...
};

HashRouter.prototype.start = function() {
  var self = this;
  window.onhashchange = function() {
    self.onChange();
  };
  Router.prototype.start.call(this);
};




module.exports = HashRouter;
