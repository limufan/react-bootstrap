'use strict';

require('core-js/es5');

require('core-js/es6');

require('core-js/es7');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UIDemo = require('./UIDemo');

var _UIDemo2 = _interopRequireDefault(_UIDemo);

require('../../mock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_UIDemo2.default, null), document.getElementById('root'));