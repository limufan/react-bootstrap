'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CollapsePanel = require('./CollapsePanel');

var _CollapsePanel2 = _interopRequireDefault(_CollapsePanel);

require('./scss/collapse.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = (_temp = _class = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props, context) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handlePanelExpand = function (expandPanel) {
            _this._panels.forEach(function (panel) {
                if (panel !== expandPanel) {
                    panel.collapse();
                }
            });
        };

        _this._panels = [];
        return _this;
    }

    Collapse.prototype.getChildContext = function getChildContext() {
        return { collapse: this };
    };

    Collapse.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            style = _props.style,
            type = _props.type;


        var className = "ywpui_collapse";
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return _react2.default.createElement(
            'div',
            { className: className, style: style },
            this.props.children
        );
    };

    Collapse.prototype.addPanel = function addPanel(panel) {
        panel.onExpand = this.handlePanelExpand;
        this._panels.push(panel);
    };

    Collapse.prototype.removePanel = function removePanel(panel) {
        panel.onExpand = null;
        this._panels = this._panels.filter(function (p) {
            return p !== panel;
        });
    };

    return Collapse;
}(_react2.default.Component), _class.childContextTypes = {
    collapse: _propTypes2.default.any
}, _temp);
exports.default = Collapse;
module.exports = exports['default'];