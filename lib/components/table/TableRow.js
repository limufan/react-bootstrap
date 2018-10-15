'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _layout = require('../layout');

var _KeyCode = require('../KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _ = require('../');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = (_temp = _class = function (_React$Component) {
    _inherits(TableRow, _React$Component);

    function TableRow(props, context) {
        _classCallCheck(this, TableRow);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleKeyDown = function (event) {
            var args = { rowValue: _this.props.value, event: event };
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(args, _this);
            }
        };

        _this.handleCellChange = function (args, cell) {
            var column = args.column;
            var value = _this.props.value;
            value[column.field] = args.value;
            if (_this.props.onChange) {
                var rowChangeArgs = {
                    value: value,
                    column: column,
                    cell: cell
                };
                _this.props.onChange(rowChangeArgs, _this);
            }
        };

        _this.state = {
            selected: props.selected
        };
        return _this;
    }

    TableRow.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.selected !== undefined) {
            this.setState({ selected: props.selected });
        }
    };

    TableRow.prototype.getChildContext = function getChildContext() {
        return { row: this };
    };

    TableRow.prototype.render = function render() {
        var _props = this.props,
            columns = _props.columns,
            value = _props.value,
            className = _props.className,
            style = _props.style,
            index = _props.index,
            disabled = _props.disabled,
            hover = _props.hover;
        var selected = this.state.selected;

        var rowClassName = "ywpui_table_row";
        if (className) {
            rowClassName += ' ' + className;
        }
        if (selected) {
            rowClassName = rowClassName + ' selected';
        }
        if (disabled) {
            rowClassName = rowClassName + ' disabled';
        }
        if (hover) {
            rowClassName += " hover";
        }

        return _react2.default.createElement(
            'tr',
            { className: rowClassName, style: style, onKeyDown: this.handleKeyDown },
            this.renderCell(),
            this.props.children
        );
    };

    TableRow.prototype.renderCell = function renderCell() {
        var _this2 = this;

        this._cells = [];
        var _props2 = this.props,
            columns = _props2.columns,
            value = _props2.value,
            className = _props2.className,
            style = _props2.style,
            index = _props2.index,
            disabled = _props2.disabled;

        var cells = null;
        if (columns) {
            cells = columns.map(function (column) {
                return _react2.default.createElement(_TableCell2.default, {
                    ref: function ref(c) {
                        return c && _this2._cells.push(c);
                    },
                    column: column,
                    rowValue: value,
                    rowIndex: index,
                    disabled: disabled,
                    onChange: _this2.handleCellChange
                });
            });
        }

        return cells;
    };

    TableRow.prototype.getCell = function getCell(index) {
        if (this._cells && this._cells.length) {
            return this._cells[index];
        }

        return null;
    };

    TableRow.prototype.getCellByField = function getCellByField(field) {
        return this.findCell(function (c) {
            return c.getField() === field;
        });
    };

    TableRow.prototype.findCell = function findCell(callback) {
        if (this._cells && this._cells.length) {
            return this._cells.find(callback);
        }

        return null;
    };

    TableRow.prototype.getLastCell = function getLastCell() {
        var cellLength = this._cells ? this._cells.length : 0;
        return this.getCell(cellLength - 1);
    };

    TableRow.prototype.toggle = function toggle() {
        var disabled = this.props.disabled;

        if (disabled) {
            return;
        }

        var selected = this.state.selected;

        if (selected) {
            this.unselect();
        } else {
            this.select();
        }
    };

    TableRow.prototype.select = function select() {
        var _this3 = this;

        var disabled = this.props.disabled;

        if (disabled) {
            return;
        }
        this.setState({ selected: true }, function () {
            _this3.triggerSelect();
        });
    };

    TableRow.prototype.triggerSelect = function triggerSelect() {
        var _props3 = this.props,
            value = _props3.value,
            index = _props3.index;

        if (this.props.onSelect) {
            this.props.onSelect({ value: value, index: index }, this);
        }
    };

    TableRow.prototype.unselect = function unselect() {
        var _this4 = this;

        this.setState({ selected: false }, function () {
            _this4.triggerUnselect();
        });
    };

    TableRow.prototype.triggerUnselect = function triggerUnselect() {
        var _props4 = this.props,
            value = _props4.value,
            index = _props4.index;

        if (this.props.onUnselect) {
            this.props.onUnselect({ value: value, index: index }, this);
        }
    };

    TableRow.prototype.getSelected = function getSelected() {
        return this.state.selected;
    };

    TableRow.prototype.isSelected = function isSelected() {
        return this.state.selected;
    };

    TableRow.prototype.remove = function remove() {
        var _props5 = this.props,
            value = _props5.value,
            index = _props5.index;

        if (this.props.onRemove) {
            this.props.onRemove({ value: value, index: index }, this);
        }
    };

    TableRow.prototype.getValue = function getValue() {
        return this.props.value;
    };

    return TableRow;
}(_react2.default.Component), _class.childContextTypes = {
    row: _propTypes2.default.any
}, _class.defaultProps = {}, _temp);
exports.default = TableRow;
module.exports = exports['default'];