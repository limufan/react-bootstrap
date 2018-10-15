"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _layout = require("./layout");

var _ = require("./");

var _TextBox = require("./TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

require("./css/searchTextbox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SerachTextBox = (_temp = _class = function (_React$Component) {
    _inherits(SerachTextBox, _React$Component);

    function SerachTextBox(props, context) {
        _classCallCheck(this, SerachTextBox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleChange = function (args, sender) {
            _this.setState({ value: args.value });
            if (_this.props.onChange) {
                var changeArgs = {
                    name: _this.props.name,
                    value: args.value
                };
                _this.props.onChange(changeArgs, sender);
            }
        };

        _this.handleInput = function (args, sender) {
            _this.setState({ value: args.value });
            if (_this.props.onInput) {
                var inputArgs = {
                    name: _this.props.name,
                    value: args.value
                };
                _this.props.onInput(inputArgs, sender);
            }
        };

        _this.handleBtnSearchClick = function (event) {
            if (_this.props.onSearch) {
                var args = {
                    name: _this.props.name,
                    value: _this.state.value
                };
                _this.props.onSearch(args, event);
            }
        };

        _this.state = {
            focused: false,
            value: props.value
        };
        return _this;
    }

    SerachTextBox.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({ value: props.value });
    };

    SerachTextBox.prototype.render = function render() {
        var text = this.state.value || "";
        return _react2.default.createElement(
            "div",
            { className: 'ywpui_search_textbox ' + this.props.className, style: this.props.style },
            _react2.default.createElement(
                _layout.Row,
                null,
                _react2.default.createElement(
                    _layout.Col,
                    { marginRightAuto: true, style: { padding: "0" } },
                    _react2.default.createElement(_TextBox2.default, { placeholder: this.props.placeholder,
                        style: { float: "none", padding: "0" },
                        onChange: this.handleChange,
                        onInput: this.handleInput,
                        value: text
                    })
                ),
                _react2.default.createElement(
                    _layout.Col,
                    { auto: true, style: { padding: "0" }, className: "ywpui_search_textbox_button" },
                    _react2.default.createElement(_.Icon, { type: _.Icon.type.search, style: { width: "36px", height: "38px" }, onClick: this.handleBtnSearchClick })
                )
            )
        );
    };

    SerachTextBox.prototype.getValue = function getValue() {
        return this.state.value;
    };

    return SerachTextBox;
}(_react2.default.Component), _class.defaultProps = {
    type: "text",
    name: null,
    valid: true
}, _temp);
exports.default = SerachTextBox;
module.exports = exports["default"];