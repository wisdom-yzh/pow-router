/**
 * inherit a class
 * @param {Function} base base class
 * @param {Function} inherited inherited class
 */
function inherit (base, inherited) {
  if (Object.create) {
    inherited.prototype = Object.create(base.prototype)
    return
  }

  function F () {}
  F.prototype = base.prototype
  inherited.prototype = new F()
  inherited.prototype.constructor = inherited
}

/**
 * get the best router type
 */
function getDefaultRouterType () {
  if (window.history) {
    return 'history'
  }
  return 'hash'
}

/**
 * just like Object.assign in es6, but return a new Object
 */
function assign (object1, object2) {
  if (Object.assign) {
    return Object.assign({}, object1, object2)
  }
  var obj = {}
  for (var key in object1) {
    obj[key] = object1[key]
  }
  for (key in object2) {
    obj[key] = object2[key]
  }
  return obj
}

/**
 * encode querystring
 * @param {Object} qs qs object
 * @return {String} querystring
 */
function encodeQueryString (qs) {
  var querystring = '?'
  for (var key in qs) {
    querystring = querystring + key + '=' + qs[key] + '&'
  }
  return querystring.substr(0, querystring.length - 1)
}

/**
 * decode querystring
 * @param {String} querystring
 * @return {Object} qs object
 */
function decodeQueryString (querystring) {
  if (querystring[0] === '?') querystring = querystring.substr(1)
  var qs = {}, arr = querystring.split('&')
  for (var i = 0; i < arr.length; i++) {
    var objArr = arr[i].split('=')
    if (objArr.length > 1) {
      qs[objArr[0]] = objArr[1]
    } else if (objArr.length == 1 && objArr[0] !== '') {
      qs[objArr[0]] = objArr[0]
    }
  }
  return qs
}

module.exports = {
  inherit: inherit,
  getDefaultRouterType: getDefaultRouterType,
  assign: assign,
  encodeQueryString: encodeQueryString,
  decodeQueryString: decodeQueryString
}
