"use strict";

exports.__esModule = true;
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextBox = require("../TextBox");

var _TextBox2 = _interopRequireDefault(_TextBox);

var _dropdown = require("../dropdown");

var _select = require("../select");

var _KeyCode = require("../KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("../css/autoComplete.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete(props, context) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleChange = function (args) {
            var keyword = args.value;
            if (_this._timer) {
                clearTimeout(_this._timer);
                _this._timer = null;
            }
            _this._timer = setTimeout(function () {
                _this.setKeyword(keyword);
                _this._dropdown.show();
            }, 300);

            _this.setState({ keyword: keyword });
        };

        _this.handleSelect = function (item, sender) {
            _this.select(item);
        };

        _this.handleKeyDown = function (event) {
            if (event.keyCode === _KeyCode2.default.DOWN) {
                _this._dropdown.show();
            } else if (event.keyCode === _KeyCode2.default.TAB) {
                _this._dropdown.hide();
            }

            if (_this._optionGroup) {
                _this._optionGroup.fireKeyDown(event);
            }
        };

        _this.handleFocus = function () {
            _this.setState({ foucsed: true, keyword: "" });
            setTimeout(function () {
                _this._dropdown.show();
            }, 200);
        };

        _this.handleBlur = function () {
            _this.setState({ foucsed: false });
        };

        var value = props.value;
        if (value === undefined || value === null) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value,
            selectItem: props.selectItem,
            items: props.items,
            popupWidth: "100%"
        };
        return _this;
    }

    AutoComplete.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setValue(props.value);
        }

        if (props.items !== undefined) {
            this.setItems(props.items);
        }
    };

    AutoComplete.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.load(function (items) {
            if (_this2.props.selectFirst && items && items.length) {
                var firstItem = items[0];
                var defaultValue = firstItem.value;
                _this2.setSelectItem(firstItem);
                _this2.triggerSelect(firstItem);
                _this2.triggerOnChange(firstItem);
            }
        });
    };

    AutoComplete.prototype.load = function load(callback) {
        var _this3 = this;

        if (this.props.getItems) {
            this.props.getItems("", function (items) {
                _this3.setItems(items);
                if (callback) {
                    callback(items);
                }
            });
        }
    };

    AutoComplete.prototype.filterItems = function filterItems(keyword) {
        var _this4 = this;

        var propsItems = this.props.items;
        if (this.props.getItems) {
            this.props.getItems(keyword, function (items) {
                _this4.setItems(items);
            });
        } else if (propsItems && propsItems.length) {
            keyword = keyword.toLowerCase();
            var items = propsItems.filter(function (item) {
                var itemText = _this4.getItemText(item).toLowerCase();
                return itemText.includes(keyword);
            });

            this.setItems(items);
        }
    };

    AutoComplete.prototype.getItemText = function getItemText(item) {
        var text = item;
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
            text = item.text;
        }

        return text || "";
    };

    AutoComplete.prototype.setKeyword = function setKeyword(keyword) {
        this.filterItems(keyword);
        this.setState({ keyword: keyword });
    };

    AutoComplete.prototype.select = function select(item) {
        this._dropdown.hide();
        this.setSelectItem(item);
        this.triggerSelect(item);
        this.triggerOnChange(item);
        this._textbox.blur();
    };

    AutoComplete.prototype.triggerSelect = function triggerSelect(item) {
        if (this.props.onSelect) {
            this.props.onSelect(item, this);
        }
    };

    AutoComplete.prototype.triggerOnChange = function triggerOnChange(item) {
        if (this.props.onChange) {
            var args = {
                value: item.value,
                selectItem: item
            };
            this.props.onChange(args, this);
        }
    };

    AutoComplete.prototype.mapOptionGroupItems = function mapOptionGroupItems(items) {
        var _this5 = this;

        if (!items) {
            return null;
        }
        var optionGroupItems = items.map(function (item) {
            var itemText = _this5.getItemText(item);
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

    AutoComplete.prototype.getTextBoxElement = function getTextBoxElement() {
        var el = _reactDom2.default.findDOMNode(this._textbox);
        return el;
    };

    AutoComplete.prototype.render = function render() {
        var _this6 = this,
            _React$createElement;

        var style = this.props.style;
        var _state = this.state,
            optionItems = _state.optionItems,
            foucsed = _state.foucsed,
            keyword = _state.keyword,
            selectItem = _state.selectItem,
            value = _state.value;

        var placeholder = this.props.placeholder;
        var text = selectItem && selectItem.text;
        if (foucsed) {
            placeholder = text;
            text = keyword || "";
        }
        var dropdownMenu = _react2.default.createElement(_select.OptionGroup, { ref: function ref(group) {
                return _this6._optionGroup = group;
            }, value: value, items: optionItems, onSelect: this.handleSelect });
        return _react2.default.createElement(
            _dropdown.Dropdown,
            (_React$createElement = { popup: dropdownMenu,
                ref: function ref(dropdown) {
                    return _this6._dropdown = dropdown;
                },
                action: ["click"]
            }, _React$createElement["popup"] = dropdownMenu, _React$createElement.popupStyle = { width: this.state.popupWidth }, _React$createElement.getPopupContainer = function getPopupContainer() {
                return _this6.getTextBoxElement();
            }, _React$createElement),
            _react2.default.createElement(_TextBox2.default, { ref: function ref(tb) {
                    return _this6._textbox = tb;
                },
                value: text,
                style: style,
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                placeholder: placeholder,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })
        );
    };

    AutoComplete.prototype.setItems = function setItems(items) {
        var optionItems = this.mapOptionGroupItems(items);
        this.setState({ optionItems: optionItems });
        this._items = items;
    };

    AutoComplete.prototype.getText = function getText(value) {
        var optionItems = this.state.optionItems || [];
        var item = optionItems.find(function (item) {
            return item.value === value;
        });

        return item ? item.text : "";
    };

    AutoComplete.prototype.focus = function focus() {
        this._textbox.focus();
    };

    AutoComplete.prototype.getValue = function getValue() {
        return this.state.value;
    };

    AutoComplete.prototype.setSelectItem = function setSelectItem(item) {
        this.setState({ selectItem: item });
        var value = item && item.value;
        this.setValue(value);
    };

    AutoComplete.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;
module.exports = exports["default"];