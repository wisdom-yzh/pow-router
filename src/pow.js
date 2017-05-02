var router = require('./router');
var utils = require('./utils');
var component = require('./component');
var Resource = require('./resource');

function Pow() {
  this.router = null;
  this.resource = null;
  this.current = null;
  this.rootScope = null;
}

/**
 * config the spa router framework
 * @param {Object} config 
 * such as below:
 * {
 *   baseUrl: './components',
 *   rootScope: '#main',
 *   routers: {
 *     '/hello': 'Hello',
 *     '/user': 'User'
 *   },
 *   routeType: 'hash', // default 'history' if supported
 * }
 */
Pow.prototype.config = function(config) {
  var defaultConfig = {
    routerBaseUrl: '',
    resourceBaseUrl: '',
    rootScope: '#main',
    routers: {},
    routeType: utils.getDefaultRouterType()
  };
  if (config && typeof config == 'object') {
    for (var key in defaultConfig) {
      if (config[key]) {
        defaultConfig[key] = config[key];
      }
    }
  }
  this.rootScope = document.querySelector(defaultConfig.rootScope) || document;
  this.resource = new Resource(defaultConfig.resourceBaseUrl);
  if (defaultConfig.routeType == 'history' && window.history) {
    this.router = new router.HistoryRouter(
      defaultConfig.routerBaseUrl,
      defaultConfig.routers
    );
  } else {
    this.router = new router.HashRouter(
      defaultConfig.routerBaseUrl, 
      defaultConfig.routers
    );
  }
  return this;
}

/**
 * Component definition
 * @param {String} name component name
 * @param {*} obj component configuration, object or function
 */
Pow.prototype.Component = function(name, obj) {
  if (typeof obj == 'function') obj = obj();
  return this.resource.set(name, component.create(obj));
}

Pow.prototype.start = function() {
  var pow = this;
  if (!this.router || !this.resource) {
    this.config();
  }
  this.router.onChange = function(event) {
    var matched = this.match();
    if (!matched) {
      throw new Error('url not found!');
      return;
    }
    pow.resource.get(matched.component, function(component) {
      pow.current = new component({
        state: matched.params || {},
        rootScope: pow.rootScope
      });
      pow.current.render();
    });
  }
  this.router.start();
}

module.exports = Pow;
