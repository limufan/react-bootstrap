"use strict";

exports.__esModule = true;
exports.Upload = exports.TreeSelect = exports.Table = exports.AutoCompleteSelect = exports.AutoComplete = exports.Select = exports.NumberTextBox = exports.DateTimePicker = exports.CheckBoxGroup = exports.Radio = exports.SerachTextBox = exports.Textarea = exports.CheckBox = exports.DateRange = exports.DatePicker = exports.TextBox = exports.Form = undefined;

var _FormInput;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createFormInput = createFormInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _TextBox = require("./TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

var _index = require("./datePicker/index");

var _CheckBox = require("./CheckBox");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Textarea = require("./Textarea");

var _Textarea2 = _interopRequireDefault(_Textarea);

var _SerachTextBox = require("./SerachTextBox");

var _SerachTextBox2 = _interopRequireDefault(_SerachTextBox);

var _Radio = require("./Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _CheckBoxGroup = require("./CheckBoxGroup");

var _CheckBoxGroup2 = _interopRequireDefault(_CheckBoxGroup);

var _NumberTextBox = require("./NumberTextBox");

var _NumberTextBox2 = _interopRequireDefault(_NumberTextBox);

var _Select = require("./select/Select");

var _Select2 = _interopRequireDefault(_Select);

var _AutoComplete = require("./autoComplete/AutoComplete");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _AutoCompleteSelect = require("./autoComplete/AutoCompleteSelect");

var _AutoCompleteSelect2 = _interopRequireDefault(_AutoCompleteSelect);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _TreeSelect = require("./treeSelect/TreeSelect");

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _Upload = require("./upload/Upload");

var _Upload2 = _interopRequireDefault(_Upload);

var _ValidFeedback = require("./ValidFeedback");

var _ValidFeedback2 = _interopRequireDefault(_ValidFeedback);

var _Popover = require("./Popover");

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createFormInput(Input) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props, context) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

            _this.handleInputChange = function (args, sender) {
                args.name = _this.props.name;
                var validateResult = _this.validateValue(args.value);
                _this.setState({ valid: validateResult.valid });
                _this.setState({ message: validateResult.message });

                if (_this.props.onChange) {
                    Object.assign(args, validateResult);
                    _this.props.onChange(args, sender);
                }

                _this.setState({ value: args.value }, function () {
                    _this.triggerFormChange(args, sender);
                });
            };

            _this.refInput = function (input) {
                _this.input = input;
                if (_this.props.refInput) {
                    _this.props.refInput(input);
                }
            };

            _this.handleFocus = function (event) {
                _this.setState({ focused: true });
                if (_this.props.onFocus) {
                    _this.props.onFocus(event);
                }
            };

            _this.handleBlur = function (event) {
                _this.setState({ focused: false });
                if (_this.props.onBlur) {
                    _this.props.onBlur(event);
                }
            };

            var value = props.value;
            if (value === undefined || value === null) {
                value = props.defaultValue;
            }

            if (context && context.form) {
                _this._form = context.form;

                if (props.name) {
                    _this._form.addInput(_this);
                    _this.changeFormValue(value);
                }
            }

            _this.state = {
                message: "",
                valid: props.valid,
                value: value
            };

            return _this;
        }

        _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
            if (props.value !== undefined) {
                this.setState({ value: props.value });
                this.changeFormValue(props.value);
            }
        };

        _class.prototype.render = function render() {
            var _this2 = this;

            var _props = this.props,
                popupValidFeedback = _props.popupValidFeedback,
                visibleValidFeedback = _props.visibleValidFeedback;
            var _state = this.state,
                value = _state.value,
                valid = _state.valid,
                focused = _state.focused,
                message = _state.message;


            var validFeedback = null;
            if (popupValidFeedback) {
                if (focused) {
                    validFeedback = _react2.default.createElement(
                        _Popover2.default,
                        { placement: _Popover2.default.placement.bottom, target: function target() {
                                return _reactDom2.default.findDOMNode(_this2.input);
                            } },
                        _react2.default.createElement(
                            "span",
                            { style: { color: "#f36f5d" } },
                            message
                        )
                    );
                }
            } else {
                validFeedback = _react2.default.createElement(_ValidFeedback2.default, { message: message });
            }

            var style = {
                display: "inline",
                position: "relative"
            };
            Object.assign(style, this.props.style);
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(Input, _extends({
                    className: valid ? "" : "error",
                    ref: this.refInput
                }, this.props, {
                    value: value,
                    onChange: this.handleInputChange,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                })),
                valid ? null : validFeedback
            );
        };

        _class.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this._form) {
                this._form.removeInput(this);
            }
        };

        _class.prototype.triggerFormChange = function triggerFormChange(args, sender) {
            if (this.props.name && this._form) {
                this._form.triggerOnChange(args, sender);
            }
        };

        _class.prototype.changeFormValue = function changeFormValue(value) {
            var args = { name: this.props.name, value: value };

            if (this.props.name && this._form) {
                this._form.change(args, this);
            }
        };

        _class.prototype.validate = function validate() {
            var value = this.getValue();
            var validateResult = this.validateValue(value);

            this.setState({ valid: validateResult.valid });
            this.setState({ message: validateResult.message });

            return validateResult;
        };

        _class.prototype.validateValue = function validateValue(value) {
            var validateResult = { valid: true, message: null };
            if (Array.isArray(this.props.rules)) {
                validateResult = [];
                for (var _iterator = this.props.rules, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                    var _ref;

                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }

                    var rule = _ref;

                    validateResult.valid = this.validateRule(rule, value);
                    if (!validateResult.valid) {
                        validateResult.message = rule.message;
                        break;
                    }
                }

                if (!validateResult.valid) {
                    return validateResult;
                }
            } else if (this.props.rules) {
                var _rule = this.props.rules;
                validateResult.valid = this.validateRule(_rule, value);
                if (!validateResult.valid) {
                    validateResult.message = _rule.message;
                }

                if (!validateResult.valid) {
                    return validateResult;
                }
            }

            if (this.input && this.input.validate) {
                validateResult = this.input.validate();

                if (!validateResult.valid) {
                    return validateResult;
                }
            }

            if (this.props.validate) {
                validateResult = this.props.validate(value, this);

                if (!validateResult.valid) {
                    return validateResult;
                }
            }

            return validateResult;
        };

        _class.prototype.validateRule = function validateRule(rule, value) {
            var valid = true;
            if (rule.required) {
                valid = this.requiredValidate(value);
            }
            if (rule.max) {
                if (value > rule.max) {
                    valid = false;
                }
            }
            if (rule.min) {
                if (value < rule.min) {
                    valid = false;
                }
            }
            if (rule.checkPhone) {
                valid = this.phoneValidate(value);
            }
            if (rule.maxLength) {
                if (value.length > rule.length) {
                    valid = false;
                }
            }
            if (rule.validate) {
                if (!rule.validate(value)) {
                    valid = false;
                }
            }

            return valid;
        };

        _class.prototype.requiredValidate = function requiredValidate(value) {
            if (Array.isArray(value) && value.length === 0) {
                return false;
            } else if (value === null || value === undefined || value === "") {
                return false;
            } else {
                return true;
            }
        };

        _class.prototype.phoneValidate = function phoneValidate(value) {
            return (/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)
            );
        };

        _class.prototype.getInput = function getInput() {
            return this.input;
        };

        _class.prototype.getName = function getName() {
            return this.props.name;
        };

        _class.prototype.getValue = function getValue() {
            var value = this.state.value;

            if (this.input && this.input.getValue) {
                value = this.input.getValue();
            }

            if (value === undefined) {
                value = null;
            }

            return value;
        };

        _class.prototype.setValue = function setValue(value) {
            if (value === undefined) {
                return;
            }
            if (this.input.setValue) {
                this.input.setValue(value);
            }
            this.setState({ value: value });
            this.changeFormValue(value);
        };

        _class.prototype.getFormValue = function getFormValue() {
            var value = {};
            var name = this.getName();
            value[name] = this.getValue();

            return value;
        };

        _class.prototype.reset = function reset() {
            var value = this.props.defaultValue;
            if (value === undefined) {
                value = null;
            }
            this.setState({ value: value });
            this.changeFormValue(value);
        };

        _class.prototype.focus = function focus() {
            if (this.input.focus) {
                this.input.focus();
            }
        };

        return _class;
    }(_react2.default.Component), _class.defaultProps = {
        valid: true,
        rules: null
    }, _class.contextTypes = {
        form: _propTypes2.default.any
    }, _temp;
}

