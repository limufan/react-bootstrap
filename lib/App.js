'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ModalDemo = require('./demo/ModalDemo');

var _ModalDemo2 = _interopRequireDefault(_ModalDemo);

var _ButtonGroupDemo = require('./demo/ButtonGroupDemo');

var _ButtonGroupDemo2 = _interopRequireDefault(_ButtonGroupDemo);

var _FormDemo = require('./demo/FormDemo');

var _FormDemo2 = _interopRequireDefault(_FormDemo);

var _TabDemo = require('./demo/TabDemo');

var _TabDemo2 = _interopRequireDefault(_TabDemo);

var _AlertDemo = require('./demo/AlertDemo');

var _AlertDemo2 = _interopRequireDefault(_AlertDemo);

var _TooltipDemo = require('./demo/TooltipDemo');

var _TooltipDemo2 = _interopRequireDefault(_TooltipDemo);

var _PopoverDemo = require('./demo/PopoverDemo');

var _PopoverDemo2 = _interopRequireDefault(_PopoverDemo);

var _layout = require('./components/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import DropdownDemo from './demo/DropdownDemo';
// import ProgressDemo from './demo/ProgressDemo';
// import PaginationDemo from './demo/PaginationDemo';

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            activeMenu: "ModalDemo"
        };

        _this.menus = [{ text: "ModalDemo", to: "/ModalDemo" }, { text: "ButtonGroupDemo", to: "/ButtonGroupDemo" }, { text: "FormDemo", to: "/FormDemo" }, { text: "TabDemo", to: "/TabDemo" }, { text: "AlertDemo", to: "/AlertDemo" }, { text: "TooltipDemo", to: "/TooltipDemo" }, { text: "PopoverDemo", to: "/PopoverDemo" }, { text: "DropdownDemo", to: "/DropdownDemo" }, { text: "ProgressDemo", to: "/ProgressDemo" }, { text: "PaginationDemo", to: "/PaginationDemo" }];
        return _this;
    }

    App.prototype.handleMenuClick = function handleMenuClick(menu) {
        this.setState({ activeMenu: menu });
    };

    App.prototype.render = function render() {
        return _react2.default.createElement(
            _reactRouterDom.HashRouter,
            null,
            _react2.default.createElement(
                _layout.Layout,
                null,
                _react2.default.createElement(_layout.Sider, null),
                _react2.default.createElement(
                    _layout.Content,
                    null,
                    _react2.default.createElement(
                        _layout.Header,
                        null,
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: '#' },
                            'Navbar'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'navbar-nav mr-auto' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'nav-item active' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'nav-link', href: '#' },
                                        'Home ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'sr-only' },
                                            '(current)'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'nav-item' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'nav-link', href: '#' },
                                        'Link'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'nav-item' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'nav-link disabled', href: '#' },
                                        'Disabled'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'form',
                                { className: 'form-inline my-2 my-lg-0' },
                                _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit' },
                                    'Search'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { style: { padding: "10px 0" } })
                )
            )
        );
    };

    return App;
}(_react.Component);

exports.default = App;
module.exports = exports['default'];