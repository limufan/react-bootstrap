"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

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

var _OptionGroup = require("./OptionGroup");

var _OptionGroup2 = _interopRequireDefault(_OptionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp = _class = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props, context) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSelect = function (item, sender) {
            _this.select(item, sender);
        };

        _this.handleKeyDown = function (event) {
            if (event.keyCode === _KeyCode2.default.DOWN) {
                _this._dropdown.show();
            }

            if (_this._optionGroup) {
                _this._optionGroup.fireKeyDown(event);
            }
        };

        _this.handleFocus = function (event) {
            setTimeout(function () {
                _this._dropdown.show();
            }, 200);
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };

        _this.handleBlur = function (event) {
            _this._dropdown.hide();
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
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

    Select.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setValue(props.value);
        }

        if (props.items !== undefined) {
            this.setState({ items: props.items });
        }
    };

    Select.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var selectFirstItem = this.props.selectFirstItem;

        if (this.props.getItems) {
            this.props.getItems(function (items) {
                _this2.setState({ items: items }, function () {
                    if (selectFirstItem) {
                        _this2.selectFirst();
                    }
                });
            });
        }
    };

    Select.prototype.select = function select(item, sender) {
        this.setValue(item.value);
        this._dropdown.hide();
        this.triggerOnChange(item, sender);
    };

    Select.prototype.selectFirst = function selectFirst() {
        var items = this.state.items;

        if (items && items.length) {
            this.select(items[0]);
        }
    };

    Select.prototype.triggerOnChange = function triggerOnChange(item, sender) {
        if (this.props.onChange) {
            var args = {
                name: this.props.name,
                value: item.value,
                text: item.text
            };
            this.props.onChange(args, sender);
        }
    };

    Select.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            className = _props.className,
            disabled = _props.disabled;
        var _state = this.state,
            value = _state.value,
            items = _state.items,
            hoverIndex = _state.hoverIndex;

        var text = this.getText(this.state.value);
        var dropdownMenu = _react2.default.createElement(_OptionGroup2.default, { ref: function ref(group) {
                return _this3._optionGroup = group;
            }, items: items, value: value, onSelect: this.handleSelect });

        var classNames = ["ywpui_select__"];
        if (disabled) {
            classNames.push("disabled");
        }
        if (className) {
            classNames.push(className);
        }
        return _react2.default.createElement(
            _dropdown.Dropdown,
            { popup: dropdownMenu,
                ref: function ref(dropdown) {
                    return _this3._dropdown = dropdown;
                },
                action: disabled ? "" : ["click"],
                popupStyle: { width: this.state.popupWidth },
                container: function container(el) {
                    return _this3._element;
                }
            },
            _react2.default.createElement(
                "a",
                { ref: function ref(el) {
                        return _this3._element = el;
                    }, href: "javascript:;",
                    className: classNames.join(" "),
                    style: this.props.style,
                    onFocus: this.handleFocus,
                    onKeyDown: this.handleKeyDown
                },
                _react2.default.createElement(
                    _layout.Row,
                    null,
                    _react2.default.createElement(
                        _layout.Col,
                        { className: "ywpui_nowrap", marginRightAuto: true, style: { padding: "0 10px" } },
                        text || this.props.placeholder
                    ),
                    _react2.default.createElement(
                        _layout.Col,
                        { auto: true, style: { padding: "0" } },
                        _react2.default.createElement(_.Icon, { type: _.Icon.type.dropdown })
                    )
                )
            )
        );
    };

    Select.prototype.open = function open() {
        this._dropdown.show();
    };

    Select.prototype.getText = function getText(value) {
        if (this.state.items) {
            var item = this.state.items.find(function (item) {
                return item.value === value;
            });

            if (item) {
                return item.text;
            }
        }

        return "";
    };

    Select.prototype.getValue = function getValue() {
        return this.state.value;
    };

    Select.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return Select;
}(_react2.default.Component), _class.defaultProps = {
    name: null,
    valid: true
}, _temp);
exports.default = Select;
module.exports = exports["default"];