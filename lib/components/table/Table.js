'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _layout = require('../layout');

var _Scroll = require('../Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

var _KeyCode = require('../KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Colgroup = require('./Colgroup');

var _Colgroup2 = _interopRequireDefault(_Colgroup);

var _Empty = require('../Empty');

var _Empty2 = _interopRequireDefault(_Empty);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./css/table.css');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _ColumnSorter = require('./ColumnSorter');

var _ColumnSorter2 = _interopRequireDefault(_ColumnSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_temp = _class = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props, context) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = props.value;
        if (value === undefined || value === null) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value,
            columns: props.columns
        };
        return _this;
    }

    Table.prototype.getChildContext = function getChildContext() {
        return { table: this };
    };

    Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setValue(props.value);
        }

        if (props.columns !== undefined) {
            this.setState({ columns: props.columns });
        }
    };

    Table.prototype.componentDidMount = function componentDidMount() {
        this._$element = (0, _jquery2.default)(this._element);
        this._$fixedBodyScroll = (0, _jquery2.default)(this._fixedBodyScroll);
    };

    Table.prototype.componentDidUpdate = function componentDidUpdate() {
        this._$element = (0, _jquery2.default)(this._element);
        this._$fixedBodyScroll = (0, _jquery2.default)(this._fixedBodyScroll);
    };

    Table.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            bordered = _props.bordered,
            fixed = _props.fixed,
            singleSelection = _props.singleSelection,
            minWidth = _props.minWidth,
            size = _props.size,
            height = _props.height,
            className = _props.className,
            nowrap = _props.nowrap,
            header = _props.header,
            tabIndex = _props.tabIndex,
            showScroll = _props.showScroll,
            showXScroll = _props.showXScroll,
            showYScroll = _props.showYScroll;
        var _state = this.state,
            columns = _state.columns,
            value = _state.value;

        var classNames = ["ywpui_table__"];
        if (className) {
            classNames.push(className);
        }
        if (bordered) {
            classNames.push("ywpui_table_border");
        }
        if (fixed) {
            classNames.push("ywpui_table_fixed");
        }
        if (nowrap) {
            classNames.push("ywpui_table_nowrap");
        }
        if (size === Table.size.small) {
            classNames.push("ywpui_table_small");
        }

        var tableStyle = { minWidth: minWidth };
        var normalColumns = columns.filter(function (c) {
            return !c.fixed;
        });

        var colgroup = _react2.default.createElement(_Colgroup2.default, { columns: columns });
        return _react2.default.createElement(
            'div',
            { ref: function ref(el) {
                    return _this2._element = el;
                }, className: classNames.join(" "), style: this.props.style, onKeyDown: this.handleKeyDown, tabIndex: tabIndex },
            _react2.default.createElement(_Header2.default, { ref: function ref(h) {
                    return _this2._header = h;
                },
                style: showScroll ? { overflowX: "hidden" } : null,
                columns: columns,
                colgroup: colgroup,
                tableStyle: tableStyle,
                header: header,
                onSort: this.handleSort
            }),
            _react2.default.createElement(
                _Scroll2.default,
                { ref: function ref(s) {
                        return _this2._bodyScroll = s;
                    }, onScroll: this.handleBodyScroll, onChange: this.handleScrollChange, showScroll: showScroll, showXScroll: showXScroll, showYScroll: showYScroll },
                this.renderBody({ tableStyle: tableStyle, colgroup: colgroup, columns: columns, value: value, singleSelection: singleSelection, ref: function ref(b) {
                        return _this2._body = b;
                    } })
            ),
            this.renderFixedColumns()
        );
    };

    Table.prototype.renderBody = function renderBody(bodyProps) {
        var tableStyle = bodyProps.tableStyle,
            style = bodyProps.style,
            colgroup = bodyProps.colgroup,
            columns = bodyProps.columns,
            value = bodyProps.value,
            singleSelection = bodyProps.singleSelection,
            ref = bodyProps.ref;
        var _props2 = this.props,
            onRowKeyDown = _props2.onRowKeyDown,
            rowKeyField = _props2.rowKeyField,
            onRowRendering = _props2.onRowRendering,
            onSelect = _props2.onSelect,
            onUnselect = _props2.onUnselect;

        if (value && value.length || this.props.children) {
            return _react2.default.createElement(
                _Body2.default,
                { ref: ref,
                    columns: columns,
                    rowKeyField: rowKeyField,
                    onRowRendering: onRowRendering,
                    value: value,
                    colgroup: colgroup,
                    tableStyle: tableStyle,
                    style: style,
                    singleSelection: singleSelection,
                    onChange: this.handleChange,
                    onRemove: this.handleRemove,
                    onRowKeyDown: onRowKeyDown,
                    onSelect: onSelect,
                    onUnselect: onUnselect
                },
                this.props.children
            );
        } else {
            return _react2.default.createElement(_Empty2.default, null);
        }
    };

    Table.prototype.renderFixedColumns = function renderFixedColumns() {
        var _this3 = this;

        var singleSelection = this.props.singleSelection;
        var _state2 = this.state,
            columns = _state2.columns,
            value = _state2.value;

        var fixRightColumns = columns.filter(function (c) {
            return c.fixed === "right";
        });
        if (!fixRightColumns.length) {
            return null;
        }
        var fixRightColgroup = _react2.default.createElement(_Colgroup2.default, { columns: fixRightColumns });

        return _react2.default.createElement(
            'div',
            { className: 'ywpui_table_fix_right' },
            _react2.default.createElement(_Header2.default, { columns: fixRightColumns, colgroup: fixRightColgroup, tableStyle: { width: "0" } }),
            _react2.default.createElement(
                'div',
                { className: 'ywpui_table_fix_right_scroll', ref: function ref(el) {
                        return _this3._fixedBodyScroll = el;
                    }, onScroll: this.handleFixedBodyScroll },
                this.renderBody({ tableStyle: { width: "0" }, colgroup: fixRightColgroup, columns: fixRightColumns, value: value, singleSelection: singleSelection })
            )
        );
    };

    Table.prototype.fireKeyDown = function fireKeyDown(event) {
        if (this._body) {
            this._body.fireKeyDown(event);
        }
    };

    Table.prototype.getRow = function getRow(index) {
        if (this._body) {
            return this._body.getRow(index);
        }

        return null;
    };

    Table.prototype.getLastRow = function getLastRow() {
        if (this._body) {
            return this._body.getLastRow();
        }

        return null;
    };

    Table.prototype.getRowByKey = function getRowByKey(key) {
        if (this._body) {
            return this._body.getRowByKey(key);
        }

        return null;
    };

    Table.prototype.getSelectedRows = function getSelectedRows() {
        if (this._body) {
            return this._body.getSelectedRows();
        }

        return null;
    };

    Table.prototype.changeValue = function changeValue(value) {
        this.triggerOnChange(value);
        this.setValue(value);
    };

    Table.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    Table.prototype.bodyScrollLeft = function bodyScrollLeft(event) {
        var target = event.target;
        var scrollLeft = target.scrollLeft;

        var headerElement = _reactDom2.default.findDOMNode(this._header);
        headerElement.scrollLeft = scrollLeft;
    };

    Table.prototype.bodyScrollTop = function bodyScrollTop(event) {
        var target = event.target;
        var scrollTop = target.scrollTop;

        if (this._lastScrollTop === scrollTop) {
            return;
        }

        if (this._fixedBodyScroll) {
            this._fixedBodyScroll.scrollTop = scrollTop;
        }

        this._lastScrollTop = scrollTop;
    };

    Table.prototype.triggerOnChange = function triggerOnChange(value) {
        if (value === undefined) {
            value = this.state.value;
        }
        if (this.props.onChange) {
            var changeArgs = {
                value: this.clone(value)
            };
            this.props.onChange(changeArgs, this);
        }
    };

    Table.prototype.triggerOnSort = function triggerOnSort(args, component) {
        if (this.props.onSort) {
            this.props.onSort(args, component);
        }
    };

    Table.prototype.clone = function clone(value) {
        if (!value) {
            return value;
        }
        return JSON.parse(JSON.stringify(value));
    };

    Table.prototype.add = function add(rowValue, callback) {
        if (!rowValue) {
            return;
        }
        var value = this.state.value || [];
        if (rowValue.length) {
            value = value.concat(rowValue);
        } else {
            value.push(value);
        }

        this.setState({ value: value }, function () {
            if (callback) {
                callback({});
            }
        });

        this.triggerOnChange(value);
    };

    Table.prototype.selectAll = function selectAll() {
        this._body.selectAll();
    };

    Table.prototype.unselectAll = function unselectAll() {
        this._body.unselectAll();
    };

    Table.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    Table.prototype.getValue = function getValue(value) {
        return this.state.value;
    };

    Table.prototype.focus = function focus() {
        this._element.focus();
    };

    return Table;
}(_react2.default.Component), _class.size = {
    small: "small"
}, _class.childContextTypes = {
    table: _propTypes2.default.any
}, _class.defaultProps = {
    bordered: true,
    showScroll: false,
    nowrap: false
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.handleKeyDown = function (event) {
        _this4.fireKeyDown(event);
    };

    this.handleScrollChange = function (args, scroll) {
        if (!_this4._$element) {
            return;
        }
        if (args.hasYScroll) {
            _this4._$element.addClass("srcoll-y");
            _this4._$fixedBodyScroll.height(args.height);
        } else {
            _this4._$element.removeClass("srcoll-y");
            _this4._$fixedBodyScroll.height("auto");
        }

        if (args.hasXScroll) {
            _this4._$element.addClass("srcoll-x");
        } else {
            _this4._$element.removeClass("srcoll-x");
        }

        if (args.hasYScroll || args.hasXScroll) {
            var scrollbarSize = scroll.getXScrollbarSize() * -1;
            _this4._$fixedBodyScroll.css("margin-bottom", scrollbarSize);
        }
    };

    this.handleBodyScroll = function (event) {
        _this4.bodyScrollLeft(event);
        _this4.bodyScrollTop(event);
    };

    this.handleFixedBodyScroll = function (event) {
        var target = event.target;
        var scrollTop = target.scrollTop;

        if (_this4._lastScrollTop === scrollTop) {
            return;
        }

        var scrollElement = _reactDom2.default.findDOMNode(_this4._bodyScroll);
        scrollElement.scrollTop = scrollTop;

        _this4._lastScrollTop = scrollTop;
    };

    this.handleChange = function (args, row) {
        var value = _this4.state.value;

        _this4.triggerOnChange(value);
        _this4.setState({ value: value });
    };

    this.handleRemove = function (args, row) {
        var value = _this4.state.value;
        value = value.filter(function (rowValue) {
            return rowValue !== args.value;
        });

        _this4.triggerOnChange(value);
        _this4.setState({ value: value });
    };

    this.handleSort = function (args, component) {
        var field = args.field,
            column = args.column,
            sortOrder = args.sortOrder;

        column.sortOrder = sortOrder;
        var columns = _this4.props.columns;

        _this4.setState({ columns: columns });

        _this4.triggerOnSort(args, component);
    };
}, _temp);
exports.default = Table;


Table.cellType = _TableCell2.default.type;
Table.sortOrder = _ColumnSorter2.default.type;
module.exports = exports['default'];