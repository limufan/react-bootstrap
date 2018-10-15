"use strict";

exports.__esModule = true;
exports.DropdownMenu = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DropdownMenuItem = require("./DropdownMenuItem");

var _DropdownMenuItem2 = _interopRequireDefault(_DropdownMenuItem);

require("./css/menu.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = exports.DropdownMenu = function (_React$Component) {
    _inherits(DropdownMenu, _React$Component);

    function DropdownMenu(props, context) {
        _classCallCheck(this, DropdownMenu);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    DropdownMenu.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: "ywpui_dropdown_menu" },
            this.renderMenus()
        );
    };

    DropdownMenu.prototype.renderMenus = function renderMenus() {
        var _props = this.props,
            items = _props.items,
            style = _props.style;

        if (!items) {
            return null;
        }

        var menus = items.map(function (item) {
            return _react2.default.createElement(_DropdownMenuItem2.default, { item: item, style: style });
        });

        return menus;
    };

    return DropdownMenu;
}(_react2.default.Component);