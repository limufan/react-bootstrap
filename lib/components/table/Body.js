"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domScrollIntoView = require("dom-scroll-into-view");

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _layout = require("../layout");

var _Scroll = require("../Scroll");

var _Scroll2 = _interopRequireDefault(_Scroll);

var _KeyCode = require("../KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _TableRow = require("./TableRow");

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = (_temp = _class = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body(props, context) {
        _classCallCheck(this, Body);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleRowKeyDown = function (args, component) {
            if (_this.props.onRowKeyDown) {
                _this.props.onRowKeyDown(args, component);
            }
        };

        _this.handleSelect = function (args, row) {
            var singleSelection = _this.props.singleSelection;

            if (singleSelection) {
                if (_this._selectedRow) {
                    _this._selectedRow.unselect();
                }
                _this._selectedRow = row;
            } else {
                _this._selectedRows.push(row);
            }

            _this.triggerOnSelect(row);
        };

        _this.handleUnselect = function (args, row) {
            var singleSelection = _this.props.singleSelection;

            if (!singleSelection) {
                _this._selectedRows = _this._selectedRows.filter(function (selectedRow) {
                    return row !== selectedRow;
                });
            }

            _this.triggerOnUnselect(row);
        };

        _this.handleRowChange = function (args, row) {
            if (_this.props.onChange) {
                _this.props.onChange(args, row);
            }
        };

        _this.handleRowRemove = function (args, row) {
            if (_this.props.onRemove) {
                _this.props.onRemove(args, row);
            }
        };

        _this.state = {};
        _this._selectedRows = [];
        return _this;
    }

    Body.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            columns = _props.columns,
            value = _props.value,
            tableStyle = _props.tableStyle;

        var className = "ywpui_table_body";

        return _react2.default.createElement(
            "div",
            { ref: function ref(s) {
                    return _this2._scroll = s;
                }, className: className, style: this.props.style },
            _react2.default.createElement(
                "table",
                { style: tableStyle },
                this.props.colgroup,
                _react2.default.createElement(
                    "tbody",
                    null,
                    this.renderRows(),
                    this.props.children
                )
            )
        );
    };

    Body.prototype.renderRows = function renderRows() {
        var _this3 = this;

        this._rows = [];
        var _props2 = this.props,
            columns = _props2.columns,
            value = _props2.value,
            rowKeyField = _props2.rowKeyField;
        var hoverIndex = this.state.hoverIndex;

        var rows = null;
        if (value) {
            rows = value.map(function (rowValue, index) {
                var key = null;
                if (rowKeyField) {
                    key = rowValue[rowKeyField];
                }
                var props = _this3.triggerOnRowRendering(rowValue);

                return _react2.default.createElement(_TableRow2.default, _extends({}, props, {
                    ref: function ref(r) {
                        r && _this3._rows.push(r);
                    },
                    key: key,
                    value: rowValue,
                    columns: columns,
                    index: index,
                    hover: index === hoverIndex,
                    onSelect: _this3.handleSelect,
                    onUnselect: _this3.handleUnselect,
                    onChange: _this3.handleRowChange,
                    onRemove: _this3.handleRowRemove,
                    onKeyDown: _this3.handleRowKeyDown
                }));
            });
        }

        return rows;
    };

    Body.prototype.fireKeyDown = function fireKeyDown(event) {
        if (event.keyCode === _KeyCode2.default.DOWN) {
            this.hoverNext();
        } else if (event.keyCode === _KeyCode2.default.UP) {
            this.hoverPrevious();
        } else if (event.keyCode === _KeyCode2.default.SPACE) {
            this.toggle(this.state.hoverIndex);
        }

        if (event.keyCode === _KeyCode2.default.DOWN || event.keyCode === _KeyCode2.default.UP || event.keyCode === _KeyCode2.default.SPACE) {
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Body.prototype.triggerOnRowRendering = function triggerOnRowRendering(rowValue) {
        var onRowRendering = this.props.onRowRendering;

        if (onRowRendering) {
            var args = { rowValue: rowValue };
            return onRowRendering(args);
        }

        return null;
    };

    Body.prototype.getRow = function getRow(index) {
        if (this._rows && this._rows.length) {
            return this._rows[index];
        }

        return null;
    };

    Body.prototype.getLastRow = function getLastRow() {
        var rowLength = this._rows ? this._rows.length : 0;
        return this.getRow(rowLength - 1);
    };

    Body.prototype.getRowByKey = function getRowByKey(key) {
        var rowKeyField = this.props.rowKeyField;

        if (this._rows && this._rows.length) {
            return this._rows.find(function (r) {
                var rowValue = r.props.value;
                if (rowValue && rowKeyField) {
                    return rowValue[rowKeyField] === key;
                }
                return false;
            });
        }

        return null;
    };

    Body.prototype.hoverNext = function hoverNext() {
        var value = this.props.value;

        if (!value || !value.length) {
            return;
        }
        var hoverIndex = this.state.hoverIndex + 1;
        if (!hoverIndex) {
            hoverIndex = 0;
        }
        if (hoverIndex >= value.length) {
            hoverIndex = 0;
        }
        this.setState({ hoverIndex: hoverIndex });
    };

    Body.prototype.hoverPrevious = function hoverPrevious() {
        var value = this.props.value;

        if (!value || !value.length) {
            return;
        }

        var hoverIndex = this.state.hoverIndex - 1;
        if (!hoverIndex) {
            hoverIndex = 0;
        }
        if (hoverIndex < 0) {
            hoverIndex = value.length - 1;
        }
        this.setState({ hoverIndex: hoverIndex });
    };

    Body.prototype.toggle = function toggle(index) {
        if (this._rows && this._rows.length) {
            var row = this._rows[index];
            if (row) {
                row.toggle();
            }
        }
    };

    Body.prototype.select = function select(index) {
        if (this._rows && this._rows.length) {
            var row = this._rows[index];
            if (row) {
                row.select();
            }
        }
    };

    Body.prototype.selectAll = function selectAll() {
        if (this._rows && this._rows.length) {
            this._rows.forEach(function (row) {
                row.select();
            });
        }
    };

    Body.prototype.unselectAll = function unselectAll() {
        if (this._rows && this._rows.length) {
            this._rows.forEach(function (row) {
                row.unselect();
            });
        }
    };

    Body.prototype.triggerOnSelect = function triggerOnSelect(row) {
        var onSelect = this.props.onSelect;

        if (onSelect) {
            var args = {
                selectRow: row,
                selectedRows: this._selectedRows
            };
            onSelect(args, this);
        }
    };

    Body.prototype.triggerOnUnselect = function triggerOnUnselect(row) {
        var onUnselect = this.props.onUnselect;

        if (onUnselect) {
            var args = {
                unselectRow: row,
                selectedRows: this._selectedRows
            };
            onUnselect(args, this);
        }
    };

    Body.prototype.getSelectedRows = function getSelectedRows() {
        if (this._rows && this._rows.length) {
            var selectRows = this._rows.filter(function (row) {
                return row.isSelected();
            });

            return selectRows;
        }

        return null;
    };

    return Body;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Body;
module.exports = exports["default"];