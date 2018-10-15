"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/switch.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = (_temp = _class = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props, context) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleBtnCloseClick = function (event) {
            var value = !_this.state.value;
            _this.setState({ value: value });
            if (_this.props.onChange) {
                var args = {
                    value: value
                };
                _this.props.onChange(args, _this);
            }
        };

        _this.state = {
            value: props.value
        };
        return _this;
    }

    Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.setState({ value: props.value });
        }
    };

    Switch.prototype.render = function render() {
        var className = "ywpui_witch";
        if (this.state.value) {
            className += " on";
        } else {
            className += " off";
        }

        return _react2.default.createElement(
            "div",
            { className: className, onClick: this.handleBtnCloseClick },
            _react2.default.createElement(
                "span",
                null,
                "\u5F00\u542F"
            ),
            _react2.default.createElement(
                "span",
                null,
                "\u505C\u7528"
            )
        );
    };

    return Switch;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Switch;
module.exports = exports["default"];