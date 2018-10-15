'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _TableDemo = require('./TableDemo');

var _TableDemo2 = _interopRequireDefault(_TableDemo);

var _AddDemo = require('./AddDemo');

var _AddDemo2 = _interopRequireDefault(_AddDemo);

var _EditDemo = require('./EditDemo');

var _EditDemo2 = _interopRequireDefault(_EditDemo);

var _Page = require('./steps/index/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Page3 = require('./collapse/index/Page');

var _Page4 = _interopRequireDefault(_Page3);

var _Page5 = require('./tree/index/Page');

var _Page6 = _interopRequireDefault(_Page5);

var _Page7 = require('./treeSelect/index/Page');

var _Page8 = _interopRequireDefault(_Page7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIDemo = function (_React$Component) {
    _inherits(UIDemo, _React$Component);

    function UIDemo() {
        _classCallCheck(this, UIDemo);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    UIDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _reactRouterDom.HashRouter,
            null,
            _react2.default.createElement(
                'div',
                { style: { width: "80%", margin: "auto" } },
                _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _TableDemo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _AddDemo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/edit', component: _EditDemo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/steps', exact: true, component: _Page2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/collapse', exact: true, component: _Page4.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/tree', exact: true, component: _Page6.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/treeSelect', exact: true, component: _Page8.default })
            )
        );
    };

    return UIDemo;
}(_react2.default.Component);

exports.default = UIDemo;
module.exports = exports['default'];