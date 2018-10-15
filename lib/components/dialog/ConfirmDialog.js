"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require("../Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmDialog = (_temp = _class = function (_React$Component) {
    _inherits(ConfirmDialog, _React$Component);

    function ConfirmDialog(props, context) {
        _classCallCheck(this, ConfirmDialog);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleBtnOkClick = function () {
            _this.hide();
            _this.triggerOnOk();
        };

        _this.handleBtnCancelClick = function () {
            _this.hide();
            _this.triggerOnCancel();
        };

        _this.handleModalClose = function () {
            _this.hide();
            _this.triggerOnCancel();
        };

        _this.state = {
            show: props.show
        };
        return _this;
    }

    ConfirmDialog.prototype.componentDidMount = function componentDidMount() {};

    ConfirmDialog.prototype.triggerOnOk = function triggerOnOk() {
        if (this.props.onOk) {
            this.props.onOk();
        }
    };

    ConfirmDialog.prototype.triggerOnCancel = function triggerOnCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    };

    ConfirmDialog.prototype.render = function render() {
        var _props = this.props,
            okButtonText = _props.okButtonText,
            cancelButtonText = _props.cancelButtonText;

        var style = { width: "400px" };
        Object.assign(style, this.props.style);

        var iconClassName = "ywpui_icon_confirm";
        if (this.props.type === "error") {
            iconClassName = "ywpui_icon_error";
        } else if (this.props.type === "success") {
            iconClassName = "ywpui_icon_success";
        }

        return _react2.default.createElement(
            _Modal2.default,
            { title: this.props.title || "提示", show: this.state.show, style: style, onClose: this.handleModalClose },
            _react2.default.createElement(
                "div",
                { style: { textAlign: "center", paddingBottom: "40px", paddingTop: "30px" } },
                _react2.default.createElement("i", { className: iconClassName }),
                this.props.content,
                _react2.default.createElement(
                    "div",
                    null,
                    this.props.children
                )
            ),
            _react2.default.createElement(
                "div",
                { style: { textAlign: "center", marginBottom: "20px" } },
                _react2.default.createElement(
                    _Button2.default,
                    { type: "primary", style: { marginRight: "20px" }, onClick: this.handleBtnOkClick },
                    okButtonText
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: this.handleBtnCancelClick },
                    cancelButtonText
                )
            )
        );
    };

    ConfirmDialog.prototype.show = function show() {
        this.setState({ show: true });
    };

    ConfirmDialog.prototype.hide = function hide() {
        this.setState({ show: false });
        if (this.props.onHide) {
            this.props.onHide();
        }
    };

    return ConfirmDialog;
}(_react2.default.Component), _class.defaultProps = {
    show: false,
    okButtonText: "确认",
    cancelButtonText: "取消"
}, _temp);
exports.default = ConfirmDialog;
module.exports = exports["default"];