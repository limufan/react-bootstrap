"use strict";

exports.__esModule = true;
exports.default = undefined;

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryString = function () {
    function QueryString() {
        _classCallCheck(this, QueryString);
    }

    QueryString.parse = function parse(search) {
        if (search) {
            if (search.startsWith("?")) {
                search = search.substr(1, search.length - 1);
            }
            var query = _querystring2.default.parse(search);
            return query;
        }

        return null;
    };

    return QueryString;
}();

exports.default = QueryString;
module.exports = exports["default"];