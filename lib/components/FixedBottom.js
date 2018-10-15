"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedBottom = function (_React$Component) {
    _inherits(FixedBottom, _React$Component);

    function FixedBottom() {
        _classCallCheck(this, FixedBottom);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FixedBottom.prototype.render = function render() {
        var style = { left: 0 };
        Object.assign(style, this.props.style);
        var className = "ywpui_fixed_bottom";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return _react2.default.createElement(
            "div",
            { className: className, style: style },
            this.props.children
        );
    };

    return FixedBottom;
}(_react2.default.Component);

exports.default = FixedBottom;
module.exports = exports["default"];