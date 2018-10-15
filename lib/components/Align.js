"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = require("rc-align");

var _rcAlign2 = _interopRequireDefault(_rcAlign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var builtinPlacements = {
    left: {
        points: ['cr', 'cl']
    },
    right: {
        points: ['cl', 'cr']
    },
    top: {
        points: ['bc', 'tc']
    },
    bottom: {
        points: ['tc', 'bc']
    },
    topLeft: {
        points: ['bl', 'tl']
    },
    topRight: {
        points: ['br', 'tr']
    },
    bottomRight: {
        points: ['tr', 'br']
    },
    bottomLeft: {
        points: ['tl', 'bl']
    }
};

var Align = (_temp = _class = function (_React$Component) {
    _inherits(Align, _React$Component);

    function Align(props, context) {
        _classCallCheck(this, Align);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};
        return _this;
    }

    Align.prototype.render = function render() {
        var _props = this.props,
            target = _props.target,
            placement = _props.placement,
            monitorWindowResize = _props.monitorWindowResize,
            onAlign = _props.onAlign;

        var align = {};
        Object.assign(align, this.props.align);
        if (placement) {
            Object.assign(align, builtinPlacements[placement]);
        }

        return _react2.default.createElement(
            _rcAlign2.default,
            { target: target, monitorWindowResize: monitorWindowResize, align: align, onAlign: onAlign },
            this.props.children
        );
    };

    return Align;
}(_react2.default.Component), _class.placement = {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
    bottomLeft: "bottomLeft"
}, _class.defaultProps = {
    placement: Align.placement.top
}, _temp);
exports.default = Align;
module.exports = exports["default"];