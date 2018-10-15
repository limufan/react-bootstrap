"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

exports.getButtonClassName = getButtonClassName;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getButtonClassName(props) {
    var className = ["ywpui_button"];
    switch (props.type) {
        case Button.type.primary:
            className.push('ywpui_btn_primary');
            break;
        case Button.type.light:
            className.push('ywpui_btn_light');
            break;
        case Button.type.warning:
            className.push('ywpui_btn_warning');
            break;
        case Button.type.secondary:
            className.push('ywpui_btn_secondary');
            break;
        case Button.type.text:
            className.push('ywpui_btn_text');
            break;
        case Button.type.print:
            className = ['ywpui_btn_print'];
            break;
        case Button.type.link:
            className.push('ywpui_btn_link');
            break;
        default:
            className.push('ywpui_btn_default');
            break;
    }
    if (props.className) {
        className.push(props.className);
    }

    return className.join(" ");
}

var Button = (_temp = _class = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};
        return _this;
    }

    Button.prototype.render = function render() {
        var _this2 = this;

        var className = getButtonClassName(this.props);
        var disabled = this.state.disabled;

        return _react2.default.createElement(
            "button",
            { ref: function ref(el) {
                    return _this2._element = el;
                }, type: "button", disabled: disabled, className: className, style: this.props.style, onClick: this.props.onClick },
            this.props.children
        );
    };

    Button.prototype.focus = function focus() {
        this._element.focus();
    };

    Button.prototype.setDisabled = function setDisabled(disabled) {
        console.log("disabled:" + disabled);
        this.setState({ disabled: disabled });
    };

    return Button;
}(_react2.default.Component), _class.type = {
    default: "default",
    primary: "primary",
    light: "light",
    warning: "warning",
    secondary: "secondary",
    text: "text",
    print: "print",
    link: "link"
}, _temp);
exports.default = Button;