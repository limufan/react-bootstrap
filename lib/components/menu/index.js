"use strict";

exports.__esModule = true;

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _ItemGroup = require("./ItemGroup");

var _ItemGroup2 = _interopRequireDefault(_ItemGroup);

var _SubMenu = require("./SubMenu");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _GroupMenu = require("./GroupMenu");

var _GroupMenu2 = _interopRequireDefault(_GroupMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Menu2.default.Brand = _Brand2.default;
_Menu2.default.Item = _Item2.default;
_Menu2.default.ItemGroup = _ItemGroup2.default;
_Menu2.default.SubMenu = _SubMenu2.default;
_Menu2.default.GroupMenu = _GroupMenu2.default;

exports.default = _Menu2.default;
module.exports = exports["default"];