var Pow = require('./pow');
var utils = require('./utils');

var pow = new Pow();
pow.utils = utils;
pow.redirect = pow.router.redirect;
pow.back = pow.router.back;

module.exports = pow;
