'use strict';

exports.__esModule = true;
exports.formater = exports.default = undefined;

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formater = function () {
    function Formater() {
        _classCallCheck(this, Formater);
    }

    Formater.prototype.currency = function currency(number) {
        number = (0, _numeral2.default)(number);

        return "¥" + number.format("0,000.00");
    };

    Formater.prototype.int = function int(number) {
        number = (0, _numeral2.default)(number);

        return number.format("0,000");
    };

    Formater.prototype.number = function number(_number) {
        _number = (0, _numeral2.default)(_number);

        return _number.format("0,000.00");
    };

    Formater.prototype.date = function date(_date) {
        return (0, _moment2.default)(_date).format("YYYY-MM-DD");
    };

    Formater.prototype.dateTime = function dateTime(date) {
        return (0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss");
    };

    return Formater;
}();

exports.default = Formater;
var formater = exports.formater = new Formater();