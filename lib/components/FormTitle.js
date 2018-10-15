"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _layout = require("./layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTitle = (_temp = _class = function (_React$Component) {
    _inherits(FormTitle, _React$Component);

    function FormTitle() {
        _classCallCheck(this, FormTitle);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormTitle.prototype.render = function render() {
        var requiredMessage = null;
        if (this.props.showRequiredMessage) {
            requiredMessage = _react2.default.createElement(
                "span",
                { "class": "from_title_hint ftcl_999 ftsz_12" },
                "\u5E26",
                _react2.default.createElement(
                    "span",
                    { "class": "ftcl_red" },
                    "*"
                ),
                "\u4E3A\u5FC5\u586B\u9879"
            );
        }
        var style = {
            marginBottom: "30px",
            clear: "both"
        };
        Object.assign(style, this.props.style);
        return _react2.default.createElement(
            "div",
            { className: "from_title", style: style },
            _react2.default.createElement(
                _layout.Row,
                null,
                _react2.default.createElement(
                    _layout.Col,
                    { auto: true },
                    _react2.default.createElement(
                        "span",
                        { "class": "from_title_lable ftcl_333 ftsz_16 ftw" },
                        this.props.title
                    ),
                    requiredMessage
                ),
                _react2.default.createElement(
                    _layout.Col,
                    null,
                    this.props.children
                )
            )
        );
    };

    return FormTitle;
}(_react2.default.Component), _class.defaultProps = {
    title: "Form",
    showRequiredMessage: true
}, _temp);
exports.default = FormTitle;
module.exports = exports["default"];