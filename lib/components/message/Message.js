"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("../css/message.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = (_temp = _class = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props, context) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {
            show: props.show
        };
        return _this;
    }

    Message.prototype.componentDidMount = function componentDidMount() {};

    Message.prototype.render = function render() {
        var _this2 = this;

        setTimeout(function () {
            _this2.hide();
        }, this.props.duration);

        var iconClassName = "ywpui_icon_success";
        if (this.props.type === "error") {
            iconClassName = "ywpui_icon_error";
        } else if (this.props.type === "warning") {
            iconClassName = "ywpui_icon_warning";
        }

        var style = {};
        if (!this.state.show) {
            style.display = "none";
        }

        return _react2.default.createElement(
            "div",
            { className: "ywpui_messae_box", style: style },
            _react2.default.createElement("i", { className: iconClassName }),
            this.props.message
        );
    };

    Message.prototype.show = function show(message, duration) {
        this.setState({ show: true });
    };

    Message.prototype.hide = function hide() {
        this.setState({ show: false });
        if (this.props.onHide) {
            this.props.onHide();
        }
    };

    return Message;
}(_react2.default.Component), _class.defaultProps = {
    duration: 2000,
    show: false
}, _temp);
exports.default = Message;
module.exports = exports["default"];