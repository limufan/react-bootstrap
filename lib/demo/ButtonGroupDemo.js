"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require("../components/ButtonGroup");

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroupDemo = function (_Component) {
    _inherits(ButtonGroupDemo, _Component);

    function ButtonGroupDemo(props) {
        _classCallCheck(this, ButtonGroupDemo);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    ButtonGroupDemo.prototype.render = function render() {

        return _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
                _Button2.default,
                null,
                "Left"
            ),
            _react2.default.createElement(
                _Button2.default,
                null,
                "Middle"
            ),
            _react2.default.createElement(
                _Button2.default,
                null,
                "Right"
            )
        );
    };

    return ButtonGroupDemo;
}(_react.Component);

exports.default = ButtonGroupDemo;
module.exports = exports["default"];