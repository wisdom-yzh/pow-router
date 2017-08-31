var router = require('./router')
var utils = require('./utils')
var component = require('./component')
var Resource = require('./resource')

/**
 * init pow-router management
 * @constructor
 */
function Pow () {
  this.router = null              // router controller
  this.current = null             // pointer to current component
  this.rootScope = null           // pointer to root element
  this.resource = new Resource()  // resource loader
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
Pow.prototype.config = function (config) {
  var defaultConfig = {
    routerBaseUrl: '',
    resourceBaseUrl: '',
    rootScope: '#main',
    routers: {},
    routeType: utils.getDefaultRouterType()
  }
  if (config && typeof config === 'object') {
    for (var key in defaultConfig) {
      if (config[key]) {
        defaultConfig[key] = config[key]
      }
    }
  }
  this.rootScope = document.querySelector(defaultConfig.rootScope) || document
  this.resource.setBaseUrl(defaultConfig.resourceBaseUrl)
  if (defaultConfig.routeType === 'history' && window.history) {
    this.router = new router.HistoryRouter(
      defaultConfig.routerBaseUrl,
      defaultConfig.routers
    )
  } else {
    this.router = new router.HashRouter(
      defaultConfig.routerBaseUrl,
      defaultConfig.routers
    )
  }
  return this
}

/**
 * Component definition
 * @param {String} name component name
 * @param {*} obj component configuration, object or function
 */
Pow.prototype.Component = function (name, obj) {
  if (typeof obj === 'function') obj = obj()
  return this.resource.set(name, component.create(obj))
}

/**
 * Start!
 */
Pow.prototype.start = function () {
  var pow = this
  if (!this.router || !this.resource) {
    this.config(undefined)
  }
  this.router.onChange = function () {
    var matched = this.match()
    if (!matched) {
      return false
    }
    if (pow.current && pow.current.remove) pow.current.remove()
    pow.resource.get(matched.component, function (Component) {
      if (!Component) {
        return false
      }
      pow.current = new Component({
        state: {},
        props: utils.assign(
          matched.params,
          utils.decodeQueryString(window.location.search)
        ),
        rootScope: pow.rootScope
      })
      pow.current.onCreate()
      pow.current.render()
    })
  }
  this.router.start()
}

module.exports = Pow
