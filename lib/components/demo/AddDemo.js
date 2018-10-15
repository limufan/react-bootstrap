"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

var _DemoForm = require("./DemoForm");

var _DemoForm2 = _interopRequireDefault(_DemoForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddDemo = function (_React$Component) {
    _inherits(AddDemo, _React$Component);

    function AddDemo(props) {
        _classCallCheck(this, AddDemo);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSubmit = function () {
            var valid = _this._form.validate();
            var value = _this._form.getValue();

            if (valid && _this.props.onSubmit) {
                _this.submit(value);
            }
            _this.setState({ value: value });
        };

        _this.handleCancel = function () {
            _this.props.history.push("/");
        };

        _this.handleFormChange = function (args, event) {
            _this.setState({ value: args.value });
            _this.setState({ valid: args.valid });
        };

        _this.state = {
            value: {},
            valid: false
        };
        return _this;
    }

    AddDemo.prototype.submit = function submit(value) {

        this.props.history.push("/");
    };

    AddDemo.prototype.render = function render() {
        var _this2 = this;

        return _react2.default.createElement(
            _.Scroll,
            { offsetHeight: 30 },
            _react2.default.createElement(_DemoForm2.default, { ref: function ref(el) {
                    return _this2._form = el;
                }, onChange: this.handleFormChange }),
            _react2.default.createElement(
                "p",
                null,
                JSON.stringify(this.state.value)
            ),
            _react2.default.createElement(
                _.FixedBottom,
                null,
                _react2.default.createElement(
                    _.Button,
                    { type: "primary", onClick: this.handleSubmit },
                    "\u4FDD\u5B58"
                ),
                _react2.default.createElement(
                    _.Button,
                    { type: "default", onClick: this.handleCancel },
                    "\u53D6\u6D88"
                )
            )
        );
    };

    return AddDemo;
}(_react2.default.Component);

exports.default = AddDemo;
module.exports = exports["default"];