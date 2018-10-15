"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_temp = _class = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props, context) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleBtnCloseClick = function (event) {
            _this.hide();
            if (_this.props.onClose) {
                _this.props.onClose(event);
            }
        };

        _this.state = {
            show: props.show
        };
        return _this;
    }

    Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.show !== undefined) {
            this.setState({ show: props.show });
        }
    };

    Modal.prototype.render = function render() {
        var backdropStyle = null;
        if (!this.state.show) {
            return null;
        }
        return _react2.default.createElement(
            "div",
            { className: "eject_more_bg", style: backdropStyle },
            _react2.default.createElement(
                "div",
                { className: "eject_more_box", style: this.props.style },
                _react2.default.createElement(
                    "div",
                    { className: "eject_more_title" },
                    this.props.title,
                    _react2.default.createElement("a", { onClick: this.handleBtnCloseClick, href: "javascript:;", className: "eject_more_close" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "eject_more_list_box", style: this.props.bodyStyle },
                    this.props.children
                )
            )
        );
    };

    Modal.prototype.show = function show(cb) {
        this.setState({ show: true }, function () {
            if (cb) {
                cb();
            }
        });
    };

    Modal.prototype.hide = function hide() {
        this.setState({ show: false });
    };

    Modal.prototype.toggle = function toggle() {
        var show = !this.state.show;
        this.setState({ show: show });
    };

    return Modal;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Modal;
module.exports = exports["default"];