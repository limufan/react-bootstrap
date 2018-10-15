"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/formLabel.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormLabel = (_temp = _class = function (_React$Component) {
    _inherits(FormLabel, _React$Component);

    function FormLabel() {
        _classCallCheck(this, FormLabel);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormLabel.prototype.render = function render() {
        var _props = this.props,
            required = _props.required,
            style = _props.style;

        var requiredMark = null;
        if (required) {
            requiredMark = _react2.default.createElement(
                "i",
                { style: { color: "red" } },
                "*"
            );
        }
        return _react2.default.createElement(
            "div",
            { className: "ywpui_from_lable", style: style },
            requiredMark,
            this.props.title || this.props.children
        );
    };

    return FormLabel;
}(_react2.default.Component), _class.defaultProps = {
    required: false
}, _temp);
exports.default = FormLabel;
module.exports = exports["default"];