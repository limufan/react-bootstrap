"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SubMenu = require("./SubMenu");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ACTIVE_MENU_BRAND_ID_NAME = "active_menu_brand_id";

var Brand = function (_React$Component) {
    _inherits(Brand, _React$Component);

    function Brand(props) {
        _classCallCheck(this, Brand);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleMouseEnter = function () {
            _this.setState({ hover: true });
        };

        _this.handleMouseLeave = function () {
            _this.setState({ hover: false });
        };

        _this.handleClick = function () {
            localStorage.setItem(ACTIVE_MENU_BRAND_ID_NAME, _this.props.id);
        };

        _this.state = {
            active: props.active
        };
        if (props.active) {
            localStorage.setItem(ACTIVE_MENU_BRAND_ID_NAME, _this.props.id);
        }
        return _this;
    }

    Brand.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.active !== this.props.active) {
            this.setState({ active: props.active });
        }
    };

    Brand.prototype.componentDidMount = function componentDidMount() {
        var id = localStorage.getItem(ACTIVE_MENU_BRAND_ID_NAME);
        if (this.props.id && id === this.props.id.toString()) {
            this.setState({ active: true });
        }
    };

    Brand.prototype.render = function render() {
        var _state = this.state,
            active = _state.active,
            hover = _state.hover;

        var classNames = ["ywpui_menu_brand"];
        if (active) {
            classNames.push("active");
        }
        if (hover) {
            classNames.push("hover");
        }

        var subMenu = null;
        if (hover) {
            subMenu = _react2.default.createElement(
                _SubMenu2.default,
                null,
                this.props.menus
            );
        }
        var _props = this.props,
            icon = _props.icon,
            url = _props.url,
            children = _props.children;

        return _react2.default.createElement(
            "div",
            { className: classNames.join(" "), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onClick: this.handleClick },
            _react2.default.createElement(
                "a",
                { href: url },
                icon,
                _react2.default.createElement(
                    "span",
                    null,
                    children
                )
            ),
            subMenu
        );
    };

    return Brand;
}(_react2.default.Component);

exports.default = Brand;
module.exports = exports["default"];