var Form = exports.Form = _Form2.default;
var TextBox = exports.TextBox = createFormInput(_TextBox2.default);
var DatePicker = exports.DatePicker = createFormInput(_index.DatePicker);
var DateRange = exports.DateRange = createFormInput(_index.DateRange);
var CheckBox = exports.CheckBox = createFormInput(_CheckBox2.default);
var Textarea = exports.Textarea = createFormInput(_Textarea2.default);
var SerachTextBox = exports.SerachTextBox = createFormInput(_SerachTextBox2.default);
var Radio = exports.Radio = createFormInput(_Radio2.default);
var CheckBoxGroup = exports.CheckBoxGroup = createFormInput(_CheckBoxGroup2.default);
var DateTimePicker = exports.DateTimePicker = createFormInput(_index.DateTimePicker);
var NumberTextBox = exports.NumberTextBox = createFormInput(_NumberTextBox2.default);
var Select = exports.Select = createFormInput(_Select2.default);
var AutoComplete = exports.AutoComplete = createFormInput(_AutoComplete2.default);
var AutoCompleteSelect = exports.AutoCompleteSelect = createFormInput(_AutoCompleteSelect2.default);
var Table = exports.Table = createFormInput(_table2.default);
var TreeSelect = exports.TreeSelect = createFormInput(_TreeSelect2.default);
var Upload = exports.Upload = createFormInput(_Upload2.default);

var FormInput = (_FormInput = {
    Form: Form,
    TextBox: TextBox,
    DatePicker: DatePicker,
    DateRange: DateRange,
    CheckBox: CheckBox,
    Textarea: Textarea
}, _FormInput["Textarea"] = Textarea, _FormInput.SerachTextBox = SerachTextBox, _FormInput.Radio = Radio, _FormInput.CheckBoxGroup = CheckBoxGroup, _FormInput.DateTimePicker = DateTimePicker, _FormInput.NumberTextBox = NumberTextBox, _FormInput.createFormInput = createFormInput, _FormInput.Select = Select, _FormInput.AutoComplete = AutoComplete, _FormInput.AutoCompleteSelect = AutoCompleteSelect, _FormInput.Table = Table, _FormInput.TreeSelect = TreeSelect, _FormInput.Upload = Upload, _FormInput);

exports.default = FormInput;