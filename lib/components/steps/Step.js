"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

require("./css/steps.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = (_temp = _class = function (_React$Component) {
    _inherits(Step, _React$Component);

    function Step(props, context) {
        _classCallCheck(this, Step);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Step.prototype.render = function render() {
        var step = this.props.step;

        var className = "ywpui_step";
        if (step.active) {
            className += " active";
        }
        return _react2.default.createElement(
            _.Row,
            { className: className, noGutters: true },
            this.renderTail(),
            _react2.default.createElement(
                _.Col,
                { auto: true },
                this.renderIcon()
            ),
            _react2.default.createElement(
                _.Col,
                { auto: true },
                this.renderContent()
            )
        );
    };

    Step.prototype.renderTail = function renderTail() {
        return _react2.default.createElement("div", { className: "ywpui_step_tail" });
    };

    Step.prototype.renderIcon = function renderIcon() {
        var step = this.props.step;

        var className = "ywpui_step_icon";
        return _react2.default.createElement(
            "div",
            { className: className },
            step.name
        );
    };

    Step.prototype.renderContent = function renderContent() {
        var step = this.props.step;

        return _react2.default.createElement(
            "div",
            { className: "ywpui_step_content" },
            step.content
        );
    };

    return Step;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Step;
module.exports = exports["default"];