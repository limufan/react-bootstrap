'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _ = require('../');

var _Panel = require('rc-time-picker/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

require('rc-calendar/assets/index.css');

require('rc-time-picker/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = (_temp = _class = function (_React$Component) {
    _inherits(DateTimePicker, _React$Component);

    function DateTimePicker(props, context) {
        _classCallCheck(this, DateTimePicker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = props.value;
        if (!value) {
            value = props.defaultValue;
        }

        value = _this.format(value);
        _this.state = {
            value: value
        };
        return _this;
    }

    DateTimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            var value = this.format(props.value);
            this.setState({ value: value });
        }
    };

    DateTimePicker.prototype.render = function render() {
        var _this2 = this;

        var classNames = ["ywpui_datepicker"];
        var timePickerElement = _react2.default.createElement(_Panel2.default, null);

        var calendar = _react2.default.createElement(_rcCalendar2.default, {
            locale: _zh_CN2.default,
            showDateInput: false,
            onSelect: this.handleSelectDate,
            timePicker: timePickerElement,
            onOk: this.handleBtnOkClick
        });
        return _react2.default.createElement(
            'div',
            { className: classNames.join(" "), ref: function ref(el) {
                    return _this2._element = el;
                } },
            _react2.default.createElement(
                _.Trigger,
                { ref: function ref(trigger) {
                        return _this2._trigger = trigger;
                    },
                    action: ['click'],
                    popup: calendar,
                    popupStyle: {},
                    popupAlign: {
                        points: ['tl', 'bl'],
                        offset: [-30, 3]
                    },
                    getPopupContainer: function getPopupContainer(el) {
                        return _this2._element;
                    }
                },
                _react2.default.createElement('input', {
                    type: 'text',
                    placeholder: this.props.placeholder,
                    value: this.state.value
                })
            )
        );
    };

    DateTimePicker.prototype.format = function format(date) {
        if (!date) {
            return "";
        }
        return (0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss");
    };

    DateTimePicker.prototype.getValue = function getValue() {
        return this.state.value;
    };

    DateTimePicker.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return DateTimePicker;
}(_react2.default.Component), _class.defaultProps = {
    defaultValue: new Date()
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handleSelectDate = function (date) {
        var value = _this3.format(date);
        _this3.setState({
            value: value
        });

        if (_this3.props.onChange) {
            var args = {
                name: _this3.props.name,
                value: value
            };
            _this3.props.onChange(args);
        }
    };

    this.handleBtnOkClick = function () {
        _this3._trigger.hide();
    };
}, _temp);
exports.default = DateTimePicker;
module.exports = exports['default'];