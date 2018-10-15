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

var Option = (_temp = _class = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function (event) {
            _this.setState({ checked: true });
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.item, _this);
            }
        };

        _this.state = {
            checked: props.checked
        };
        return _this;
    }

    Option.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.props.hover && this.props.parentComponent) {
            (0, _domScrollIntoView2.default)(_reactDom2.default.findDOMNode(this), _reactDom2.default.findDOMNode(this.props.parentComponent), { onlyScrollIfNeeded: true });
        }
    };

    Option.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.checked !== undefined) {
            this.setState({ checked: props.checked });
        }
    };

    Option.prototype.render = function render() {
        var className = ["ywpui_select_option"];
        if (this.state.checked) {
            className.push("selected");
        }
        if (this.props.hover) {
            className.push("hover");
        }
        var selectedIcon = null;
        if (this.state.checked) {
            selectedIcon = _react2.default.createElement(_.Icon, { type: _.Icon.type.selected, style: { marginLeft: "10px" } });
        }
        return _react2.default.createElement(
            "div",
            { title: this.props.title, className: className.join(" "), onClick: this.handleClick, tabIndex: -1 },
            this.props.text,
            selectedIcon
        );
    };

    return Option;
}(_react2.default.Component), _class.defaultProps = {
    text: "",
    value: "",
    checked: false
}, _temp);
exports.default = Option;
module.exports = exports["default"];