'use strict';

exports.__esModule = true;

require('core-js/es5');

require('core-js/es6');

require('core-js/es7');

var _Loading = require('./components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _message = require('./components/message');

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ywpUI = {
    loading: _Loading2.default,
    messager: _message.messager,
    Icon: _icon2.default
};

exports.default = ywpUI;
module.exports = exports['default'];