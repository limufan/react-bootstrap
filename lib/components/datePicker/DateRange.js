'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = require('../../common');

var _ = require('../');

var _DateRangeCalendar = require('./DateRangeCalendar');

var _DateRangeCalendar2 = _interopRequireDefault(_DateRangeCalendar);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('../css/datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = (_temp = _class = function (_React$Component) {
    _inherits(DateRange, _React$Component);

    DateRange.recentlyMonth = function recentlyMonth() {
        var today = new Date();
        var todayMonth = today.getMonth();
        var lastMonthToday = new Date();
        lastMonthToday.setMonth(todayMonth - 1);
        return {
            startTime: _common.formater.date(lastMonthToday),
            endTime: _common.formater.date(today)
        };
    };

    DateRange.recentlyYear = function recentlyYear() {
        var today = new Date();
        var todayYear = today.getFullYear();
        var lastYearToday = new Date();
        lastYearToday.setYear(todayYear - 1);
        return {
            startTime: _common.formater.date(lastYearToday),
            endTime: _common.formater.date(today)
        };
    };

    function DateRange(props, context) {
        _classCallCheck(this, DateRange);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleDateSelect = function (date) {
            _this._trigger.hide();
            _this.setState({
                value: date
            });

            if (_this.props.onChange) {
                var args = {
                    name: _this.props.name,
                    value: date
                };
                _this.props.onChange(args);
            }
        };

        var value = props.value;
        if (value === undefined || value === null) {
            value = props.defaultValue;
        }

        _this.state = {
            value: value
        };
        return _this;
    }

    DateRange.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    DateRange.prototype.render = function render() {
        var _this2 = this;

        var classNames = ["ywpui_datepicker"];

        var calendar = _react2.default.createElement(_DateRangeCalendar2.default, {
            onSelect: this.handleDateSelect
        });
        var value = this.state.value;
        var text = this.props.text;
        if (value) {
            text = value.text || value.startTime + '\u81F3' + value.endTime;
        } else {
            text = '';
        }
        return _react2.default.createElement(
            'div',
            { className: classNames.join(" "), ref: function ref(el) {
                    return _this2._element = el;
                }, style: this.props.style },
            _react2.default.createElement(
                _.Trigger,
                { ref: function ref(trigger) {
                        return _this2._trigger = trigger;
                    },
                    action: ["click"],
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
                    placeholder: '\u8BF7\u8F93\u5165\u6709\u6548\u671F',
                    value: text
                })
            )
        );
    };

    DateRange.prototype.getValue = function getValue() {
        return this.state.value;
    };

    DateRange.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return DateRange;
}(_react2.default.Component), _class.defaultProps = {
    type: "text",
    name: null,
    valid: true
}, _temp);
exports.default = DateRange;
module.exports = exports['default'];