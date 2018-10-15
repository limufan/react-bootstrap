"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (_temp = _class = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this._value = props.value;
        if (!_this._value) {
            _this._value = {};
        }
        _this._inputs = [];
        return _this;
    }

    Form.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this._value = props.value || {};
        }
    };

    Form.prototype.getChildContext = function getChildContext() {
        return { form: this };
    };

    Form.prototype.render = function render() {
        return _react2.default.createElement(
            "form",
            { style: this.props.style, className: "ywpui_form" },
            this.props.children
        );
    };

    Form.prototype.addInput = function addInput(input) {
        if (!this._inputs.includes(input)) {
            this._inputs.push(input);
        }
    };

    Form.prototype.removeInput = function removeInput(_removeInput) {
        this._inputs = this._inputs.filter(function (input) {
            return input !== _removeInput;
        });
    };

    Form.prototype.validate = function validate() {
        var valid = true;
        this._inputs.forEach(function (input) {
            var result = input.validate();
            if (!result.valid) {
                valid = false;
            }
        });

        return valid;
    };

    Form.prototype.reset = function reset() {
        this._inputs.forEach(function (input) {
            input.reset();
        });
    };

    Form.prototype.getValue = function getValue() {
        var value = {};
        this._inputs.forEach(function (input) {
            var inputName = input.getName();
            value[inputName] = input.getValue();
        });
        value = JSON.parse(JSON.stringify(value));
        return value;
    };

    Form.prototype.setValue = function setValue(args) {
        this._inputs.forEach(function (input) {
            var inputName = input.getName();
            if (input.setValue) {
                input.setValue(args[inputName]);
            }
        });
    };

    Form.prototype.change = function change(args) {
        this._value[args.name] = args.value;
    };

    Form.prototype.triggerOnChange = function triggerOnChange(args, sender) {
        this.change(args);
        if (this.props.onChange) {
            var formChangeArgs = {
                value: this.cloneValue(),
                input: args
            };
            this.props.onChange(formChangeArgs, sender);
        }
    };

    Form.prototype.cloneValue = function cloneValue() {
        return JSON.parse(JSON.stringify(this._value));
    };

    return Form;
}(_react2.default.Component), _class.childContextTypes = {
    form: _propTypes2.default.any
}, _temp);
exports.default = Form;
module.exports = exports["default"];