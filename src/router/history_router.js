var utils = require('../utils');
var Router = require('./router');

function HistoryRouter(routerBaseUrl, routers) {
  Router.call(this, routerBaseUrl, routers);
}

utils.inherit(Router, HistoryRouter);

/**
 * get location by history
 */
HistoryRouter.prototype.getLocation = function() {
  var baseUrl = this.routerBaseUrl;
  var path = window.location.pathname;
  if (path.indexOf(baseUrl) !== 0) {
    return false;
  }
  return path.substr(baseUrl.length);
};

/**
 * @override Router::redirect
 */
HistoryRouter.prototype.redirect = function(path, qs, needHistory) {
  path = this.routerBaseUrl + path;
  if (qs) {
    path = path + utils.encodeQueryString(qs);
  }

  if (needHistory === undefined || needHistory) {
    window.history.pushState({}, '', path);
  } else {
    window.history.replaceState({}, '', path);
  }
  this.onChange();
};

HistoryRouter.prototype.start = function() {
  var self = this;
  window.onpopstate = function(event) {
    self.onChange(event);
  }
  Router.prototype.start.call(this);
};



module.exports = HistoryRouter;
