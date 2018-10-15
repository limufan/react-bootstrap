"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domScrollIntoView = require("dom-scroll-into-view");

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Trigger = require("../Trigger");

var _Trigger2 = _interopRequireDefault(_Trigger);

var _ = require("../");

var _dropdown = require("../dropdown");

var _layout = require("../layout");

var _KeyCode = require("../KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _Option = require("./Option");

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionGroup = function (_React$Component) {
    _inherits(OptionGroup, _React$Component);

    function OptionGroup(props) {
        _classCallCheck(this, OptionGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleMenuClick = function (item, sender) {
            _this.triggerSelect(item, sender);
        };

        _this.handleMouseMove = function (event) {
            _this.setHoverIndex(null);
        };

        _this.state = {};
        return _this;
    }

    OptionGroup.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            items = _props.items,
            value = _props.value;
        var hoverIndex = this.state.hoverIndex;

        var options = null;
        if (items) {
            options = items.map(function (item, index) {
                var checked = false;
                var hover = false;
                if (value === item.value) {
                    checked = true;
                }
                if (index === hoverIndex) {
                    hover = true;
                }
                return _react2.default.createElement(_Option2.default, _extends({}, item, {
                    item: item,
                    key: item,
                    hover: hover,
                    onClick: _this2.handleMenuClick,
                    checked: checked,
                    parentComponent: _this2
                }));
            });
        }
        this._options = options || [];

        return _react2.default.createElement(
            "div",
            { style: { maxHeight: "170px", overflow: "auto" }, onMouseMove: this.handleMouseMove, tabIndex: -1 },
            options
        );
    };

    OptionGroup.prototype.fireKeyDown = function fireKeyDown(event) {
        if (event.keyCode === _KeyCode2.default.DOWN) {
            this.hoverNext();
        } else if (event.keyCode === _KeyCode2.default.UP) {
            this.hoverPrevious();
        } else if (event.keyCode === _KeyCode2.default.ENTER) {
            this.select(this.state.hoverIndex);
        }

        if (event.keyCode === _KeyCode2.default.DOWN || event.keyCode === _KeyCode2.default.UP || event.keyCode === _KeyCode2.default.ENTER) {
            event.stopPropagation();
            event.preventDefault();
        }
    };

    OptionGroup.prototype.select = function select(index) {
        var items = this.props.items;

        if (index >= 0 && index < items.length) {
            var option = this._options[index];
            var item = items[index];

            this.triggerSelect(item, option);
        }
    };

    OptionGroup.prototype.selectFirst = function selectFirst() {
        this.select(0);
    };

    OptionGroup.prototype.triggerSelect = function triggerSelect(item, sender) {
        if (this.props.onSelect) {
            this.props.onSelect(item, sender);
        }
    };

    OptionGroup.prototype.hoverNext = function hoverNext() {
        var items = this.props.items;

        if (!items) {
            return;
        }

        var hoverIndex = this.state.hoverIndex + 1;
        if (!hoverIndex) {
            hoverIndex = 0;
        }
        if (hoverIndex >= items.length) {
            hoverIndex = items.length - 1;
        }
        this.setState({ hoverIndex: hoverIndex });
    };

    OptionGroup.prototype.hoverPrevious = function hoverPrevious() {
        var hoverIndex = this.state.hoverIndex - 1;
        if (!hoverIndex) {
            hoverIndex = 0;
        }
        if (hoverIndex < 0) {
            hoverIndex = 0;
        }
        this.setState({ hoverIndex: hoverIndex });
    };

    OptionGroup.prototype.setHoverIndex = function setHoverIndex(hoverIndex) {
        this.setState({ hoverIndex: hoverIndex });
    };

    return OptionGroup;
}(_react2.default.Component);

exports.default = OptionGroup;
module.exports = exports["default"];