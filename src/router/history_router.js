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
  if (window.location.pathname.indexOf(baseUrl) !== 0) {
    return false;
  }
  return window.location.pathname.substr(baseUrl.length);
}

HistoryRouter.prototype.redirect = function(path, qs, needHistory) {
  path = this.routerBaseUrl + path;
  if (qs) {
    path = path + '?';
    for (var key in qs) {
      path = path + key + '=' + qs[key] + '&';
    }
    path = path.substr(0, path.length - 1);
  }
  if (needHistory) {
    window.history.pushState({}, '', path);
  } else {
    window.history.replaceState({}, '', path);
  }
  this.onChange();
}

HistoryRouter.prototype.start = function() {
  var self = this;
  window.onpopstate = function(event) {
    self.onChange(event);
  }
  Router.prototype.start.call(this);
}



module.exports = HistoryRouter;
