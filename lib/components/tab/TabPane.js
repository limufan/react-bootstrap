'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = (_temp = _class = function (_React$Component) {
    _inherits(TabPane, _React$Component);

    function TabPane(props) {
        _classCallCheck(this, TabPane);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function (e) {
            if (_this.props.onClick) {
                _this.props.onClick(e);
            }
        };

        _this.state = {
            selected: props.selected
        };
        return _this;
    }

    TabPane.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({ selected: props.selected });
    };

    TabPane.prototype.render = function render() {
        var _props = this.props,
            href = _props.href,
            to = _props.to,
            title = _props.title;

        var text = this.props.children || title;

        var link = _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)' },
            text
        );
        if (href) {
            link = _react2.default.createElement(
                'a',
                { href: href },
                text
            );
        } else if (to) {
            link = _react2.default.createElement(
                _reactRouterDom.Link,
                { to: to },
                text
            );
        }
        var className = "ywpui_tab_pane";
        if (this.state.selected) {
            className += " current";
        }
        return _react2.default.createElement(
            _.Col,
            { auto: true, className: className, onClick: this.handleClick },
            link
        );
    };

    return TabPane;
}(_react2.default.Component), _class.defaultProps = {
    isRouterLink: true
}, _temp);
exports.default = TabPane;
module.exports = exports['default'];