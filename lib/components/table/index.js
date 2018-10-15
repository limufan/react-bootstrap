"use strict";

exports.__esModule = true;

var _Table = require("./Table");

var _Table2 = _interopRequireDefault(_Table);

var _TableRow = require("./TableRow");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require("./TableCell");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _HeaderRow = require("./HeaderRow");

var _HeaderRow2 = _interopRequireDefault(_HeaderRow);

var _HeaderCell = require("./HeaderCell");

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

var _CellRender = require("./CellRender");

var _CellRender2 = _interopRequireDefault(_CellRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Table2.default.Row = _TableRow2.default;
_Table2.default.Cell = _TableCell2.default;
_Table2.default.CellRender = _CellRender2.default;
_Table2.default.HeaderRow = _HeaderRow2.default;
_Table2.default.HeaderCell = _HeaderCell2.default;
exports.default = _Table2.default;
module.exports = exports["default"];