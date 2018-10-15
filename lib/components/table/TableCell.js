'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _layout = require('../layout');

var _KeyCode = require('../KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = (_temp = _class = function (_React$Component) {
    _inherits(TableCell, _React$Component);

    function TableCell(props, context) {
        _classCallCheck(this, TableCell);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSelectiCellChange = function (args) {
            if (args.value) {
                _this.row.select();
            } else {
                _this.row.unselect();
            }
        };

        _this.handleChange = function (args, sender) {
            var _this$props = _this.props,
                column = _this$props.column,
                rowValue = _this$props.rowValue,
                rowIndex = _this$props.rowIndex;

            var cellChangeArgs = {
                column: column,
                value: args.value,
                rowValue: rowValue,
                editor: sender
            };

            if (_this.props.onChange) {
                _this.props.onChange(cellChangeArgs, _this);
            }
            if (column.onChange) {
                column.onChange(cellChangeArgs, _this);
            }
        };

        _this.row = context.row;

        _this.state = {};
        return _this;
    }

    TableCell.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            column = _props.column,
            rowValue = _props.rowValue,
            className = _props.className,
            rowIndex = _props.rowIndex,
            rowSpan = _props.rowSpan,
            colSpan = _props.colSpan;

        var style = {};
        Object.assign(style, this.props.style);
        if (column) {
            Object.assign(style, column.style);
        }
        return _react2.default.createElement(
            'td',
            { ref: function ref(el) {
                    return _this2._element = el;
                }, className: 'ywpui_table_cell', style: style, rowSpan: rowSpan, colSpan: colSpan },
            this.renderCell(),
            this.props.children
        );
    };

    TableCell.prototype.renderCell = function renderCell() {
        var _props2 = this.props,
            column = _props2.column,
            rowValue = _props2.rowValue,
            rowIndex = _props2.rowIndex;

        if (!column) {
            return null;
        }
        var value = column.field ? rowValue[column.field] : "";
        var children = value;
        if (column.type === TableCell.type.number) {
            children = this.renderNumberCell();
        } else if (column.type === TableCell.type.selection) {
            children = this.renderSelectionCell();
        } else if (column.editor) {
            children = this.renderEditorCell(value);
        }

        if (column.render) {
            children = column.render({ rowValue: rowValue, value: value, column: column, rowIndex: rowIndex, children: children }, this);
        }

        return children;
    };

    TableCell.prototype.renderNumberCell = function renderNumberCell() {
        var rowIndex = this.props.rowIndex;

        return rowIndex + 1;
    };

    TableCell.prototype.renderSelectionCell = function renderSelectionCell() {
        var disabled = this.props.disabled;

        if (disabled) {
            return null;
        }
        return _react2.default.createElement(_.CheckBox, { onChange: this.handleSelectiCellChange, value: this.row.getSelected() });
    };

    TableCell.prototype.renderEditorCell = function renderEditorCell(value) {
        var _this3 = this;

        var _props3 = this.props,
            column = _props3.column,
            rowValue = _props3.rowValue,
            rowIndex = _props3.rowIndex;

        var cellEditor = null;
        if (typeof column.editor === "function") {
            cellEditor = column.editor({ column: column, value: value, rowValue: rowValue, rowIndex: rowIndex }, this);
        } else {
            cellEditor = column.editor;
        }

        cellEditor = _react2.default.cloneElement(cellEditor, {
            onChange: this.handleChange,
            value: value,
            rowValue: rowValue,
            ref: function ref(editor) {
                return _this3._editor = editor;
            }
        });
        return cellEditor;
    };

    TableCell.prototype.getRow = function getRow() {
        return this.row;
    };

    TableCell.prototype.focus = function focus() {
        if (this._editor) {
            this._editor.focus();
        }
    };

    TableCell.prototype.getField = function getField() {
        return this.props.column.field;
    };

    return TableCell;
}(_react2.default.Component), _class.contextTypes = {
    row: _propTypes2.default.any
}, _class.defaultProps = {}, _class.type = {
    number: "number",
    selection: "selection"
}, _temp);
exports.default = TableCell;
module.exports = exports['default'];