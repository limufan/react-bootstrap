'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('./CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxGroup = (_temp = _class = function (_React$Component) {
    _inherits(CheckBoxGroup, _React$Component);

    function CheckBoxGroup(props, context) {
        _classCallCheck(this, CheckBoxGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleItemonChange = function (args, event) {
            var value = _this.state.value;
            if (!value) {
                value = [];
            }
            if (args.checked) {
                value.push(args.value);
            } else {
                var valueIndex = value.indexOf(args.value);
                value.splice(valueIndex, 1);
            }

            _this.setState({ value: value });

            if (_this.props.onChange) {
                value = JSON.parse(JSON.stringify(value));
                var _args = {
                    name: _this.props.name,
                    value: value
                };
                _this.props.onChange(_args, event);
            }
        };

        _this.state = {
            value: props.value
        };
        return _this;
    }

    CheckBoxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            var value = JSON.parse(JSON.stringify(props.value));
            this.setState({ value: value });
        }
    };

    CheckBoxGroup.prototype.render = function render() {
        var _this2 = this;

        var state = this.state;

        var items = null;
        if (this.props.items) {
            items = this.props.items.map(function (item) {
                var checked = false;
                if (state.value && state.value.includes(item.value)) {
                    checked = true;
                }
                return _react2.default.createElement(CheckBoxGroupItem, _extends({ checked: checked, onChange: _this2.handleItemonChange }, item));
            });
        }

        return _react2.default.createElement(
            'div',
            null,
            items
        );
    };

    CheckBoxGroup.prototype.getValue = function getValue() {
        return this.state.value;
    };

    CheckBoxGroup.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return CheckBoxGroup;
}(_react2.default.Component), _class.defaultProps = {
    name: null
}, _temp);
exports.default = CheckBoxGroup;
var CheckBoxGroupItem = (_temp2 = _class2 = function (_React$Component2) {
    _inherits(CheckBoxGroupItem, _React$Component2);

    function CheckBoxGroupItem(props, context) {
        _classCallCheck(this, CheckBoxGroupItem);

        var _this3 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this3.handleClick = function (event) {
            var checked = !_this3.state.checked;
            _this3.setState({ checked: checked });
            if (_this3.props.onChange) {
                var args = {
                    checked: checked,
                    value: _this3.props.value
                };
                _this3.props.onChange(args, event);
            }
        };

        _this3.state = {
            checked: props.checked
        };
        return _this3;
    }

    CheckBoxGroupItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.checked !== undefined) {
            this.setState({ checked: props.checked });
        }
    };

    CheckBoxGroupItem.prototype.render = function render() {
        var className = 'ywpui_checkbox_ico ' + (this.state.checked ? "ywpui_checkbox_ico_on" : "");
        return _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'ywpui_checkbox__', onClick: this.handleClick, style: { marginRight: "35px" } },
            _react2.default.createElement('i', { className: className }),
            this.props.text
        );
    };

    return CheckBoxGroupItem;
}(_react2.default.Component), _class2.defaultProps = {
    text: "checkbox",
    name: null
}, _temp2);
module.exports = exports['default'];