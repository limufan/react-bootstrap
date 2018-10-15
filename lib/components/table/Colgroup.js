"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _layout = require("../layout");

var _KeyCode = require("../KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Colgroup = (_temp = _class = function (_React$Component) {
    _inherits(Colgroup, _React$Component);

    function Colgroup(props, context) {
        _classCallCheck(this, Colgroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {};
        return _this;
    }

    Colgroup.prototype.render = function render() {
        var columns = this.props.columns;


        return _react2.default.createElement(
            "colgroup",
            null,
            columns.map(function (column) {
                var style = {};
                var width = column.width;
                if (width && typeof width !== "string") {
                    width = width + "px";
                }

                if (width) {
                    style.width = width;
                }

                return _react2.default.createElement("col", { style: style });
            })
        );
    };

    return Colgroup;
}(_react2.default.Component), _class.defaultProps = {}, _temp);
exports.default = Colgroup;
module.exports = exports["default"];