"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_NAME = {
    TOOLTIP: "tooltip",
    TOP: "bs-tooltip-top",
    LEFT: "bs-tooltip-left",
    RIGHT: "bs-tooltip-right",
    BOTTOM: "bs-tooltip-bottom",
    SHOW: "show"
};

var PLACEMENT = {
    TOP: "top",
    LEFT: "left",
    RIGHT: "right",
    BOTTOM: "bottom"
};

var ARROW_WIDTH = 5;
var ARROW_HEIGHT = 5;

var Tooltip = (_temp = _class = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Tooltip.prototype.render = function render() {
        var _this2 = this;

        var classNames = this.getClassName();

        var position = null;
        if (this.props.show) {
            classNames.push(CLASS_NAME.SHOW);
            position = this.getPosition();
        } else {
            position = { left: -1000, top: -1000 };
        }

        var arrowPosition = this.getArrowPosition();

        return _react2.default.createElement(
            "div",
            { ref: function ref(el) {
                    return _this2.tooltipElement = el;
                }, className: classNames.join(" "), style: position },
            _react2.default.createElement("div", { className: "arrow", style: arrowPosition }),
            _react2.default.createElement(
                "div",
                { className: "tooltip-inner" },
                this.props.children
            )
        );
    };

    Tooltip.prototype.getClassName = function getClassName() {
        var classNames = [CLASS_NAME.TOOLTIP];
        switch (this.props.placement) {
            case PLACEMENT.TOP:
                classNames.push(CLASS_NAME.TOP);
                break;
            case PLACEMENT.LEFT:
                classNames.push(CLASS_NAME.LEFT);
                break;
            case PLACEMENT.RIGHT:
                classNames.push(CLASS_NAME.RIGHT);
                break;
            case PLACEMENT.BOTTOM:
                classNames.push(CLASS_NAME.BOTTOM);
                break;
            default:
                classNames.push(CLASS_NAME.TOP);
        }

        return classNames;
    };

    Tooltip.prototype.getPosition = function getPosition() {
        var trigger = this.props.trigger;
        if (!trigger) {
            return null;
        }

        var position = (0, _jquery2.default)(trigger).offset();
        var triggerWidth = (0, _jquery2.default)(trigger).outerWidth();
        var triggerHeight = (0, _jquery2.default)(trigger).outerHeight();
        var elementWidth = (0, _jquery2.default)(this.tooltipElement).outerWidth() || 0;
        var elementHeight = (0, _jquery2.default)(this.tooltipElement).outerHeight() || 0;

        switch (this.props.placement) {
            case PLACEMENT.TOP:
                position.top = position.top - elementHeight;
                position.left = position.left - (elementWidth - triggerWidth) / 2;
                break;
            case PLACEMENT.LEFT:
                position.top = position.top - (elementHeight - triggerHeight) / 2;
                position.left = position.left - elementWidth;
                break;
            case PLACEMENT.RIGHT:
                position.top = position.top - (elementHeight - triggerHeight) / 2;
                position.left = position.left + triggerWidth;
                break;
            case PLACEMENT.BOTTOM:
                position.top = position.top + triggerHeight;
                position.left = position.left - (elementWidth - triggerWidth) / 2;
                break;
        }

        return position;
    };

    Tooltip.prototype.getArrowPosition = function getArrowPosition() {
        var position = {};
        var elementWidth = (0, _jquery2.default)(this.tooltipElement).outerWidth() || 0;
        var elementHeight = (0, _jquery2.default)(this.tooltipElement).outerHeight() || 0;

        switch (this.props.placement) {
            case PLACEMENT.TOP:
                position.left = elementWidth / 2 - ARROW_WIDTH;
                break;
            case PLACEMENT.LEFT:
                position.top = elementHeight / 2 - ARROW_WIDTH;
                break;
            case PLACEMENT.RIGHT:
                position.top = elementHeight / 2 - ARROW_WIDTH;
                break;
            case PLACEMENT.BOTTOM:
                position.left = elementWidth / 2 - ARROW_WIDTH;
                break;
        }

        return position;
    };

    return Tooltip;
}(_react2.default.Component), _class.defaultProps = {
    placement: PLACEMENT.TOP
}, _temp);
exports.default = Tooltip;
module.exports = exports["default"];