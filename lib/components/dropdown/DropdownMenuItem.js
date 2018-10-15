'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenuItem = function (_React$Component) {
    _inherits(DropdownMenuItem, _React$Component);

    function DropdownMenuItem(props, context) {
        _classCallCheck(this, DropdownMenuItem);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    DropdownMenuItem.prototype.render = function render() {
        var item = this.props.item;
        var to = item.to,
            href = item.href,
            text = item.text,
            icon = item.icon,
            onClick = item.onClick;

        if (to) {
            return _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'ywpui_dropdown_menu_item', to: to },
                icon,
                text
            );
        } else {
            return _react2.default.createElement(
                'a',
                { className: 'ywpui_dropdown_menu_item', href: href, onClick: onClick },
                icon,
                text
            );
        }
    };

    return DropdownMenuItem;
}(_react2.default.Component);

exports.default = DropdownMenuItem;
module.exports = exports['default'];