/**
 * Class Resource
 * a Component manager
 */
function Resource(baseUrl) {
  this.resource = {};
  this.baseUrl = baseUrl || '';
}

/**
 * set baseUrl to load resource
 * @param {String} baseUrl
 */
Resource.prototype.setBaseUrl = function (baseUrl) {
  this.baseUrl = baseUrl;
};

/**
 * get a Component
 */
Resource.prototype.get = function(name, next) {
  if (this.resource[name]) {
    return next(this.resource[name]);
  }
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('src',
    this.baseUrl + '/' + name.toLowerCase() + '.js');
  document.body.append(scriptElement);

  var self = this;
  scriptElement.onload = function() {
    if (!self.resource[name]) {
      return next(false);
    }
    return next(self.resource[name]);
  };
};

/**
 * set a Component
 */
Resource.prototype.set = function(name, newClass) {
  this.resource[name] = newClass;
  return true;
};

module.exports = Resource;
