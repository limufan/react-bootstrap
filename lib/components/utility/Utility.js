"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utility = exports.Utility = function () {
    function Utility() {
        _classCallCheck(this, Utility);
    }

    Utility.arrayEquals = function arrayEquals(array1, array2) {
        if (array1 === array2) {
            return true;
        }

        var array1Json = "";
        if (array1) {
            array1Json = JSON.stringify(array1);
        }

        var array2Json = "";
        if (array2) {
            array2Json = JSON.stringify(array2);
        }

        if (array1Json === array2Json) {
            return true;
        }

        return false;
    };

    return Utility;
}();