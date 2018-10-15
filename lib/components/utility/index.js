"use strict";

exports.__esModule = true;

var _Utility = require("./Utility");

Object.keys(_Utility).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Utility[key];
    }
  });
});