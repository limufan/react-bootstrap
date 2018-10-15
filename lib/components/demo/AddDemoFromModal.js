"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

var _DemoForm = require("./DemoForm");

var _DemoForm2 = _interopRequireDefault(_DemoForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBox = _.FormInput.TextBox,
    DatePicker = _.FormInput.DatePicker,
    DateRange = _.FormInput.DateRange,
    CheckBox = _.FormInput.CheckBox,
    Select = _.FormInput.Select,
    Textarea = _.FormInput.Textarea,
    Radio = _.FormInput.Radio,
    Form = _.FormInput.Form;

var AddDemoFromModal = function (_React$Component) {
    _inherits(AddDemoFromModal, _React$Component);

    function AddDemoFromModal(props) {
        _classCallCheck(this, AddDemoFromModal);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSubmit = function (event) {
            _this.hide();
            _.messager.success("保存成功");
        };

        _this.handleCancel = function (event) {
            _this.hide();
        };

        _this.state = {
            show: props.show
        };
        return _this;
    }

    AddDemoFromModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.show !== undefined) {
            this.setState({ show: props.show });
        }
    };

    AddDemoFromModal.prototype.render = function render() {
        var _this2 = this;

        return _react2.default.createElement(
            _.Modal,
            { ref: function ref(modal) {
                    return _this2._modal = modal;
                }, show: this.state.show, title: "\u6DFB\u52A0" },
            _react2.default.createElement(
                _.Scroll,
                { height: "250px" },
                _react2.default.createElement(
                    Form,
                    null,
                    _react2.default.createElement(
                        _.FormItem,
                        { style: { width: "100%" }, label: "\u7528\u6237\u540D\uFF1A", required: true },
                        _react2.default.createElement(TextBox, { name: "userName", rules: { required: true, message: "请输入用户名" } })
                    ),
                    _react2.default.createElement(
                        _.FormItem,
                        { style: { width: "100%" }, label: "\u65E5\u671F", required: true },
                        _react2.default.createElement(DatePicker, { name: "date", rules: { required: true, message: "请选择日期" } })
                    ),
                    _react2.default.createElement(
                        _.FormItem,
                        { style: { width: "100%" }, label: "\u9009\u62E9\u9879\uFF1A", required: true },
                        _react2.default.createElement(CheckBox, { name: "checkbox", label: "\u9009\u9879", type: "password", rules: { required: true, message: "请选择checkbox" } })
                    ),
                    _react2.default.createElement(
                        _.FormItem,
                        { style: { width: "100%" }, label: "\u4E0B\u62C9\u9009\u9879", required: true },
                        _react2.default.createElement(Select, { name: "select", rules: { required: true, message: "请选择" },
                            items: [{ text: "请选择", value: null }, { text: "普通客户", value: "1711201624489035" }, { text: "铂金客户", value: "1711201624487035" }, { text: "黄金客户", value: "171127624489035" }] })
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { style: { textAlign: "center" } },
                _react2.default.createElement(
                    _.Button,
                    { style: { marginRight: "5px" }, type: "primary", onClick: this.handleSubmit },
                    "\u4FDD\u5B58"
                ),
                _react2.default.createElement(
                    _.Button,
                    { type: "default", onClick: this.handleCancel },
                    "\u53D6\u6D88"
                )
            )
        );
    };

    AddDemoFromModal.prototype.show = function show() {
        this._modal.show();
    };

    AddDemoFromModal.prototype.hide = function hide() {
        this._modal.hide();
    };

    return AddDemoFromModal;
}(_react2.default.Component);

exports.default = AddDemoFromModal;
module.exports = exports["default"];