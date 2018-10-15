"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/empty.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Empty = function (_React$Component) {
    _inherits(Empty, _React$Component);

    function Empty() {
        _classCallCheck(this, Empty);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Empty.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: "ywpui_empty", style: this.props.style },
            _react2.default.createElement("i", null),
            _react2.default.createElement(
                "p",
                { style: { "margin-bottom": "20px" } },
                this.props.children || "没有匹配结果"
            )
        );
    };

    return Empty;
}(_react2.default.Component);

exports.default = Empty;
module.exports = exports["default"];