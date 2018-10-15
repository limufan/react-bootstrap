'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

require('rc-trigger/assets/index.css');

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
    },
    rightRight: {
        points: ['cr', 'cr']
    }
};

var Trigger = (_temp = _class = function (_React$Component) {
    _inherits(Trigger, _React$Component);

    function Trigger(props) {
        _classCallCheck(this, Trigger);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Trigger.prototype.show = function show() {
        this._trigger.setPopupVisible(true);
    };

    Trigger.prototype.hide = function hide() {
        this._trigger.setPopupVisible(false);
    };

    Trigger.prototype.render = function render() {
        var _this2 = this;

        var popupAlign = {
            overflow: {
                adjustX: true,
                adjustY: true
            }
        };
        Object.assign(popupAlign, this.props.popupAlign);
        return _react2.default.createElement(
            _rcTrigger2.default,
            _extends({ ref: function ref(trigger) {
                    return _this2._trigger = trigger;
                },
                popupPlacement: this.props.placement,
                builtinPlacements: builtinPlacements,
                transitionName: 'fade'
            }, this.props, {
                popupAlign: popupAlign
            }),
            this.props.children
        );
    };

    return Trigger;
}(_react2.default.Component), _class.defaultProps = {
    action: ["click"],
    placement: "bottomLeft"
}, _temp);
exports.default = Trigger;
module.exports = exports['default'];