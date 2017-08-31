var artTemplate = require('art-template/lib/template-web')
var utils = require('./utils')

function Component (config) {
  this.props = config.props || {}
  this.state = config.state || {}
  this.rootScope = config.rootScope || window.document
}

Component.prototype.render = function () {
  var data = utils.assign(this.props, this.state)
  this.onRender(data, function (data) {
    var html = this.template && this.template(data)
    this.rootScope.innerHTML = html || 'template is empty'
    this.onStart(this.rootScope)
  }.bind(this))
}

Component.prototype.setState = function (state) {
  this.onStop(this.rootScope)
  this.state = utils.assign(this.state, state)
  setTimeout(function () {
    this.render()
  }.bind(this), 0)
}

Component.prototype.remove = function () {
  this.onStop(this.rootScope)
  this.onDestroy()
}

Component.prototype.onCreate = function () {}
Component.prototype.onStart = function () {}
Component.prototype.onStop = function () {}
Component.prototype.onDestroy = function () {}
Component.prototype.onRender = function (data, next) { next(data) }
Component.prototype.template = ''

function create (obj) {
  var protoType = {}
  var funcs = ['onStart', 'onStop', 'onCreate', 'onDestroy', 'onRender']
  for (var i = 0; i < funcs.length; i++) {
    obj[funcs[i]] && (protoType[funcs[i]] = obj[funcs[i]])
    delete obj[funcs[i]]
  }
  if (obj.template) {
    protoType.template = artTemplate.compile(obj.template)
    delete obj.template
  }
  var F = function (params) {
    Component.call(this, params)
    for (var key in obj) {
      this[key] = obj[key]
    }
  }
  utils.inherit(Component, F)
  for (var key in protoType) {
    F.prototype[key] = protoType[key]
  }
  return F
}

module.exports = {
  create: create
}
