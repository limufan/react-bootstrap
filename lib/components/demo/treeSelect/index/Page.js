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

        _this.load = function (args, node) {
            return [{ text: "A10-01", value: "A10-01" }, { text: "A10-02", value: "A10-02" }, { text: "A10-03", value: "A10-03" }, { text: "A10-04", value: "A10-04" }, { text: "A10-05", value: "A10-05" }];
        };

        _this.state = {};
        return _this;
    }

    Page.prototype.render = function render() {
        var nodes = [{ text: "A区", value: "A区" }, { text: "B区", value: "B区" }, { text: "C区", value: "C区", loaded: true, nodes: [{ text: "A10-01", value: "A10-01", loaded: true }] }];
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_.TreeSelect, {
                nodes: nodes,
                load: this.load,
                placeholder: "\u8BF7\u9009\u62E9"
            })
        );
    };

    return Page;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Page;
module.exports = exports["default"];