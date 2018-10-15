"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleMouseEnter = function () {
            _this.setState({ active: true });
        };

        _this.handleMouseLeave = function () {
            _this.setState({ active: false });
        };

        _this.state = {};
        return _this;
    }

    Item.prototype.render = function render() {
        var active = this.state.active;

        var classNames = ["ywpui_menu_item"];
        if (active) {
            classNames.push("active");
        }
        return _react2.default.createElement(
            "div",
            { className: classNames.join(" "), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
            this.props.children,
            active ? this.props.subMenu : null
        );
    };

    return Item;
}(_react2.default.Component);

exports.default = Item;
module.exports = exports["default"];