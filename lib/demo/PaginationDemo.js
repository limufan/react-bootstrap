"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Pagination = require("../components/Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationDemo = function (_Component) {
    _inherits(PaginationDemo, _Component);

    function PaginationDemo(props) {
        _classCallCheck(this, PaginationDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleOnChange = function (event, args) {
            _this.setState({ pagination: args });
        };

        _this.state = {
            pagination: null
        };
        return _this;
    }

    PaginationDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "h3",
                null,
                "Pagination"
            ),
            _react2.default.createElement(
                "p",
                null,
                "\u9009\u62E9\u9875\u7801: ",
                JSON.stringify(this.state.pagination)
            ),
            _react2.default.createElement(_Pagination2.default, { onChange: this.handleOnChange })
        );
    };

    return PaginationDemo;
}(_react.Component);

exports.default = PaginationDemo;
module.exports = exports["default"];