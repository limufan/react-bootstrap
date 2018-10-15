"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnSorter = (_temp = _class = function (_React$Component) {
    _inherits(ColumnSorter, _React$Component);

    function ColumnSorter(props) {
        _classCallCheck(this, ColumnSorter);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function (event) {
            _this.triggerOnSort();
            event.stopPropagation();
        };

        _this.state = {
            active: props.active
        };
        return _this;
    }

    ColumnSorter.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({ active: props.active });
    };

    ColumnSorter.prototype.render = function render() {
        var type = this.props.type;

        if (type === ColumnSorter.type.desc) {
            return this.renderDescSorter();
        } else {
            return this.renderAscSorter();
        }
    };

    ColumnSorter.prototype.renderDescSorter = function renderDescSorter() {
        var column = this.props.column;

        var className = "ywpui_table_column_sorter_down";
        if (column.sortOrder === ColumnSorter.type.desc) {
            className += " active";
        }
        return _react2.default.createElement(
            "div",
            { className: className, onClick: this.handleClick },
            _react2.default.createElement(_.Icon, { type: _.Icon.type.arrowDownSmall, className: "ywpui_table_column_sorter_icon" })
        );
    };

    ColumnSorter.prototype.renderAscSorter = function renderAscSorter() {
        var column = this.props.column;

        var className = "ywpui_table_column_sorter_up";
        if (column.sortOrder === ColumnSorter.type.asc) {
            className += " active";
        }
        return _react2.default.createElement(
            "div",
            { className: className, onClick: this.handleClick },
            _react2.default.createElement(_.Icon, { type: _.Icon.type.arrowUpSmall, className: "ywpui_table_column_sorter_icon" })
        );
    };

    ColumnSorter.prototype.triggerOnSort = function triggerOnSort() {
        if (this.props.onSort) {
            var _props = this.props,
                type = _props.type,
                column = _props.column;

            var args = {
                sortOrder: type,
                field: column.field,
                column: column
            };
            this.props.onSort(args, this);
        }
    };

    return ColumnSorter;
}(_react2.default.Component), _class.type = {
    desc: "desc",
    asc: "asc"
}, _class.defaultProps = {
    type: ColumnSorter.type.asc
}, _temp);
exports.default = ColumnSorter;
module.exports = exports["default"];