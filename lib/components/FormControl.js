"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/formControl.css");

var _ValidFeedbackPlaceholder = require("./ValidFeedbackPlaceholder");

var _ValidFeedbackPlaceholder2 = _interopRequireDefault(_ValidFeedbackPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormControl = function (_React$Component) {
    _inherits(FormControl, _React$Component);

    function FormControl() {
        _classCallCheck(this, FormControl);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormControl.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: "ywpui_from_control" },
            this.props.children
        );
    };

    return FormControl;
}(_react2.default.Component);

exports.default = FormControl;
module.exports = exports["default"];