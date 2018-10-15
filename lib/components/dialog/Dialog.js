"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ConfirmDialog = require("./ConfirmDialog");

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTAINER_ID = "___dialogContainer__";
var container = null;

function newConfirmDialog(props, refCallback) {
    container = document.getElementById(CONTAINER_ID);
    if (container === null) {
        container = document.createElement('div');
        container.id = CONTAINER_ID;
        document.body.appendChild(container);
    }

    _reactDom2.default.render(_react2.default.createElement(_ConfirmDialog2.default, _extends({ show: true, onHide: unmountDialog }, props)), container);
};

function unmountDialog() {
    _reactDom2.default.unmountComponentAtNode(container);
}

var dialog = {
    confirm: function confirm(args) {
        newConfirmDialog(args);
    }
};

exports.default = dialog;
module.exports = exports["default"];