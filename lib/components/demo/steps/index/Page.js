"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = (_temp = _class = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props, context) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Page.prototype.render = function render() {
        var steps = [{
            content: _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "p",
                    null,
                    "\u6C34\u7535\u8D39\u6C34\u7535\u8D39\u662F\u7684\u8303\u5FB7\u8428"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "ywpui_font_gray" },
                    "2015-66-33"
                )
            ),
            active: true
        }, {
            content: "水电费水电费是的范德萨"
        }, {
            content: "水电费水电费是的范德萨"
        }];

        return _react2.default.createElement(_.Steps, { steps: steps });
    };

    return Page;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Page;
module.exports = exports["default"];