'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePickerCalendar = require('./DatePickerCalendar');

var _DatePickerCalendar2 = _interopRequireDefault(_DatePickerCalendar);

var _Trigger = require('../Trigger');

var _Trigger2 = _interopRequireDefault(_Trigger);

var _KeyCode = require('../KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = (_temp = _class = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker(props, context) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = props.value;
        if (!value) {
            value = props.defaultValue;
        }
        value = _this.format(value);
        _this.state = { value: value };
        return _this;
    }

    DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            var value = this.format(props.value);
            this.setState({ value: value });
        }
    };

    DatePicker.prototype.showCalendar = function showCalendar() {
        this._trigger.show();
    };

    DatePicker.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            className = _props.className,
            disabled = _props.disabled;
        var value = this.state.value;

        var classNames = ["ywpui_datepicker"];
        if (disabled) {
            classNames.push("disabled");
        }
        if (className) {
            classNames.push(className);
        }

        var calendar = _react2.default.createElement(_DatePickerCalendar2.default, { ref: function ref(c) {
                return _this2._calendar = c;
            }, showTime: false, onSelect: this.handleSelectDate });
        return _react2.default.createElement(
            'div',
            { className: classNames.join(" "), ref: function ref(el) {
                    return _this2._element = el;
                } },
            _react2.default.createElement(
                _Trigger2.default,
                { ref: function ref(trigger) {
                        return _this2._trigger = trigger;
                    },
                    action: disabled ? [""] : ["click"],
                    popup: calendar,
                    popupStyle: {},
                    popupAlign: {
                        offset: [-30, 3]
                    },
                    getPopupContainer: function getPopupContainer(el) {
                        return _this2._element;
                    }
                },
                _react2.default.createElement('input', {
                    type: 'text',
                    disabled: disabled,
                    placeholder: '\u8BF7\u8F93\u5165\u6709\u6548\u671F',
                    value: value,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onKeyDown: this.handleKeyDown
                })
            )
        );
    };

    DatePicker.prototype.triggerOnChange = function triggerOnChange(value) {
        if (this.props.onChange) {
            this.props.onChange({ value: value }, this);
        }
    };

    DatePicker.prototype.validate = function validate() {
        var value = this.state.value;

        var valid = (0, _moment2.default)(value).isValid();
        return {
            valid: valid,
            message: valid ? "" : "格式错误"
        };
    };

    DatePicker.prototype.format = function format(date) {
        if (!date) {
            return "";
        }
        var momentDate = (0, _moment2.default)(date);
        if (momentDate.isValid()) {
            return momentDate.format("YYYY-MM-DD");
        }

        return date;
    };

    DatePicker.prototype.getValue = function getValue() {
        return this.state.value;
    };

    DatePicker.prototype.setValue = function setValue(value) {
        var formatDate = this.format(value);
        this.setState({ value: formatDate });
    };

    return DatePicker;
}(_react2.default.Component), _class.defaultProps = {
    defaultValue: new Date()
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handleSelectDate = function (date) {
        var value = _this3.format(date);
        _this3.setState({
            value: value
        });
        _this3._trigger.hide();

        if (_this3.props.onChange) {
            var args = {
                name: _this3.props.name,
                value: value
            };
            _this3.props.onChange(args);
        }
    };

    this.handleChange = function (event) {
        var value = event.target.value;
        _this3.setState({ value: value });
        if (_this3._calendar) {
            _this3._calendar.setValue(value);
        }
    };

    this.handleBlur = function (event) {
        var value = _this3.format(_this3.state.value);
        _this3.triggerOnChange(value);
    };

    this.handleKeyDown = function (event) {
        if (event.keyCode === _KeyCode2.default.DOWN) {
            _this3.showCalendar();

            setTimeout(function () {
                if (_this3._calendar) {
                    _this3._calendar.focus();
                }
            }, 300);
        }
    };

    this.clear = function () {
        _this3.setValue("");
        _this3.triggerOnChange("");
    };
}, _temp);
exports.default = DatePicker;
module.exports = exports['default'];