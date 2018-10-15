"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Popover = require("../components/Popover");

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopoverDemo = function (_Component) {
    _inherits(PopoverDemo, _Component);

    function PopoverDemo(props) {
        _classCallCheck(this, PopoverDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.btnTopClick = function (event) {
            var showTopPopover = _this.state.showTopPopover;
            _this.setState({ showTopPopover: !showTopPopover });
            _this.setState({ topTrigger: event.target });
        };

        _this.btnTopBlur = function () {
            _this.setState({ showTopPopover: false });
        };

        _this.btnLeftClick = function (event) {
            var showLeftPopover = _this.state.showLeftPopover;
            _this.setState({ showLeftPopover: !showLeftPopover });
            _this.setState({ leftTrigger: event.target });
        };

        _this.btnLeftBlur = function () {
            _this.setState({ showLeftPopover: false });
        };

        _this.btnRightClick = function (event) {
            var showRightPopover = _this.state.showRightPopover;
            _this.setState({ showRightPopover: !showRightPopover });
            _this.setState({ topTrigger: event.target });
            _this.setState({ rightTrigger: event.target });
        };

        _this.btnRightBlur = function () {
            _this.setState({ showRightPopover: false });
        };

        _this.btnBottomClick = function (event) {
            var showBottomPopover = _this.state.showBottomPopover;
            _this.setState({ showBottomPopover: !showBottomPopover });
            _this.setState({ bottomTrigger: event.target });
        };

        _this.btnBottomBlur = function () {
            _this.setState({ showBottomPopover: false });
        };

        _this.state = {
            show: false
        };
        return _this;
    }

    PopoverDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _Popover2.default,
                { show: this.state.showTopPopover, placement: "top", trigger: this.state.topTrigger, title: _react2.default.createElement(
                        "h3",
                        null,
                        "Top"
                    ) },
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Popover2.default,
                { show: this.state.showLeftPopover, placement: "left", trigger: this.state.leftTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Left"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Popover2.default,
                { show: this.state.showRightPopover, placement: "right", trigger: this.state.rightTrigger },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Right"
                ),
                "Search for the keywords to learn more about each warning."
            ),
            _react2.default.createElement(
                _Popover2.default,
                { show: this.state.showBottomPopover, placement: "bottom", trigger: this.state.bottomTrigger },
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
                    { onClick: this.btnTopClick, onBlur: this.btnTopBlur },
                    "top"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: this.btnLeftClick, onBlur: this.btnLeftBlur },
                    "left"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: this.btnRightClick, onBlur: this.btnRightBlur },
                    "right"
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: this.btnBottomClick, onBlur: this.btnBottomBlur },
                    "bottom"
                )
            )
        );
    };

    return PopoverDemo;
}(_react.Component);

exports.default = PopoverDemo;
module.exports = exports["default"];