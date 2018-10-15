"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = (_temp = _class = function (_React$Component) {
    _inherits(Alert, _React$Component);

    function Alert(props) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClose = function () {
            _this.close();
        };

        _this.state = {
            show: props.show
        };
        return _this;
    }

    Alert.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({ show: props.show });
    };

    Alert.prototype.render = function render() {
        var className = "alert alert-warning alert-dismissible position-absolute fade float-right";
        if (this.state.show) {
            className = "alert alert-warning alert-dismissible position-absolute fade float-right show";
            this.clearTimeout();
            this.timer = setTimeout(this.handleClose, this.props.duration);
        }
        return _react2.default.createElement(
            "div",
            { className: className, style: { right: "10px", top: "10px" } },
            this.props.children,
            _react2.default.createElement(
                "button",
                { type: "button", className: "close", onClick: this.handleClose },
                _react2.default.createElement(
                    "span",
                    null,
                    "\xD7"
                )
            )
        );
    };

    Alert.prototype.close = function close() {
        this.setState({ show: false });
        this.clearTimeout();
    };

    Alert.prototype.clearTimeout = function (_clearTimeout) {
        function clearTimeout() {
            return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
            return _clearTimeout.toString();
        };

        return clearTimeout;
    }(function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    });

    return Alert;
}(_react2.default.Component), _class.defaultProps = {
    duration: 3000
}, _temp);
exports.default = Alert;
module.exports = exports["default"];