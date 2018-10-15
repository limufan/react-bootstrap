"use strict";

exports.__esModule = true;
exports.Dropdown = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _Trigger = require("../Trigger");

var _Trigger2 = _interopRequireDefault(_Trigger);

require("./css/dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = exports.Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props, context) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Dropdown.prototype.show = function show() {
        this._trigger.show();
    };

    Dropdown.prototype.hide = function hide() {
        this._trigger.hide();
    };

    Dropdown.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            popup = _props.popup,
            container = _props.container,
            action = _props.action,
            getPopupContainer = _props.getPopupContainer,
            onPopupAlign = _props.onPopupAlign,
            placement = _props.placement;

        var popupAlign = {
            offset: [0, 3],
            overflow: {
                adjustX: false,
                adjustY: true
            }
        };
        Object.assign(popupAlign, this.props.popupAlign);
        var popupStyle = Object.assign({ width: "100%" }, this.props.popupStyle);

        var className = "ywpui_dropdown";
        if (this.props.className) {
            className = className + " " + this.props.className;
        }

        var dropdown = _react2.default.createElement(
            "div",
            { className: className, ref: function ref(el) {
                    return _this2._dropContainer = el;
                }, style: this.props.style },
            popup
        );
        return _react2.default.createElement(
            _Trigger2.default,
            { ref: function ref(trigger) {
                    return _this2._trigger = trigger;
                },
                popup: dropdown,
                popupStyle: popupStyle,
                popupAlign: popupAlign,
                action: action,
                getPopupContainer: container || getPopupContainer,
                onPopupAlign: onPopupAlign,
                placement: placement
            },
            children
        );
    };

    return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;