"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require("../components/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DynamicDropdownDemo = require("./DynamicDropdownDemo");

var _DynamicDropdownDemo2 = _interopRequireDefault(_DynamicDropdownDemo);

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
        return _this;
    }

    DropdownDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "h3",
                null,
                "Examples"
            ),
            _react2.default.createElement(
                "p",
                null,
                "Wrap the dropdown\u2019s toggle (your button or link) and the dropdown menu within ",
                _react2.default.createElement(
                    "code",
                    { "class": "highlighter-rouge" },
                    ".dropdown"
                ),
                ", or another element that declares ",
                _react2.default.createElement(
                    "code",
                    { "class": "highlighter-rouge" },
                    "position: relative;"
                ),
                ". Dropdowns can be triggered from ",
                _react2.default.createElement(
                    "code",
                    { "class": "highlighter-rouge" },
                    "<a>"
                ),
                " or ",
                _react2.default.createElement(
                    "code",
                    { "class": "highlighter-rouge" },
                    "<button>"
                ),
                " elements to better fit your potential needs."
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
                "Dropdown"
            ),
            _react2.default.createElement(
                _Dropdown2.default,
                { value: this.state.value, show: this.state.show, menus: this.menus, onChange: this.handleDropdownChange },
                _react2.default.createElement(_Dropdown.DropdownMenu, { text: "Action", value: "Action", active: this.state.value === "Action", onSelect: this.handleDropdownChange }),
                _react2.default.createElement(_Dropdown.DropdownMenu, { text: "Another action", value: "Another action", active: this.state.value === "Another action", onSelect: this.handleDropdownChange }),
                _react2.default.createElement(_Dropdown.DropdownMenu, { text: "Something else here", value: "Something else here", active: this.state.value === "Something else here", onSelect: this.handleDropdownChange })
            ),
            _react2.default.createElement(_DynamicDropdownDemo2.default, null)
        );
    };

    return DropdownDemo;
}(_react.Component);

exports.default = DropdownDemo;
module.exports = exports["default"];