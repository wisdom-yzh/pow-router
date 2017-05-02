/**
 * inherit a class
 * @param {Function} base base class
 * @param {Function} inherited inherited class
 */
function inherit(base, inherited) {
  if (Object.create) {
    inherited.prototype = Object.create(base.prototype);
    return;
  }
  
  function F() {}
  F.prototype = base.prototype;
  inherited.prototype = new F();
  inherited.prototype.constructor = inherited;
}

/**
 * get the best router type
 */
function getDefaultRouterType() {
  if (window.history) {
    return 'history';
  }
  return 'hash';
}

/**
 * equal to Object.assign in es6
 */
function assign(object1, object2) {
  if (Object.assign) {
    return Object.assign({}, object1, object2);
  }
  var obj = {};
  for (var key in object2) {
    obj[key] = object2[key];
  }
  for (var key in object1) {
    obj[key] = object1[key];
  }
  return obj;
}

module.exports = {
  inherit: inherit,
  getDefaultRouterType: getDefaultRouterType,
  assign: assign
}
