'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _ = require('../');

require('./css/tab.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleTabOnClick = function () {};

        return _this;
    }

    Tab.prototype.render = function render() {
        var _props = this.props,
            tabs = _props.tabs,
            tabChildren = _props.tabChildren;

        var tabPanes = tabs.map(function (tab) {
            return _react2.default.createElement(_TabPane2.default, tab);
        });
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _.Row,
                { className: 'ywpui_tab' },
                tabPanes,
                _react2.default.createElement(
                    _.Col,
                    null,
                    tabChildren
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ywpui_tab_content' },
                this.props.children
            )
        );
    };

    return Tab;
}(_react2.default.Component);

exports.default = Tab;
module.exports = exports['default'];