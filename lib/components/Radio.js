'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./css/radio.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (_temp = _class = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props, context) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleItemChecked = function (item, sender) {
            _this.setState({
                text: item.text,
                value: item.value
            });

            _this.triggerChange(item, sender);
        };

        _this.state = {
            value: props.value
        };
        return _this;
    }

    Radio.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    Radio.prototype.triggerChange = function triggerChange(item, sender) {
        if (this.props.onChange) {
            var args = {
                name: this.props.name,
                text: item.text,
                value: item.value
            };
            this.props.onChange(args, sender);
        }
    };

    Radio.prototype.render = function render() {
        var _this2 = this;

        var items = null;
        if (this.props.items) {
            items = this.props.items.map(function (item) {
                var checked = false;
                if (_this2.state.value === item.value) {
                    checked = true;
                }
                return _react2.default.createElement(RadioItem, _extends({ checked: checked, onChecked: _this2.handleItemChecked }, item));
            });
        }

        return _react2.default.createElement(
            'div',
            null,
            items
        );
    };

    Radio.prototype.getValue = function getValue() {
        return this.state.value;
    };

    Radio.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return Radio;
}(_react2.default.Component), _class.defaultProps = {
    name: null
}, _temp);
exports.default = Radio;
var RadioItem = (_temp2 = _class2 = function (_React$Component2) {
    _inherits(RadioItem, _React$Component2);

    function RadioItem(props, context) {
        _classCallCheck(this, RadioItem);

        var _this3 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this3.handleClick = function (event) {
            _this3.setState({ checked: true });
            _this3.triggerChanged(event);
        };

        _this3.state = {
            checked: props.checked
        };
        return _this3;
    }

    RadioItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.checked !== undefined) {
            this.setState({ checked: props.checked });
        }
    };

    RadioItem.prototype.triggerChanged = function triggerChanged(event) {
        if (this.props.onChecked) {
            var args = {
                checked: true,
                text: this.props.text,
                value: this.props.value
            };
            this.props.onChecked(args, this);
        }
    };

    RadioItem.prototype.render = function render() {
        var className = ["ywpui_radio_ico"];
        if (this.state.checked) {
            className.push("ywpui_radio_ico_on");
        }
        return _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'ywpui_radio__', onClick: this.handleClick },
            _react2.default.createElement('i', { className: className.join(" ") }),
            this.props.text
        );
    };

    RadioItem.prototype.getValue = function getValue() {
        return this.state.value;
    };

    return RadioItem;
}(_react2.default.Component), _class2.defaultProps = {
    text: "",
    value: null
}, _temp2);
module.exports = exports['default'];