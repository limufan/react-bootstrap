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

var FormItem = (_temp = _class = function (_React$Component) {
    _inherits(FormItem, _React$Component);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormItem.prototype.render = function render() {
        var requiredMark = null;
        if (this.props.required) {
            requiredMark = _react2.default.createElement(
                "i",
                null,
                "*"
            );
        }
        var errorMessageElement = null;
        if (this.props.containsErrorElement) {
            errorMessageElement = _react2.default.createElement("div", { className: "from_item_error boxs" });
        }
        return _react2.default.createElement(
            "div",
            { className: "from_item", style: this.props.style },
            _react2.default.createElement(
                "div",
                { className: "from_item_lable", style: { width: "110px" } },
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.label
                ),
                requiredMark
            ),
            _react2.default.createElement(
                "div",
                { className: "from_item_input" },
                this.props.children
            ),
            errorMessageElement
        );
    };

    return FormItem;
}(_react2.default.Component), _class.defaultProps = {
    label: null,
    required: false,
    containsErrorElement: true
}, _temp);
exports.default = FormItem;
module.exports = exports["default"];