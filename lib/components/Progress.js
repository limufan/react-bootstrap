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

var Progress = (_temp = _class = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Progress.prototype.render = function render() {
        var style = { width: this.props.percent + "%" };
        return _react2.default.createElement(
            "div",
            { className: "progress" },
            _react2.default.createElement("div", { className: "progress-bar", style: style })
        );
    };

    return Progress;
}(_react2.default.Component), _class.defaultProps = {
    percent: 1
}, _temp);
exports.default = Progress;
module.exports = exports["default"];