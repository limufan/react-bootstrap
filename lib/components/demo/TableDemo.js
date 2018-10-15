"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = require("../");

var _AddDemoFromModal = require("./AddDemoFromModal");

var _AddDemoFromModal2 = _interopRequireDefault(_AddDemoFromModal);

var _api = require("../../api");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = _.FormInput.Form,
    CheckBox = _.FormInput.CheckBox,
    Select = _.FormInput.Select,
    SerachTextBox = _.FormInput.SerachTextBox;


window.jsonpCallback = function () {
    alert(2);
};

var TableDemo = (_temp = _class = function (_React$Component) {
    _inherits(TableDemo, _React$Component);

    function TableDemo(props) {
        _classCallCheck(this, TableDemo);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.hanldeSerachFormChange = function (args) {
            var searchInfo = _this.state.searchInfo;
            searchInfo.pageIndex = 0;
            searchInfo.pageSize = _this.props.pageSize;
            Object.assign(searchInfo, args.value);

            _this.setState({ searchInfo: searchInfo });
        };

        _this.handleSearchTextBoxSearch = function (args) {
            _this.setState({ statusText: "开始搜索...." });
        };

        _this.handlePagerChange = function (args) {
            var searchInfo = _this.state.searchInfo;
            Object.assign(searchInfo, args);

            _this.setState({ searchInfo: searchInfo });
            _this.getData();
        };

        _this.handleBtnOpenModalClick = function (event) {
            _this._addModal.show();
        };

        _this.handleBtnDeleteClick = function () {
            _.dialog.confirm({
                title: "提示",
                content: "确定要删除?",
                onOk: function onOk() {
                    alert("ok");
                },
                onCancel: function onCancel() {
                    alert("cancel");
                }
            });
        };

        _this.tableNameRender = function (args, cell) {
            return _react2.default.createElement(
                "a",
                { href: "#" },
                args.value
            );
        };

        _this.state = {
            searchInfo: {},
            statusText: null,
            list: []
        };

        _this._request = new _api.Request();
        _this._purchaseApi = new _api.PurchaseApi();
        return _this;
    }

    TableDemo.prototype.componentDidMount = function componentDidMount() {
        this.getData();
    };

    TableDemo.prototype.getData = function getData() {
        var _this2 = this;

        this._request.post("/api/demo/table", {}, function (model) {
            _this2.setState({ list: model.data });
        });
    };

    TableDemo.prototype.render = function render() {
        var _this3 = this;

        return _react2.default.createElement(
            "div",
            { style: { paddingTop: "20px" } },
            _react2.default.createElement(
                "p",
                null,
                JSON.stringify(this.state.searchInfo)
            ),
            _react2.default.createElement(
                _.Toolbar,
                { ref: function ref(tb) {
                        return _this3._toolbar = tb;
                    } },
                _react2.default.createElement(
                    Form,
                    { onChange: this.hanldeSerachFormChange },
                    _react2.default.createElement(
                        _.Row,
                        null,
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(Select, { name: "yewuyuan", style: { width: "150px" },
                                items: [{ text: "所属业务员", value: 0 }, { text: "普通客户", value: 1 }, { text: "铂金客户", value: 2 }, { text: "黄金客户", value: 3 }]
                            })
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(CheckBox, { name: "checkbox", label: "\u5305\u542B..." })
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(SerachTextBox, { name: "keyword", onSearch: this.handleSearchTextBoxSearch })
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true, marginLeftAuto: true },
                            _react2.default.createElement(
                                _.LinkButton,
                                { to: "/add" },
                                "\u65B0\u589E"
                            )
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(
                                _.Button,
                                { onClick: this.handleBtnOpenModalClick },
                                "Modal\u65B0\u589E"
                            )
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(
                                _.LinkButton,
                                { to: "/edit" },
                                "\u7F16\u8F91"
                            )
                        ),
                        _react2.default.createElement(
                            _.Col,
                            { auto: true },
                            _react2.default.createElement(
                                _.Button,
                                { onClick: this.handleBtnDeleteClick },
                                "\u5220\u9664"
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_.Table, { singleSelection: true, showScroll: true,
                minWidth: "800px",
                columns: [{ width: "60px", type: _.Table.cellType.selection }, { title: "序号", width: "70px", type: _.Table.cellType.number }, { title: "客户名称", field: "name", width: "220px", render: this.tableNameRender }, { title: "所属业务员", width: "150px" }, { title: "联系人" }, { title: "", width: "70px", fixed: "right" }],
                value: this.state.list
            }),
            _react2.default.createElement(_.Pagination, { pageSize: this.props.pageSize, onChange: this.handlePagerChange }),
            _react2.default.createElement(_AddDemoFromModal2.default, { ref: function ref(modal) {
                    return _this3._addModal = modal;
                } })
        );
    };

    return TableDemo;
}(_react2.default.Component), _class.defaultProps = {
    pageSize: 10
}, _temp);
exports.default = TableDemo;
module.exports = exports["default"];