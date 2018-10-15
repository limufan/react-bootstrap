"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Tab = require("../components/Tab");

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormDemo = function (_Component) {
    _inherits(FormDemo, _Component);

    function FormDemo(props) {
        _classCallCheck(this, FormDemo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleSubmit = function () {
            alert(JSON.stringify(_this.state.value));
            alert(_this.state.valid);
        };

        _this.handleChange = function (event, tabName) {
            alert(tabName);
        };

        _this.state = {
            value: {
                account: null,
                name: null
            },
            valid: false
        };
        return _this;
    }

    FormDemo.prototype.render = function render() {

        return _react2.default.createElement(
            _Tab2.default,
            { activeTab: "home", onChange: this.handleChange },
            _react2.default.createElement(
                _Tab.TabPane,
                { name: "home", title: "Home" },
                "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
            ),
            _react2.default.createElement(
                _Tab.TabPane,
                { name: "profile", title: "Profile" },
                "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid."
            ),
            _react2.default.createElement(
                _Tab.TabPane,
                { name: "contact", title: "Contact" },
                "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
            )
        );
    };

    return FormDemo;
}(_react.Component);

exports.default = FormDemo;
module.exports = exports["default"];