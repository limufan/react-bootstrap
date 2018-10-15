"use strict";

exports.__esModule = true;
exports.default = undefined;

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

var _AutoCompleteOptionGroup = require("./AutoCompleteOptionGroup");

var _AutoCompleteOptionGroup2 = _interopRequireDefault(_AutoCompleteOptionGroup);

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
                _this.filterItems(keyword);
                _this._dropdown.show();
            }, 300);

            _this.setState({ value: keyword });

            _this.triggerOnChange(keyword);
        };

        _this.handleSelect = function (item, sender) {
            _this._dropdown.hide();
            _this.setValue(item.value);
            _this.triggerSelect(item);
            _this.triggerOnChange(item.value);
        };

        _this.handleKeyDown = function (event) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(event);
            }
            if (event.keyCode === _KeyCode2.default.DOWN) {
                _this._dropdown.show();
            } else if (event.keyCode === _KeyCode2.default.TAB) {
                _this._dropdown.hide();
            }

            if (_this._popup) {
                _this._popup.fireKeyDown(event);
            }
        };

        _this.handleFocus = function () {
            _this.setState({ foucsed: true });
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
            if (!_this2.state.value && _this2.props.selectFirst && items && items.length) {
                var firstItem = items[0];
                var defaultValue = firstItem.value;
                _this2.setValue(defaultValue);
                _this2.triggerSelect(firstItem);
                _this2.triggerOnChange(defaultValue);
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
        var onFilter = this.props.onFilter;
        if (onFilter) {
            onFilter(keyword);
        } else if (this.props.getItems) {
            this.props.getItems(keyword, function (items) {
                _this4.setItems(items);
            });
        } else if (propsItems && propsItems.length) {
            keyword = keyword.toLowerCase();
            var items = propsItems.filter(function (item) {
                var itemText = item.text.toLowerCase();
                return itemText.includes(keyword);
            });

            this.setItems(items);
        }
    };

    AutoComplete.prototype.setKeyword = function setKeyword(keyword) {
        this.filterItems(keyword);
        this.setState({ value: keyword });
    };

    AutoComplete.prototype.triggerSelect = function triggerSelect(item) {
        if (this.props.onSelect) {
            this.props.onSelect(item, this);
        }
    };

    AutoComplete.prototype.triggerOnChange = function triggerOnChange(value) {
        if (this.props.onChange) {
            var args = {
                value: value
            };
            this.props.onChange(args, this);
        }
    };

    AutoComplete.prototype.getTextBoxElement = function getTextBoxElement() {
        var el = _reactDom2.default.findDOMNode(this._textbox);
        return el;
    };

    AutoComplete.prototype.render = function render() {
        var _this5 = this;

        var _props = this.props,
            placeholder = _props.placeholder,
            renderPopup = _props.renderPopup;
        var _state = this.state,
            value = _state.value,
            foucsed = _state.foucsed;

        var text = value;

        var popup = this.renderPopup();

        return _react2.default.createElement(
            _dropdown.Dropdown,
            { popup: popup,
                ref: function ref(dropdown) {
                    return _this5._dropdown = dropdown;
                },
                action: ["click"],
                popupStyle: { width: this.state.popupWidth },
                getPopupContainer: function getPopupContainer() {
                    return _this5.getTextBoxElement();
                }
            },
            _react2.default.createElement(_TextBox2.default, { ref: function ref(tb) {
                    return _this5._textbox = tb;
                },
                value: text,
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                placeholder: placeholder,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })
        );
    };

    AutoComplete.prototype.renderPopup = function renderPopup() {
        var _this6 = this;

        var renderPopup = this.props.renderPopup;
        var _state2 = this.state,
            value = _state2.value,
            items = _state2.items;

        if (this.props.renderPopup) {
            var args = { value: value, items: items };
            var popupElement = this.props.renderPopup(args, this);
            return popupElement;
        } else {
            return _react2.default.createElement(_AutoCompleteOptionGroup2.default, { ref: function ref(group) {
                    return _this6._popup = group;
                }, items: items, value: value, onSelect: this.handleSelect });
        }
    };

    AutoComplete.prototype.setItems = function setItems(items) {
        this.setState({ items: items });
        this._items = items;
    };

    AutoComplete.prototype.focus = function focus() {
        this._textbox.focus();
    };

    AutoComplete.prototype.getValue = function getValue() {
        return this.state.value;
    };

    AutoComplete.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    AutoComplete.prototype.expand = function expand() {
        this._dropdown.show();
    };

    AutoComplete.prototype.collapse = function collapse() {
        this._dropdown.hide();
    };

    return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;
module.exports = exports["default"];