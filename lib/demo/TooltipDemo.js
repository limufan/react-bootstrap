"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Tooltip = require("../components/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TooltipDemo = function (_Component) {
    _inherits(TooltipDemo, _Component);

    function TooltipDemo(props) {
        _classCallCheck(this, TooltipDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.btnTopMouseEnter = function (event) {
            _this.setState({ showTopTooltip: true });
            _this.setState({ topTrigger: event.target });
        };

        _this.btnTopMouseLeave = function () {
            _this.setState({ showTopTooltip: false });
        };

        _this.btnLeftMouseEnter = function (event) {
            _this.setState({ showLeftTooltip: true });
            _this.setState({ leftTrigger: event.target });
        };

        _this.btnLeftMouseLeave = function () {
            _this.setState({ showLeftTooltip: false });
        };

        _this.btnRightMouseEnter = function (event) {
            _this.setState({ showRightTooltip: true });
            _this.setState({ rightTrigger: event.target });
        };

        _this.btnRightMouseLeave = function () {
            _this.setState({ showRightTooltip: false });
        };

        _this.btnBottomMouseEnter = function (event) {
            _this.setState({ showBottomTooltip: true });
            _this.setState({ bottomTrigger: event.target });
        };

        _this.btnBottomMouseLeave = function () {
            _this.setState({ showBottomTooltip: false });
        };

        _this.state = {
            show: false
        };
        return _this;
    }

    TooltipDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _Tooltip2.default,
                { show: this.state.showTopTooltip, placement: "top", trigger: this.state.topTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Top"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Tooltip2.default,
                { show: this.state.showLeftTooltip, placement: "left", trigger: this.state.leftTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Left"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Tooltip2.default,
                { show: this.state.showRightTooltip, placement: "right", trigger: this.state.rightTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Right"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Tooltip2.default,
                { show: this.state.showBottomTooltip, placement: "bottom", trigger: this.state.bottomTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Bottom"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                "div",
                { className: "mx-auto", style: { "width": "500px" } },
                _react2.default.createElement(
                    _Button2.default,
                    { onMouseEnter: this.btnTopMouseEnter, onMouseLeave: this.btnTopMouseLeave },
                    "top"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onMouseEnter: this.btnLeftMouseEnter, onMouseLeave: this.btnLeftMouseLeave },
                    "left"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onMouseEnter: this.btnRightMouseEnter, onMouseLeave: this.btnRightMouseLeave },
                    "right"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onMouseEnter: this.btnBottomMouseEnter, onMouseLeave: this.btnBottomMouseLeave },
                    "bottom"
                )
            )
        );
    };

    return TooltipDemo;
}(_react.Component);

exports.default = TooltipDemo;
module.exports = exports["default"];