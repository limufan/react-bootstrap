"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./progress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = (_temp = _class = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props, context) {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    }

    Progress.prototype.render = function render() {
        var _props = this.props,
            size = _props.size,
            type = _props.type;

        var style = {};

        if (size === Progress.size.small) {
            style.height = "8px";
        }
        Object.assign(style, this.props.style);

        var className = "progress";
        if (type === Progress.type.success) {
            className += " ywpui_progress_success";
        } else if (type === Progress.type.danger) {
            className += " ywpui_progress_danger";
        }

        return _react2.default.createElement(
            "div",
            { className: className, style: style },
            this.renderProgressBar()
        );
    };

    Progress.prototype.renderProgressBar = function renderProgressBar() {
        var rate = this.props.rate;

        var style = {
            width: rate + "%"
        };
        return _react2.default.createElement(
            "div",
            { className: "progress-bar", style: style, "aria-valuenow": "0", "aria-valuemin": "0", "aria-valuemax": "100" },
            this.props.children
        );
    };

    return Progress;
}(_react2.default.Component), _class.size = {
    default: "default",
    small: "small"
}, _class.type = {
    success: "success",
    danger: "danger"
}, _class.defaultProps = {
    rate: 0,
    size: "default",
    type: Progress.type.success
}, _temp);
exports.default = Progress;
module.exports = exports["default"];