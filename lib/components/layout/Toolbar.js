'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./css/toolbar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_React$Component) {
    _inherits(Toolbar, _React$Component);

    function Toolbar(props) {
        _classCallCheck(this, Toolbar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.hanldeClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };

        return _this;
    }

    Toolbar.prototype.render = function render() {
        var className = "ywpui_toolbar";
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return _react2.default.createElement(
            'div',
            { className: className, style: this.props.style, onClick: this.hanldeClick },
            this.props.children
        );
    };

    return Toolbar;
}(_react2.default.Component);

exports.default = Toolbar;
module.exports = exports['default'];