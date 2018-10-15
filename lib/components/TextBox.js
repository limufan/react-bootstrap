'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _layout = require('./layout');

require('./css/textbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBox = (_temp = _class = function (_React$Component) {
    _inherits(TextBox, _React$Component);

    function TextBox(props, context) {
        _classCallCheck(this, TextBox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleFocus = function (event) {
            _this.setState({ focused: true });
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };

        _this.handleBlur = function (event) {
            _this.setState({ focused: false });
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };

        _this.handleChange = function (event) {
            _this.setState({ value: event.target.value });
            if (_this.props.onChange) {
                var args = {
                    name: _this.props.name,
                    value: event.target.value
                };
                _this.props.onChange(args, event);
            }
        };

        _this.handleInput = function (event) {
            _this.setState({ value: event.target.value });
            if (_this.props.onInput) {
                var args = {
                    name: _this.props.name,
                    value: event.target.value
                };
                _this.props.onInput(args, event);
            }
        };

        _this.handleClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };

        _this.state = {
            focused: false,
            value: props.value
        };
        return _this;
    }

    TextBox.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    TextBox.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            className = _props.className;

        var classNames = ["ywpui_textbox"];
        if (className) {
            classNames.push(className);
        }
        if (disabled) {
            classNames.push("disabled");
        }

        if (this.state.focused) {
            classNames.push("focused");
        }

        var text = this.state.value;
        if (text === undefined || text === null) {
            text = "";
        }

        return _react2.default.createElement(
            'div',
            { className: classNames.join(" "), style: this.props.style },
            _react2.default.createElement(
                _layout.Row,
                null,
                _react2.default.createElement(
                    _layout.Col,
                    { style: { padding: "0" } },
                    _react2.default.createElement('input', {
                        ref: function ref(i) {
                            return _this2._input = i;
                        },
                        disabled: this.props.disabled,
                        placeholder: this.props.placeholder,
                        value: text,
                        type: this.props.type,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onInput: this.handleInput,
                        onClick: this.handleClick,
                        onKeyDown: this.props.onKeyDown
                    })
                ),
                _react2.default.createElement(
                    _layout.Col,
                    { auto: true, marginLeftAuto: true, style: { padding: "0 5px" } },
                    this.props.children
                )
            )
        );
    };

    TextBox.prototype.blur = function blur() {
        this._input.blur();
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    };

    TextBox.prototype.focus = function focus() {
        this._input.focus();
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    };

    TextBox.prototype.getValue = function getValue() {
        return this.state.value;
    };

    TextBox.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    TextBox.prototype.getFormValue = function getFormValue() {
        var _ref;

        return _ref = {}, _ref[this.props.name] = this.state.value, _ref;
    };

    return TextBox;
}(_react2.default.Component), _class.defaultProps = {
    type: "text",
    name: null,
    valid: true
}, _temp);
exports.default = TextBox;
module.exports = exports['default'];