'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./css/checkbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = (_temp = _class = function (_React$Component) {
    _inherits(CheckBox, _React$Component);

    function CheckBox(props, context) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function (event) {
            var value = _this.props.disabled ? _this.state.value : !_this.state.value;
            _this.setState({ value: value });
            if (_this.props.onChange) {
                var args = {
                    name: _this.props.name,
                    value: value
                };
                _this.props.onChange(args, event);
            }
        };

        _this.state = {
            value: props.value
        };
        return _this;
    }

    CheckBox.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    CheckBox.prototype.render = function render() {
        return _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'ywpui_checkbox__', onClick: this.handleClick },
            this.renderIcon(),
            this.renderLable()
        );
    };

    CheckBox.prototype.renderIcon = function renderIcon() {
        var className = 'ywpui_checkbox_ico__ ' + (this.state.value ? "ywpui_checkbox_ico_on__" : "");
        return _react2.default.createElement('i', { className: className });
    };

    CheckBox.prototype.renderLable = function renderLable() {
        if (!this.props.label) {
            return null;
        }

        return _react2.default.createElement(
            'div',
            { className: 'ywpui_checkbox_label' },
            this.props.label
        );
    };

    CheckBox.prototype.getValue = function getValue() {
        return this.state.value;
    };

    CheckBox.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return CheckBox;
}(_react2.default.Component), _class.defaultProps = {
    label: "",
    name: null
}, _temp);
exports.default = CheckBox;
module.exports = exports['default'];