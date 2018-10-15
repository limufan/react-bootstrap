'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeaderCell = require('./HeaderCell');

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderRow = (_temp = _class = function (_React$Component) {
    _inherits(HeaderRow, _React$Component);

    function HeaderRow(props, context) {
        _classCallCheck(this, HeaderRow);

        return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    }

    HeaderRow.prototype.getChildContext = function getChildContext() {
        return { row: this };
    };

    HeaderRow.prototype.render = function render() {
        var columns = this.props.columns;

        return _react2.default.createElement(
            'tr',
            null,
            this.renderCells(),
            this.props.children
        );
    };

    HeaderRow.prototype.renderCells = function renderCells() {
        var _props = this.props,
            columns = _props.columns,
            onSort = _props.onSort;

        if (columns && columns.length) {
            var cells = [];
            columns.forEach(function (column) {
                if (column.hideHeader) {
                    return;
                }
                var cell = _react2.default.createElement(_HeaderCell2.default, _extends({ column: column, onSort: onSort }, column.header));
                cells.push(cell);
            });

            return cells;
        }

        return null;
    };

    return HeaderRow;
}(_react2.default.Component), _class.childContextTypes = {
    row: _propTypes2.default.any
}, _temp);
exports.default = HeaderRow;
module.exports = exports['default'];