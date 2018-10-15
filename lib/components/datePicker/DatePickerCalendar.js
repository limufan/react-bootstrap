'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _Panel = require('rc-time-picker/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

require('../css/datepicker.css');

require('rc-calendar/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerCalendar = function (_React$Component) {
    _inherits(DatePickerCalendar, _React$Component);

    function DatePickerCalendar(props, context) {
        _classCallCheck(this, DatePickerCalendar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleCalendarKeyDown = function (event) {
            if (_this._calendar) {
                _this._calendar.onKeyDown(event);
            }
        };

        _this.state = {};
        return _this;
    }

    DatePickerCalendar.prototype.render = function render() {
        var _this2 = this;

        var timePickerElement = _react2.default.createElement(_Panel2.default, { defaultValue: (0, _moment2.default)('00:00:00', 'HH:mm:ss') });
        return _react2.default.createElement(
            'a',
            { ref: function ref(el) {
                    return _this2._calendarContainer = el;
                }, href: 'javascript:;', className: 'ywpui_datepicker_calendar', onKeyDown: this.handleCalendarKeyDown },
            _react2.default.createElement(_rcCalendar2.default, {
                ref: function ref(c) {
                    return _this2._calendar = c;
                },
                locale: _zh_CN2.default,
                showDateInput: false,
                onSelect: this.props.onSelect,
                timePicker: this.props.showTime ? timePickerElement : null,
                showClear: true,
                onClear: this.handleClearDate
            })
        );
    };

    DatePickerCalendar.prototype.setValue = function setValue(value) {
        var momentValue = (0, _moment2.default)(value);
        if (momentValue.isValid()) {
            this._calendar.setValue(momentValue);
        }
    };

    DatePickerCalendar.prototype.focus = function focus() {
        this._calendarContainer.focus();
    };

    return DatePickerCalendar;
}(_react2.default.Component);

exports.default = DatePickerCalendar;
module.exports = exports['default'];