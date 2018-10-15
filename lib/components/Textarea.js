'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./css/textarea.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = (_temp = _class = function (_React$Component) {
    _inherits(Textarea, _React$Component);

    function Textarea(props, context) {
        _classCallCheck(this, Textarea);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleFocus = function (event) {
            _this.setState({ focused: true });
        };

        _this.handleBlur = function (event) {
            _this.setState({ focused: false });
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

        _this.state = {
            focused: false,
            value: props.value
        };
        return _this;
    }

    Textarea.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    Textarea.prototype.render = function render() {
        var disabled = this.props.disabled;


        var classNames = ["ywpui_textarea__"];
        if (this.props.className) {
            classNames.push(this.props.className);
        }

        if (disabled) {
            classNames.push("disabled");
        }

        if (this.state.focused) {
            classNames.push("green_border");
        }
        var errorItem = null;
        if (!this.props.valid) {
            errorItem = _react2.default.createElement(
                'div',
                { 'class': 'from_item_error boxs' },
                this.props.validMessage
            );
        }
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement('textarea', { type: 'textarea',
                className: classNames.join(" "),
                style: this.props.style,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                maxlength: this.props.maxLength,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onChange: this.handleChange,
                onInput: this.handleInput,
                value: this.state.value
            }),
            errorItem
        );
    };

    Textarea.prototype.getValue = function getValue() {
        return this.state.value;
    };

    Textarea.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return Textarea;
}(_react2.default.Component), _class.defaultProps = {
    valid: true
}, _temp);
exports.default = Textarea;
module.exports = exports['default'];