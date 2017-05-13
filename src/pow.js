var router = require('./router');
var utils = require('./utils');
var component = require('./component');
var Resource = require('./resource');

/**
 * init pow-router management
 * @constructor
 */
function Pow() {
  this.router = null;    // router controller
  this.resource = null;  // resource loader
  this.current = null;   // pointer to current component
  this.rootScope = null; // pointer to root element
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
  if (config && typeof config === 'object') {
    for (var key in defaultConfig) {
      if (config[key]) {
        defaultConfig[key] = config[key];
      }
    }
  }
  this.rootScope = document.querySelector(defaultConfig.rootScope) || document;
  this.resource = new Resource(defaultConfig.resourceBaseUrl);
  if (defaultConfig.routeType === 'history' && window.history) {
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
};

/**
 * Component definition
 * @param {String} name component name
 * @param {*} obj component configuration, object or function
 */
Pow.prototype.Component = function(name, obj) {
  if (typeof obj === 'function') obj = obj();
  return this.resource.set(name, component.create(obj));
};

Pow.prototype.start = function() {
  var pow = this;
  if (!this.router || !this.resource) {
    this.config(undefined);
  }
  this.router.onChange = function(event) {
    var matched = this.match();
    if (!matched) {
      throw new Error('url not found!');
    }
    if (pow.current && pow.current.remove) pow.current.remove();
    pow.resource.get(matched.component, function(Component) {
      pow.current = new Component({
        state: {},
        props: utils.assign(
          matched.params, 
          utils.decodeQueryString(window.location.search)
        ),
        rootScope: pow.rootScope
      });
      pow.current.render();
    });
  };
  this.router.start();
  this.redirect = this.router.redirect;
  this.back = this.router.back;
};

module.exports = Pow;
