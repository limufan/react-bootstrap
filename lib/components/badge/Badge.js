"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/badge.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = (_temp = _class = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge(props, context) {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    }

    Badge.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            style = _props.style,
            type = _props.type;


        var className = "ywpui_badge";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (type === Badge.type.success) {
            className += " ywpui_badge_success";
        } else {
            className += " ywpui_badge_warning";
        }
        return _react2.default.createElement(
            "div",
            { className: className, style: style },
            this.props.children
        );
    };

    return Badge;
}(_react2.default.Component), _class.type = {
    success: "success",
    warning: "warning"
}, _class.defaultProps = {
    type: Badge.type.success
}, _temp);
exports.default = Badge;
module.exports = exports["default"];