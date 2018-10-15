"use strict";

exports.__esModule = true;
exports.ValidateTextBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextBox = require("./TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_NAME = {
    FORM_GROUP_ROW: "form-group row",
    INVALID_FEEDBACK: "invalid-feedback",
    FORM_LABEL: "col-sm-2 col-form-label",
    COL_SM: "col-sm-"
};

function validateInput(Input) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

            _this.handleInputChange = function (event) {
                var value = event.target.value;
                _this.setState({ value: value });
                var validateResult = _this.validateValue(value);
                if (_this.props.onChange) {
                    var args = {
                        name: _this.props.name,
                        value: value
                    };
                    Object.assign(args, validateResult);
                    _this.props.onChange(event, args);
                }
            };

            _this.state = {
                message: "",
                valid: props.valid,
                value: props.value
            };

            return _this;
        }

        _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
            this.setState({ value: props.value });
        };

        _class.prototype.render = function render() {
            var _this2 = this;

            var message = null;
            if (!this.state.valid) {
                message = _react2.default.createElement(
                    "div",
                    { className: CLASS_NAME.INVALID_FEEDBACK },
                    this.state.message
                );
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(Input, _extends({ ref: function ref(input) {
                        return _this2.input = input;
                    } }, this.props, { valid: this.state.valid, onChange: this.handleInputChange })),
                message
            );
        };

        _class.prototype.validate = function validate() {
            return this.validateValue(this.state.value);
        };

        _class.prototype.validateValue = function validateValue(value) {
            var validateResult = { valid: true, message: null };
            if (Array.isArray(this.props.rules)) {
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
            } else {
                var _rule = this.props.rules;
                validateResult.valid = this.validateRule(_rule, value);
                if (!validateResult.valid) {
                    validateResult.message = _rule.message;
                }
            }

            this.setState({ message: validateResult.message });
            this.setState({ valid: validateResult.valid });

            return validateResult;
        };

        _class.prototype.validateRule = function validateRule(rule, value) {
            var valid = true;
            if (rule.required) {
                valid = this.requiredValidate(value);
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

        _class.prototype.getName = function getName() {
            return this.props.name;
        };

        _class.prototype.getValue = function getValue() {
            if (this.input.getValue) {
                return this.input.getValue();
            }
            return this.state.value;
        };

        _class.prototype.getFormValue = function getFormValue() {
            var _ref2;

            return _ref2 = {}, _ref2[this.getName()] = this.getValue(), _ref2;
        };

        return _class;
    }(_react2.default.Component), _class.defaultProps = {
        valid: true,
        value: null
    }, _temp;
}

var ValidateTextBox = exports.ValidateTextBox = validateInput(_TextBox2.default);