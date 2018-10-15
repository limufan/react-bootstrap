'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('../../common');

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

var _ = require('../');

require('rc-calendar/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRangeCalendar = function (_React$Component) {
    _inherits(DateRangeCalendar, _React$Component);

    function DateRangeCalendar(props, context) {
        _classCallCheck(this, DateRangeCalendar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleDateSelect = function (dates) {
            var startTime = _common.formater.date(dates[0]);
            var endTime = _common.formater.date(dates[1]);

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: startTime + '\u81F3' + endTime
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectAll = function () {
            var value = {
                startTime: null,
                endTime: null,
                text: "全部"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectToday = function () {
            var today = (0, _moment2.default)();
            var startTime = _common.formater.date(today);
            var endTime = _common.formater.date(today);

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "今日"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectYesterday = function () {
            var startTime = _common.formater.date((0, _moment2.default)().subtract(1, "day"));
            var endTime = _common.formater.date((0, _moment2.default)().subtract(1, "day"));

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "昨日"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectRecentlyWeek = function () {
            var startTime = _common.formater.date((0, _moment2.default)().subtract(7, "day"));
            var endTime = _common.formater.date((0, _moment2.default)());

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "最近7日"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectRecentlyMonth = function () {
            var startTime = _common.formater.date((0, _moment2.default)().subtract(30, "day"));
            var endTime = _common.formater.date((0, _moment2.default)());

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "最近30日"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectCurrentMonth = function () {
            var now = (0, _moment2.default)();
            var startTime = _common.formater.date((0, _moment2.default)().set("date", 1));
            var endTime = _common.formater.date((0, _moment2.default)().set("date", now.daysInMonth()));

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "本月"
            };

            _this.triggerSelect(value);
        };

        _this.handleSelectLastMonth = function () {
            var lastMonth = (0, _moment2.default)().subtract(1, "month");
            var startTime = _common.formater.date(lastMonth.set("date", 1));
            var endTime = _common.formater.date(lastMonth.set("date", lastMonth.daysInMonth()));

            var value = {
                startTime: startTime,
                endTime: endTime,
                text: "上个月"
            };

            _this.triggerSelect(value);
        };

        _this.state = {};
        return _this;
    }

    DateRangeCalendar.prototype.triggerSelect = function triggerSelect(value) {
        if (this.props.onSelect) {
            this.props.onSelect(value);
        }
    };

    DateRangeCalendar.prototype.render = function render() {
        var _this2 = this;

        var classNames = ["ywpui_datepicker_range_calendar"];

        return _react2.default.createElement(
            'div',
            { className: classNames.join(" "), ref: function ref(el) {
                    return _this2._element = el;
                }, style: this.props.style },
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_RangeCalendar2.default, {
                        locale: _zh_CN2.default,
                        showDateInput: false,
                        onSelect: this.handleDateSelect
                    })
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, className: 'ywpui_datepicker_range_calendar_menu' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectAll },
                        '\u5168\u90E8'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectToday },
                        '\u4ECA\u65E5'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectYesterday },
                        '\u6628\u65E5'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectRecentlyWeek },
                        '\u6700\u8FD17\u65E5'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectRecentlyMonth },
                        '\u6700\u8FD130\u65E5'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectCurrentMonth },
                        '\u672C\u6708'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0);', onClick: this.handleSelectLastMonth },
                        '\u4E0A\u4E2A\u6708'
                    )
                )
            )
        );
    };

    DateRangeCalendar.prototype.format = function format(date) {
        if (!date) {
            return "";
        }
        return date.format("YYYY-MM-DD");
    };

    DateRangeCalendar.prototype.getValue = function getValue() {
        return this.state.value;
    };

    DateRangeCalendar.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return DateRangeCalendar;
}(_react2.default.Component);

exports.default = DateRangeCalendar;
module.exports = exports['default'];