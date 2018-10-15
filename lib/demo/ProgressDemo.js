"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Progress = require("../components/Progress");

var _Progress2 = _interopRequireDefault(_Progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressDemo = function (_Component) {
    _inherits(ProgressDemo, _Component);

    function ProgressDemo(props) {
        _classCallCheck(this, ProgressDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            percent: 0
        };
        return _this;
    }

    ProgressDemo.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.timerID = setInterval(function () {
            return _this2.setPercent();
        }, 200);
    };

    ProgressDemo.prototype.componentWillUnmount = function componentWillUnmount() {
        clearInterval(this.timerID);
    };

    ProgressDemo.prototype.setPercent = function setPercent() {
        var percent = this.state.percent;
        percent += 5;
        if (percent > 100) {
            clearInterval(this.timerID);
        } else {
            this.setState({ percent: percent });
        }
    };

    ProgressDemo.prototype.render = function render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "h3",
                null,
                "Progress"
            ),
            _react2.default.createElement(_Progress2.default, { percent: this.state.percent })
        );
    };

    return ProgressDemo;
}(_react.Component);

exports.default = ProgressDemo;
module.exports = exports["default"];