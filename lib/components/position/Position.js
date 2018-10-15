"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Position = (_temp = _class = function (_React$Component) {
    _inherits(Position, _React$Component);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleTabOnClick = function () {};

        return _this;
    }

    Position.prototype.render = function render() {
        var fixed = this.props.fixed;

        var className = "";
        if (fixed === Position.fixed.top) {
            className = "fixed-top";
        } else {
            className = "fixed-bottom";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        var style = {
            zIndex: 999,
            position: "absolute"
        };
        Object.assign(style, this.props.style);
        return _react2.default.createElement(
            "div",
            { className: className, style: style },
            this.props.children
        );
    };

    return Position;
}(_react2.default.Component), _class.fixed = {
    top: "top",
    bottom: "bottom"
}, _temp);
exports.default = Position;
module.exports = exports["default"];