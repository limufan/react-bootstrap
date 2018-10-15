"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Align = require("./Align");

var _Align2 = _interopRequireDefault(_Align);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_NAME = {
    TOOLTIP: "popover",
    TOP: "bs-popover-top",
    LEFT: "bs-popover-left",
    RIGHT: "bs-popover-right",
    BOTTOM: "bs-popover-bottom",
    SHOW: "show"
};

var Popover = (_temp = _class = function (_React$Component) {
    _inherits(Popover, _React$Component);

    function Popover(props, context) {
        _classCallCheck(this, Popover);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};
        return _this;
    }

    Popover.prototype.render = function render() {
        var show = this.state.show;

        if (!show) {
            // return;
        }

        var _props = this.props,
            target = _props.target,
            placement = _props.placement;

        var align = {
            offset: this.getOffset()
        };

        var classNames = this.getClassName();
        return _react2.default.createElement(
            _Align2.default,
            { monitorWindowResize: true, align: align, target: target, placement: this.getAlignPlacement() },
            _react2.default.createElement(
                "div",
                { className: classNames.join(" ") },
                _react2.default.createElement("div", { className: "arrow" }),
                _react2.default.createElement("h3", { className: "popover-header" }),
                _react2.default.createElement(
                    "div",
                    { className: "popover-body" },
                    this.props.children
                )
            )
        );
    };

    Popover.prototype.getOffset = function getOffset() {
        var offset = [0, 0];
        switch (this.props.placement) {
            case Popover.placement.bottom:
                offset = [5, 8];
                break;
            default:
                break;
        }

        return offset;
    };

    Popover.prototype.getAlignPlacement = function getAlignPlacement() {
        var placement = this.props.placement;
        switch (this.props.placement) {
            case Popover.placement.bottom:
                placement = _Align2.default.placement.bottomLeft;
                break;
            default:
                break;
        }

        return placement;
    };

    Popover.prototype.getClassName = function getClassName() {
        var classNames = [CLASS_NAME.TOOLTIP];
        switch (this.props.placement) {
            case Popover.placement.top:
                classNames.push(CLASS_NAME.TOP);
                break;
            case Popover.placement.left:
                classNames.push(CLASS_NAME.LEFT);
                break;
            case Popover.placement.right:
                classNames.push(CLASS_NAME.RIGHT);
                break;
            case Popover.placement.bottom:
                classNames.push(CLASS_NAME.BOTTOM);
                break;
            default:
                classNames.push(CLASS_NAME.TOP);
        }

        return classNames;
    };

    return Popover;
}(_react2.default.Component), _class.placement = {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom"
}, _class.defaultProps = {
    placement: Popover.placement.top
}, _temp);
exports.default = Popover;
module.exports = exports["default"];