'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberTextBox = (_temp = _class = function (_React$Component) {
    _inherits(NumberTextBox, _React$Component);

    function NumberTextBox(props, context) {
        _classCallCheck(this, NumberTextBox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var value = props.value;
        if (value === undefined || value === null) {
            value = props.defaultValue;
        }
        value = _this.parseValue(value);
        _this._inputText = value;
        _this.state = {
            focused: false,
            value: value
        };
        return _this;
    }

    NumberTextBox.prototype.parseValue = function parseValue(text) {
        var value = null;
        if (this.props.type === NumberTextBox.type.int) {
            value = Number.parseInt(text);
        } else {
            value = Number.parseFloat(text);
            if (value) {
                value = value.toFixed(this.props.digits);
            }
        }
        if (Number.isNaN(value)) {
            value = null;
        }
        return value;
    };

    NumberTextBox.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            var value = this.parseValue(props.value);
            this.setState({ value: value });
            this._inputText = value;
        }
    };

    NumberTextBox.prototype.triggerOnChange = function triggerOnChange(value) {

        if (this.props.onChange) {
            var args = {
                name: this.props.name,
                value: value
            };
            this.props.onChange(args, this);
        }
    };

    NumberTextBox.prototype.render = function render() {
        var _this2 = this;

        return _react2.default.createElement(
            _.TextBox,
            _extends({ ref: function ref(t) {
                    return _this2._textbox = t;
                }
            }, this.props, {
                className: this.props.className,
                value: this.state.value,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onChange: this.handleChange,
                onInput: this.handleInput
            }),
            this.props.children
        );
    };

    NumberTextBox.prototype.getValue = function getValue() {
        var value = this.parseValue(this.state.value);
        return value;
    };

    NumberTextBox.prototype.setValue = function setValue(value) {
        value = this.parseValue(value);
        this.setState({ value: value });
        this._inputText = value;
    };

    NumberTextBox.prototype.getFormValue = function getFormValue() {
        var _ref;

        return _ref = {}, _ref[this.props.name] = this.state.value, _ref;
    };

    NumberTextBox.prototype.focus = function focus() {
        this._textbox.focus();
    };

    return NumberTextBox;
}(_react2.default.Component), _class.type = {
    int: "int",
    float: "float"
}, _class.defaultProps = {
    type: NumberTextBox.type.int, //int, float
    name: null,
    valid: true,
    digits: 2
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handleBlur = function (event) {
        var value = _this3.parseValue(_this3._inputText);
        _this3.setState({ value: value });
        _this3.triggerOnChange(value);
        if (_this3.props.onBlur) {
            _this3.props.onBlur({ event: event }, _this3);
        }
    };

    this.handleFocus = function (event) {
        if (_this3.props.onFocus) {
            _this3.props.onFocus({ event: event }, _this3);
        }
    };

    this.handleChange = function (args) {
        _this3._inputText = args.value;
        _this3.setState({ value: _this3._inputText });
        var value = _this3.parseValue(_this3._inputText);
        var valueText = "";
        if (value) {
            valueText = value.toString();
        }

        if (valueText == _this3._inputText) {
            _this3.setState({ value: value });
            _this3.triggerOnChange(value);
        }
    };

    this.handleInput = function (inputArgs, event) {
        var value = _this3.parseValue(inputArgs.value);

        if (_this3.props.onInput) {
            var args = {
                name: _this3.props.name,
                value: value
            };
            _this3.props.onInput(args, event);
        }
    };
}, _temp);
exports.default = NumberTextBox;
module.exports = exports['default'];