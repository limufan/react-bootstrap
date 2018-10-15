"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _api = require("../../api");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = _.FormInput.Form,
    NumberTextBox = _.FormInput.NumberTextBox,
    DatePicker = _.FormInput.DatePicker,
    DateTimePicker = _.FormInput.DateTimePicker,
    DateRange = _.FormInput.DateRange,
    CheckBox = _.FormInput.CheckBox,
    CheckBoxGroup = _.FormInput.CheckBoxGroup,
    Select = _.FormInput.Select,
    Textarea = _.FormInput.Textarea,
    Radio = _.FormInput.Radio,
    AutoComplete = _.FormInput.AutoComplete;

var DemoForm = function (_React$Component) {
    _inherits(DemoForm, _React$Component);

    function DemoForm(props) {
        _classCallCheck(this, DemoForm);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleFormChange = function (args, event) {
            _this.setState({ value: args.value });
            _this.setState({ valid: args.valid });
            if (_this.props.onChange) {
                _this.props.onChange(args, event);
            }
        };

        _this.addCustomer = function () {
            _this._customerTable.add({ name: "sdfsd" });
        };

        _this.renderTableAction = function (args, cell) {
            var row = cell.getRow();
            return _react2.default.createElement(
                _.Button,
                { type: _.Button.type.link, onClick: function onClick() {
                        return row.remove();
                    } },
                "\u5220\u9664"
            );
        };

        _this.validateTable = function (customers) {
            if (customers) {
                var invalidCustomer = customers.find(function (customer) {
                    return !customer.name;
                });
                if (invalidCustomer) {
                    return {
                        valid: false,
                        message: "请填写客户名称"
                    };
                }
            }

            return {
                valid: true
            };
        };

        _this.state = {
            value: {},
            valid: false
        };
        _this._kuaidiApi = new _api.KuaidiApi();
        return _this;
    }

    DemoForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    DemoForm.prototype.validate = function validate() {
        return this._form.validate();
    };

    DemoForm.prototype.getValue = function getValue() {
        return this._form.getValue();
    };

    DemoForm.prototype.render = function render() {
        var _this2 = this;

        var value = this.state.value;
        return _react2.default.createElement(
            Form,
            { ref: function ref(el) {
                    return _this2._form = el;
                }, value: value, onChange: this.handleFormChange },
            _react2.default.createElement(_.FormTitle, { title: "\u57FA\u7840\u4FE1\u606F" }),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u65E5\u671F", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(DatePicker, { name: "date", value: value.date, rules: { required: true, message: "请选择日期" } })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "\u65E5\u671F\u65F6\u95F4", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(DateTimePicker, { name: "dateTime", value: value.dateTime, rules: { required: true, message: "请选择日期" } })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u65E5\u671F\u8303\u56F4", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(DateRange, { name: "dateRange", value: value.dateRange, rules: { required: true, message: "请选择日期" } })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "\u9762\u79EF\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(
                            NumberTextBox,
                            { name: "area", value: value.area, type: "float", rules: { required: true, message: "请输入面积" } },
                            _react2.default.createElement(
                                "font",
                                { "class": "from_item_input_span" },
                                "m",
                                _react2.default.createElement(
                                    "sup",
                                    null,
                                    "2"
                                )
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u7528\u6237\u540D\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(_.FormInput.TextBox, { name: "userName", value: value.userName, rules: { required: true, message: "请输入用户名" } })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "\u5BC6\u7801\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(_.FormInput.TextBox, { name: "password", value: value.password, type: "password", rules: { required: true, message: "请输入密码" } })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u5E74\u9F84\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(NumberTextBox, { name: "age", value: value.age, rules: [{ required: true, message: "请输入年龄" }, { min: 10, max: 100, message: "请输入10到100的年龄" }] })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "\u9009\u62E9\u9879\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(CheckBox, { name: "checkbox", value: value.checkbox, text: "\u9009\u9879", type: "password", rules: { required: true, message: "请选择checkbox" } })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u4E0B\u62C9\u9009\u9879\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(Select, { name: "select", value: value.select, rules: { required: true, message: "请选择" },
                            items: [{ text: "请选择", value: null }, { text: "普通客户", value: "1711201624489035" }, { text: "铂金客户", value: "1711201624487035" }, { text: "黄金客户", value: "171127624489035" }, { text: "黄金客户1", value: "1711276244890351" }, { text: "黄金客户2", value: "1711276244890352" }] })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "\u5546\u54C1\u6807\u7B7E\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(CheckBoxGroup, { name: "checkBoxGroup", value: value.checkBoxGroup, rules: { required: true, message: "必选项" },
                            items: [{ text: "新品上架", value: "111" }, { text: "热卖商品", value: "222" }] })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "Radio\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(Radio, { name: "radio", value: value.radio, rules: { required: true, message: "必选项" },
                            items: [{ text: "普通客户", value: "111" }, { text: "铂金客户", value: "222" }] })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { noGutters: true },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    _react2.default.createElement(_.FormLabel, { title: "AutoComplete\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(AutoComplete, { name: "autoComplete", value: value.autoComplete, rules: { required: true, message: "必选项" },
                            getItems: function getItems(keyword, callback) {
                                return _this2._kuaidiApi.getWuliuGongsiAutoComplateItems(keyword, callback);
                            } })
                    )
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, offset: 1 },
                    _react2.default.createElement(_.FormLabel, { title: "\u5907\u6CE8\uFF1A", required: true })
                ),
                _react2.default.createElement(
                    _.Col,
                    { span: 3 },
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(Textarea, { name: "remark", value: value.remark })
                    )
                )
            ),
            _react2.default.createElement(
                _.Row,
                { label: "Table" },
                _react2.default.createElement(
                    _.Col,
                    null,
                    _react2.default.createElement(
                        _.FormControl,
                        null,
                        _react2.default.createElement(
                            _.FormInput.Table,
                            { refInput: function refInput(t) {
                                    return _this2._customerTable = t;
                                },
                                name: "customers",
                                minWidth: "800px",
                                showScroll: false,
                                columns: [{ title: "", width: "100px", render: this.renderTableAction }, { title: "序号", width: "70px", type: _.Table.cellType.number }, { title: "客户名称", field: "name", editor: _react2.default.createElement(_.FormInput.TextBox, { rules: { required: true, message: "必选项" }, popupValidFeedback: true }) }, { title: "所属业务员" }, { title: "联系人" }],
                                value: value.customers,
                                rules: { required: true, message: "必选项" },
                                validate: this.validateTable
                            },
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement("td", { colSpan: 2 }),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        _.Button,
                                        { type: _.Button.type.link, onClick: this.addCustomer },
                                        "\u6DFB\u52A0"
                                    )
                                ),
                                _react2.default.createElement("td", { colSpan: 2 })
                            )
                        )
                    )
                )
            )
        );
    };

    return DemoForm;
}(_react2.default.Component);

exports.default = DemoForm;
module.exports = exports["default"];