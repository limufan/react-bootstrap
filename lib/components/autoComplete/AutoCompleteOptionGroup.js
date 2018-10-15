"use strict";

exports.__esModule = true;
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _select = require("../select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoCompleteOptionGroup = function (_React$Component) {
    _inherits(AutoCompleteOptionGroup, _React$Component);

    function AutoCompleteOptionGroup(props, context) {
        _classCallCheck(this, AutoCompleteOptionGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSelect = function (item, sender) {
            _this.triggerSelect(item, sender);
        };

        return _this;
    }

    AutoCompleteOptionGroup.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            items = _props.items,
            onSelect = _props.onSelect,
            value = _props.value;

        var optionItems = this.mapOptionGroupItems(items);
        return _react2.default.createElement(_select.OptionGroup, { ref: function ref(group) {
                return _this2._optionGroup = group;
            }, value: value, items: optionItems, onSelect: this.handleSelect });
    };

    AutoCompleteOptionGroup.prototype.mapOptionGroupItems = function mapOptionGroupItems(items) {
        var _this3 = this;

        if (!items) {
            return null;
        }
        var optionGroupItems = items.map(function (item) {
            var itemText = _this3.getItemText(item);
            var optionGroupItem = {
                text: itemText,
                value: itemText
            };
            if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
                Object.assign(optionGroupItem, item);
            }

            return optionGroupItem;
        });

        return optionGroupItems;
    };

    AutoCompleteOptionGroup.prototype.fireKeyDown = function fireKeyDown(event) {
        this._optionGroup.fireKeyDown(event);
    };

    AutoCompleteOptionGroup.prototype.getItemText = function getItemText(item) {
        var text = item;
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
            text = item.text;
        }

        return text || "";
    };

    AutoCompleteOptionGroup.prototype.triggerSelect = function triggerSelect(item, sender) {
        if (this.props.onSelect) {

            this.props.onSelect(item, sender);
        }
    };

    return AutoCompleteOptionGroup;
}(_react2.default.Component);

exports.default = AutoCompleteOptionGroup;
module.exports = exports["default"];