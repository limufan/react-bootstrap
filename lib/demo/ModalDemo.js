"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require("../components/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalDemo = function (_Component) {
    _inherits(ModalDemo, _Component);

    function ModalDemo(props) {
        _classCallCheck(this, ModalDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.btnOpenModalClick = function () {
            _this.setState({ show: true });
            _this.setState({ loading: true });
        };

        _this.btnCloseClick = function () {
            _this.setState({ show: false });
            _this.setState({ loading: false });
        };

        _this.onColse = function () {
            _this.setState({ loading: false });
        };

        _this.state = {
            loading: false,
            show: false
        };
        return _this;
    }

    ModalDemo.prototype.render = function render() {
        var modalButtons = _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _Button2.default,
                { type: "secondary", onClick: this.btnCloseClick },
                "Close"
            ),
            _react2.default.createElement(
                _Button2.default,
                null,
                "Save changes"
            )
        );

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                _Button2.default,
                { onClick: this.btnOpenModalClick, loading: this.state.loading },
                "Launch demo modal"
            ),
            _react2.default.createElement(
                _Modal2.default,
                { title: "Title", footer: modalButtons, show: this.state.show, onColse: this.onColse },
                "sdsdsds"
            )
        );
    };

    return ModalDemo;
}(_react.Component);

exports.default = ModalDemo;
module.exports = exports["default"];