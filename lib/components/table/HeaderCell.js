"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TableCell = require("./TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _ColumnSorter = require("./ColumnSorter");

var _ColumnSorter2 = _interopRequireDefault(_ColumnSorter);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderCell = (_temp = _class = function (_React$Component) {
    _inherits(HeaderCell, _React$Component);

    function HeaderCell(props, context) {
        _classCallCheck(this, HeaderCell);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSelectiCellChange = function (args) {
            if (args.value) {
                _this.table.selectAll();
            } else {
                _this.table.unselectAll();
            }
        };

        _this.handleClick = function () {
            var column = _this.props.column;

            if (!column || !column.canSort) {
                return;
            }

            if (column.sortOrder === _ColumnSorter2.default.type.desc) {
                _this._ascSorter.triggerOnSort();
            } else {
                _this._descSorter.triggerOnSort();
            }
        };

        _this.row = context.row;
        _this.table = context.table;
        return _this;
    }

    HeaderCell.prototype.render = function render() {
        var _props = this.props,
            column = _props.column,
            colSpan = _props.colSpan,
            rowSpan = _props.rowSpan;

        var className = "ywpui_table_header_cell";
        if (column && column.canSort) {
            className += " canSort";
        }

        return _react2.default.createElement(
            "th",
            { className: className, colSpan: colSpan, rowSpan: rowSpan, onClick: this.handleClick },
            this.renderCell(),
            this.props.children,
            this.renderSorter()
        );
    };

    HeaderCell.prototype.renderCell = function renderCell() {
        var column = this.props.column;

        if (!column) {
            return null;
        }
        var children = column && column.title;

        if (column.type === _TableCell2.default.type.selection) {
            children = this.renderSelectionCell();
        }

        return children;
    };

    HeaderCell.prototype.renderSorter = function renderSorter() {
        var _this2 = this;

        var _props2 = this.props,
            column = _props2.column,
            onSort = _props2.onSort;

        if (!column) {
            return null;
        }
        if (!column.canSort) {
            return null;
        }
        return _react2.default.createElement(
            "div",
            { className: "ywpui_table_column_sorter" },
            _react2.default.createElement(_ColumnSorter2.default, { ref: function ref(s) {
                    return _this2._ascSorter = s;
                }, type: _ColumnSorter2.default.type.asc, onSort: onSort, column: column }),
            _react2.default.createElement(_ColumnSorter2.default, { ref: function ref(s) {
                    return _this2._descSorter = s;
                }, type: _ColumnSorter2.default.type.desc, onSort: onSort, column: column })
        );
    };

    HeaderCell.prototype.renderSelectionCell = function renderSelectionCell() {
        return _react2.default.createElement(_.CheckBox, { onChange: this.handleSelectiCellChange, style: { marginRight: 0 } });
    };

    return HeaderCell;
}(_react2.default.Component), _class.contextTypes = {
    row: _propTypes2.default.any,
    table: _propTypes2.default.any
}, _temp);
exports.default = HeaderCell;
module.exports = exports["default"];