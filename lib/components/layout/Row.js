'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = (_temp = _class = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row(props) {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Row.prototype.render = function render() {
        var className = "ywpui_row row";
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        if (this.props.justify) {
            className += ' justify-content-' + this.props.justify;
        }
        if (this.props.noGutters) {
            className += ' no-gutters';
        }
        return _react2.default.createElement(
            'div',
            _extends({}, this.props, { className: className }),
            this.props.children
        );
    };

    return Row;
}(_react2.default.Component), _class.justify = {
    start: "start",
    center: "center",
    end: "end",
    around: "around",
    between: "between"
}, _temp);
exports.default = Row;
module.exports = exports['default'];