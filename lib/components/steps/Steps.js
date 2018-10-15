"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Step = require("./Step");

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp = _class = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props, context) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Select.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: "ywpui_steps" },
            this.renderSteps()
        );
    };

    Select.prototype.renderSteps = function renderSteps() {
        var steps = this.props.steps;

        if (!steps) {
            return null;
        }

        return steps.map(function (step) {
            return _react2.default.createElement(_Step2.default, { step: step });
        });
    };

    return Select;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Select;
module.exports = exports["default"];