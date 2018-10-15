"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Form = require("../components/Form");

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = require("../components/FormGroup");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ValidateInput = require("../components/ValidateInput");

var _TextBox = require("../components/TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormDemo = function (_Component) {
    _inherits(FormDemo, _Component);

    function FormDemo(props) {
        _classCallCheck(this, FormDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleSubmit = function () {
            _this.validate();
            if (_this.props.onSubmit) {
                _this.props.onSubmit();
            }
        };

        _this.handleReset = function (event) {
            var value = _this.state.value;
            value.account = "";
            _this.setState({ value: value });
        };

        _this.handleInputChange = function (event, args) {
            var value = _this.state.value;
            value[args.name] = args.value;
            _this.setState({ value: value });
            _this.setState({ valid: args.valid });
        };

        _this.refInput = function (input) {
            if (!_this.inputs.includes(input)) {
                _this.inputs.push(input);
            }
        };

        _this.state = {
            value: {
                account: null,
                name: null
            },
            valid: false
        };

        _this.inputs = [];
        return _this;
    }

    FormDemo.prototype.validate = function validate() {
        this.inputs.forEach(function (input) {
            input.validate();
        });
    };

    FormDemo.prototype.getValue = function getValue() {
        var value = this.inputs.map(function (input) {
            return input.getFormValue();
        });

        return value;
    };

    FormDemo.prototype.render = function render() {
        var inputProps = { onInput: this.handleInputChange, ref: this.refInput };
        return _react2.default.createElement(
            _Form2.default,
            null,
            _react2.default.createElement(
                _FormGroup2.default,
                { label: "用户名" },
                _react2.default.createElement(_ValidateInput.ValidateTextBox, _extends({
                    name: "account",
                    placeholder: "输入用户名",
                    value: this.state.value.account,
                    rules: { required: true, message: "请输入用户名" }
                }, inputProps))
            ),
            _react2.default.createElement(
                _FormGroup2.default,
                { label: "姓名" },
                _react2.default.createElement(_ValidateInput.ValidateTextBox, _extends({
                    name: "name",
                    placeholder: "输入姓名",
                    value: this.state.value.name,
                    rules: { required: true, message: "请输入姓名" }
                }, inputProps))
            ),
            _react2.default.createElement(
                _Button2.default,
                { onClick: this.handleSubmit },
                "\u63D0\u4EA4"
            ),
            _react2.default.createElement(
                _Button2.default,
                { onClick: this.handleReset },
                "\u91CD\u7F6E"
            ),
            _react2.default.createElement(
                "p",
                null,
                JSON.stringify(this.state.value)
            ),
            _react2.default.createElement(
                "p",
                null,
                "valid: ",
                JSON.stringify(this.state.valid)
            )
        );
    };

    return FormDemo;
}(_react.Component);

exports.default = FormDemo;
module.exports = exports["default"];