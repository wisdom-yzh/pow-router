var artTemplate = require('art-template/lib/template-web');
var utils = require('./utils');

function Component(config) {
  this.props = config.props || {};
  this.state = config.state || {};
  this.rootScope = config.rootScope || document;
  this.onCreate();
}

Component.prototype.render = function() {
  var html = this.template(utils.assign(this.props, this.state));
  this.rootScope.innerHTML = html;
  this.onStart(this.rootScope);
};

Component.prototype.setState = function(state) {
  this.onStop(this.rootScope);
  this.state = state;
  this.render();
};

Component.prototype.remove = function() {
  this.onStop(this.rootScope);
  this.onDestroy();
};

Component.prototype.onCreate = function() {};
Component.prototype.onStart = function() {};
Component.prototype.onStop = function() {};
Component.prototype.onDestroy = function() {};
Component.prototype.template = '';

function create(obj) {
  var F = function(obj) {
    Component.call(this, obj);
  };
  utils.inherit(Component, F);
  if (obj.template) F.prototype.template = artTemplate.compile(obj.template);
  if (obj.onStart) F.prototype.onStart = obj.onStart;
  if (obj.onStop) F.prototype.onStop = obj.onStop;
  if (obj.onCreate) F.prototype.onCreate = obj.onCreate;
  if (obj.onDestroy) F.prototype.onDestroy = obj.onDestroy;
  return F;
}

module.exports = {
  create: create
};
