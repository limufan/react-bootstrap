"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Message = require("./Message");

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTAINER_ID = "___messageContainer__";
var container = null;

function newMessager(props, refCallback) {
    container = document.getElementById(CONTAINER_ID);
    if (container === null) {
        container = document.createElement('div');
        container.id = CONTAINER_ID;
        document.body.appendChild(container);
    }

    _reactDom2.default.render(_react2.default.createElement(_Message2.default, _extends({ show: true, onHide: unmountMessager }, props)), container);
};

function unmountMessager() {
    _reactDom2.default.unmountComponentAtNode(container);
}

var messager = {
    success: function success(message, duration) {
        if (!duration) {
            duration = 2000;
        }
        var props = {
            message: message,
            duration: duration,
            type: "success"
        };
        newMessager(props);
    },
    error: function error(message, duration) {
        if (!duration) {
            duration = 5000;
        }
        var props = {
            message: message,
            duration: duration,
            type: "error"
        };
        newMessager(props);
    },
    warning: function warning(message, duration) {
        if (!duration) {
            duration = 2000;
        }
        var props = {
            message: message,
            duration: duration,
            type: "warning"
        };
        newMessager(props);
    }
};

exports.default = messager;
module.exports = exports["default"];