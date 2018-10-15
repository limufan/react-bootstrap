"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextBox = require("./TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_NAME = {
    FORM_GROUP_ROW: "form-group row",
    INVALID_FEEDBACK: "invalid-feedback",
    FORM_LABEL: "col-sm-2 col-form-label",
    FORM_CONTROL: "col-sm-10"
};

var FormGroup = function (_React$Component) {
    _inherits(FormGroup, _React$Component);

    function FormGroup(props) {
        _classCallCheck(this, FormGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};
        return _this;
    }

    FormGroup.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: CLASS_NAME.FORM_GROUP_ROW },
            _react2.default.createElement(
                "label",
                { className: CLASS_NAME.FORM_LABEL },
                this.props.label
            ),
            _react2.default.createElement(
                "div",
                { className: CLASS_NAME.FORM_CONTROL },
                this.props.children
            )
        );
    };

    return FormGroup;
}(_react2.default.Component);

exports.default = FormGroup;
module.exports = exports["default"];