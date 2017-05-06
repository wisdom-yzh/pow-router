var pathToRegexp = require('path-to-regexp');
var utils = require('../utils');

/**
 * Base Router Class
 * @constructor 
 * @param {String} routerBaseUrl
 * @param {Object} routers router dictionary
 */
function Router(routerBaseUrl, routers) {
  if (routerBaseUrl.substr(-1) === '/') {
    routerBaseUrl = routerBaseUrl.substr(0, routerBaseUrl.length - 1);
  }
  this.routerBaseUrl = routerBaseUrl;
  this.routers = {}; 
  if (routers && typeof routers == 'object') {
    for (var key in routers) {
      this.register(key, routers[key]);
    }
  }
}

/**
 * match router
 * @return {Object} includes Component name and params
 */
Router.prototype.match = function() {
  var location = this.getLocation();
  if (!location) {
    return false;
  }
  // match paths
  if (this.routers[location]) {
    return { component: this.routers[location] };
  }
  // match for regexp symbols
  var keys = [];
  for (var router in this.routers) {
    if (router.indexOf(':') === -1) continue;
    var re = pathToRegexp(router, keys);
    var matched = re.exec(location);
    if (matched && matched.length) {
      var values = matched.slice(1);
      var params = {};
      for (var i = 0, len = values.length; i < len; i++) {
        params[keys[i].name] = values[i];
      }
      return {
        component: this.routers[router],
        params: params 
      };
    }
  }
  return false;
}

/**
 * get router table
 * @return {Array}
 */
Router.prototype.getRouters = function() {
  return this.routers;
}

/**
 * register router
 * @param {String} path router path
 * @param {String} component component name
 */
Router.prototype.register = function(path, component) {
  if (this.routers[path]) {
    throw new Error('the path ' + path + ' has already registered');
  }
  this.routers[path] = component;
}

/**
 * history go back
 */
Router.prototype.back = function() {
  history.go(-1);
}

/**
 * start the first redirect
 */
Router.prototype.start = function() {
  return this.onChange();
}

/**
 * redirect to path
 * @virtual
 * @param {String} path
 * @param {Object} qs quertstring object
 * @param {Boolean} needHistory add history or not
 */
Router.prototype.redirect = function(path, qs, needHistory) {}

/**
 * get current url location
 * @virtual
 */
Router.prototype.getLocation = function() {}

module.exports = Router;
