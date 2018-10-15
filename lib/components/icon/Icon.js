"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2, _class$type;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../css/icon.css");

require("./css/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (_temp2 = _class = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        var _temp, _this, _ret;

        _classCallCheck(this, Icon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Icon.prototype.render = function render() {
        var iconClassName = this.getIconClassName();
        var className = "ywpui_icon";
        if (iconClassName) {
            className += " " + iconClassName;
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return _react2.default.createElement(
            "i",
            { className: className, style: this.props.style, onClick: this.handleClick },
            this.props.children
        );
    };

    Icon.prototype.getIconClassName = function getIconClassName() {
        switch (this.props.type) {
            case Icon.type.shenhe:
                return "iconfont icon-shenhe_line";
            case Icon.type.quxiao:
                return "iconfont icon-quxiaodingdan";
            case Icon.type.bianji:
                return "iconfont icon-bianji";
            case Icon.type.xiugai:
                return "icon_xiugai";
            case Icon.type.dayin:
                return "icon_dayin";
            case Icon.type.daochu:
                return "icon_daochu";
            case Icon.type.zuofei:
                return "icon_zuofei";
            case Icon.type.selected:
                return "ywpui_icon_selected";
            case Icon.type.dropdown:
                return "ywpui_icon_dropdown";
            case Icon.type.search:
                return "ywpui_icon_search";
            case Icon.type.date:
                return "ywpui_icon_date";
            case Icon.type.shanchu:
                return "icon_shanchu";
            case Icon.type.jiantouxia:
                return "ywpui_icon_jiantou_xia";
            case Icon.type.arrowDown:
                return "ywpui_iconfont icon_arrow_down";
            case Icon.type.arrowUp:
                return "ywpui_iconfont icon_arrow_up";
            case Icon.type.arrowDownSimplest:
                return "ywpui_iconfont icon_arrow_down_simplest";
            case Icon.type.arrowUpSimplest:
                return "ywpui_iconfont icon_arrow_up_simplest";
            case Icon.type.arrowDownSmall:
                return "ywpui_iconfont icon_arrow_down_small";
            case Icon.type.arrowUpSmall:
                return "ywpui_iconfont icon_arrow_up_small";
            case Icon.type.add:
                return "ywpui_iconfont icon_add";
            case Icon.type.fahuo:
                return "ywpui_iconfont icon_fahuo";
            case Icon.type.shenhe:
                return "ywpui_iconfont icon_shenhe";
            case Icon.type.details:
                return "ywpui_iconfont icon_details";
            case Icon.type.synch:
                return "ywpui_iconfont icon_synch";
            case Icon.type.message:
                return "ywpui_iconfont icon_message";
            case Icon.type.treeCollapse:
                return "ywpui_iconfont icon_tree_collapse";
            case Icon.type.treeExpand:
                return "ywpui_iconfont icon_tree_expand";
            case Icon.type.moveWarehousePosition:
                return "ywpui_iconfont icon_move_warehouse_position";
            case Icon.type.moveDown:
                return "ywpui_iconfont icon_move_down";
            case Icon.type.moveDownmost:
                return "ywpui_iconfont icon_move_downmost";
            case Icon.type.moveUp:
                return "ywpui_iconfont icon_move_up";
            case Icon.type.moveUppermost:
                return "ywpui_iconfont icon_move_uppermost";
            case Icon.type.on:
                return "ywpui_iconfont icon_on";
            case Icon.type.off:
                return "ywpui_iconfont icon_off";
            case Icon.type.close:
                return "ywpui_iconfont icon_close";
            case Icon.type.account:
                return "ywpui_iconfont icon_account";
            case Icon.type.bill:
                return "ywpui_iconfont icon_bill";
            default:
                return "";
        }

        return "";
    };

    return Icon;
}(_react2.default.Component), _class.type = (_class$type = {
    shenhe: "shenhe",
    quxiao: "quxiao",
    bianji: "bianji",
    xiugai: "xiugai",
    dayin: "dayin",
    daochu: "daochu",
    zuofei: "zuofei",
    selected: "selected",
    dropdown: "dropdown",
    search: "search",
    date: "date",
    shanchu: "shanchu",
    jiantouxia: "jiantouxia",
    arrowDownSimplest: "arrowDownSimplest",
    arrowUpSimplest: "arrowUpSimplest",
    arrowDown: "arrowDown",
    arrowUp: "arrowUp",
    arrowDownSmall: "arrowDownSmall",
    arrowUpSmall: "arrowUpSmall",
    add: "add",
    fahuo: "fahuo"
}, _class$type["shenhe"] = "shenhe", _class$type.details = "details", _class$type.synch = "synch", _class$type.message = "message", _class$type.treeCollapse = "treeCollapse", _class$type.treeExpand = "treeExpand", _class$type.moveWarehousePosition = "moveWarehousePosition", _class$type.moveDown = "moveDown", _class$type.moveUp = "moveUp", _class$type.moveDownmost = "moveDownmost", _class$type.moveUppermost = "moveUppermost", _class$type.on = "on", _class$type.off = "off", _class$type.close = "close", _class$type.account = "account", _class$type.bill = "bill", _class$type), _temp2);
exports.default = Icon;
module.exports = exports["default"];