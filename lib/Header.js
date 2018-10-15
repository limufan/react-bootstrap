"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Header.prototype.render = function render() {
        return _react2.default.createElement(
            "nav",
            { "class": "navbar navbar-expand-lg navbar-dark bg-dark" },
            _react2.default.createElement(
                "a",
                { "class": "navbar-brand", href: "#" },
                "Navbar"
            ),
            _react2.default.createElement(
                "button",
                { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarColor01", "aria-controls": "navbarColor01", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                _react2.default.createElement("span", { "class": "navbar-toggler-icon" })
            ),
            _react2.default.createElement(
                "div",
                { "class": "collapse navbar-collapse", id: "navbarColor01" },
                _react2.default.createElement(
                    "ul",
                    { "class": "navbar-nav mr-auto" },
                    _react2.default.createElement(
                        "li",
                        { "class": "nav-item active" },
                        _react2.default.createElement(
                            "a",
                            { "class": "nav-link", href: "#" },
                            "Home ",
                            _react2.default.createElement(
                                "span",
                                { "class": "sr-only" },
                                "(current)"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { "class": "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { "class": "nav-link", href: "#" },
                            "Features"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { "class": "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { "class": "nav-link", href: "#" },
                            "Pricing"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { "class": "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { "class": "nav-link", href: "#" },
                            "About"
                        )
                    )
                ),
                _react2.default.createElement(
                    "form",
                    { "class": "form-inline" },
                    _react2.default.createElement("input", { "class": "form-control mr-sm-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
                    _react2.default.createElement(
                        "button",
                        { "class": "btn btn-outline-info my-2 my-sm-0", type: "submit" },
                        "Search"
                    )
                )
            )
        );
    };

    return Header;
}(_react.Component);

exports.default = Header;
module.exports = exports["default"];