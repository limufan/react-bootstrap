"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("./Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicDropdown = (_temp = _class = function (_React$Component) {
    _inherits(DynamicDropdown, _React$Component);

    function DynamicDropdown(props) {
        _classCallCheck(this, DynamicDropdown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleMenuSelect = function (event, args) {
            if (_this.props.onChange) {
                _this.props.onChange(event, args);
            }
        };

        return _this;
    }

    DynamicDropdown.prototype.render = function render() {
        var _this2 = this;

        var menus = this.props.menus.map(function (menu) {
            var active = false;
            if (_this2.props.value === menu.value) {
                active = true;
            }
            return _react2.default.createElement(_Dropdown.DropdownMenu, { text: menu.text, value: menu.value, active: active, onSelect: _this2.handleMenuSelect });
        });

        return _react2.default.createElement(
            _Dropdown2.default,
            { show: this.props.show },
            menus
        );
    };

    return DynamicDropdown;
}(_react2.default.Component), _class.defaultProps = {
    show: false,
    value: null
}, _temp);
exports.default = DynamicDropdown;
module.exports = exports["default"];