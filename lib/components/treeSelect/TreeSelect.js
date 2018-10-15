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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelect = (_temp = _class = function (_React$Component) {
    _inherits(TreeSelect, _React$Component);

    function TreeSelect(props, context) {
        _classCallCheck(this, TreeSelect);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSelect = function (node, sender) {
            _this.select(node, sender);
        };

        _this.state = {
            selectedNode: props.selectedNode,
            nodes: props.nodes,
            popupWidth: "100%"
        };
        return _this;
    }

    TreeSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.selectedNode !== undefined) {
            this.setState({ selectedNode: props.selectedNode });
        }

        if (props.nodes !== undefined) {
            this.setState({ nodes: props.nodes });
        }
    };

    TreeSelect.prototype.select = function select(node, sender) {
        this.setSelectedNode(node);
        this._dropdown.hide();
        this.triggerOnChange(node, sender);
    };

    TreeSelect.prototype.triggerOnChange = function triggerOnChange(node, sender) {
        if (this.props.onChange) {
            var args = {
                value: node.value,
                text: node.text
            };
            this.props.onChange(args, sender);
        }
    };

    TreeSelect.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            className = _props.className,
            disabled = _props.disabled;
        var _state = this.state,
            selectedNode = _state.selectedNode,
            nodes = _state.nodes,
            hoverIndex = _state.hoverIndex;

        var text = selectedNode && selectedNode.text;
        var dropdownMenu = this.renderTree();

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
                    return _this2._dropdown = dropdown;
                },
                action: disabled ? "" : ["click"],
                popupStyle: { width: this.state.popupWidth },
                container: function container(el) {
                    return _this2._element;
                }
            },
            _react2.default.createElement(
                "a",
                { ref: function ref(el) {
                        return _this2._element = el;
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

    TreeSelect.prototype.renderTree = function renderTree() {
        var load = this.props.load;
        var nodes = this.state.nodes;

        return _react2.default.createElement(
            "div",
            { style: { maxHeight: "300px", overflow: "auto", padding: "10px" } },
            _react2.default.createElement(_.Tree, { nodes: nodes, load: load, onSelect: this.handleSelect })
        );
    };

    TreeSelect.prototype.open = function open() {
        this._dropdown.show();
    };

    TreeSelect.prototype.setSelectedNode = function setSelectedNode(node) {
        this.setState({ selectedNode: node });
    };

    TreeSelect.prototype.getValue = function getValue() {
        var _state2 = this.state,
            selectedNode = _state2.selectedNode,
            nodes = _state2.nodes,
            hoverIndex = _state2.hoverIndex;

        return selectedNode && selectedNode.value;
    };

    return TreeSelect;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = TreeSelect;
module.exports = exports["default"];