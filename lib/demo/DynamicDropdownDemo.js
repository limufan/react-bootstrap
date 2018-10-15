"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _DynamicDropdown = require("../components/DynamicDropdown");

var _DynamicDropdown2 = _interopRequireDefault(_DynamicDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownDemo = function (_Component) {
    _inherits(DropdownDemo, _Component);

    function DropdownDemo(props) {
        _classCallCheck(this, DropdownDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleDropdownClick = function () {
            _this.setState({ show: !_this.state.show });
        };

        _this.handleDropdownChange = function (event, args) {
            _this.setState({ value: args.value });
            _this.setState({ show: false });
        };

        _this.state = {
            show: false
        };

        _this.menus = [];
        _this.menus.push({ text: "Action", value: { id: "1", name: "Action" } });
        _this.menus.push({ text: "Another action", value: "Another action" });
        _this.menus.push({ text: "Something else here", value: "Something" });
        return _this;
    }

    DropdownDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "h3",
                null,
                "DynamicDropdown"
            ),
            _react2.default.createElement(
                "p",
                null,
                "select item value: ",
                JSON.stringify(this.state.value)
            ),
            _react2.default.createElement(
                _Button2.default,
                { dropdownToggle: true, onClick: this.handleDropdownClick },
                "Dynamic Dropdown"
            ),
            _react2.default.createElement(_DynamicDropdown2.default, { value: this.state.value, show: this.state.show, menus: this.menus, onChange: this.handleDropdownChange })
        );
    };

    return DropdownDemo;
}(_react.Component);

exports.default = DropdownDemo;
module.exports = exports["default"];