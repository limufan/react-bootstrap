"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _layout = require("../layout");

var _KeyCode = require("../KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _HeaderRow = require("./HeaderRow");

var _HeaderRow2 = _interopRequireDefault(_HeaderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_temp = _class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props, context) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Header.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            columns = _props.columns,
            tableStyle = _props.tableStyle,
            header = _props.header,
            onSort = _props.onSort;


        var className = "ywpui_table_header";
        return _react2.default.createElement(
            "div",
            { ref: function ref(el) {
                    return _this2._element = el;
                }, className: className, style: this.props.style },
            _react2.default.createElement(
                "table",
                { style: tableStyle },
                this.props.colgroup,
                _react2.default.createElement(
                    "thead",
                    null,
                    header,
                    _react2.default.createElement(_HeaderRow2.default, { columns: columns, onSort: onSort })
                )
            )
        );
    };

    return Header;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Header;
module.exports = exports["default"];