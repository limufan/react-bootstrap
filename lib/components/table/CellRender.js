'use strict';

exports.__esModule = true;
exports.default = undefined;

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CellRender = function () {
    function CellRender() {
        _classCallCheck(this, CellRender);
    }

    CellRender.shifou = function shifou(args) {
        if (args.value) {
            return "是";
        } else {
            return "否";
        }
    };

    CellRender.currency = function currency(args) {
        var number = (0, _numeral2.default)(args.value);

        return "¥" + number.format("0,000.00");
    };

    CellRender.date = function date(args) {
        return (0, _moment2.default)(args.value).format("YYYY-MM-DD");
    };

    return CellRender;
}();

exports.default = CellRender;
module.exports = exports['default'];