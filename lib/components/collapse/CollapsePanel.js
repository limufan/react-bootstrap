'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

require('./scss/collapse.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsePanel = (_temp = _class = function (_React$Component) {
    _inherits(CollapsePanel, _React$Component);

    function CollapsePanel(props, context) {
        _classCallCheck(this, CollapsePanel);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleTitleClick = function () {
            _this.toggle();
        };

        _this._collapse = context.collapse;
        _this._collapse.addPanel(_this);
        _this.state = {
            expanded: props.expanded
        };
        return _this;
    }

    CollapsePanel.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (props.expanded !== undefined) {
            this.setState({ expanded: props.expanded });
        }
    };

    CollapsePanel.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            style = _props.style;
        var expanded = this.state.expanded;


        var className = "ywpui_collapse_panel";
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return _react2.default.createElement(
            'div',
            { className: className, style: style },
            _react2.default.createElement(
                _.Row,
                { className: 'ywpui_collapse_panel_title', noGutters: true, onClick: this.handleTitleClick },
                _react2.default.createElement(
                    _.Col,
                    { auto: true },
                    title
                ),
                _react2.default.createElement(
                    _.Col,
                    { auto: true, marginLeftAuto: true },
                    this.renderIcon()
                )
            ),
            expanded ? this.props.children : null
        );
    };

    CollapsePanel.prototype.renderIcon = function renderIcon() {
        if (this.state.expanded) {
            return _react2.default.createElement(_.Icon, { type: _.Icon.type.arrowUpSimplest });
        } else {
            return _react2.default.createElement(_.Icon, { type: _.Icon.type.arrowDownSimplest });
        }
    };

    CollapsePanel.prototype.componentWillUnmount = function componentWillUnmount() {
        this._collapse.removePanel(this);
    };

    CollapsePanel.prototype.toggle = function toggle() {
        if (this.state.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    CollapsePanel.prototype.expand = function expand() {
        this.setState({ expanded: true });
        if (this.props.onExpand) {
            this.props.onExpand();
        }
        if (this.onExpand) {
            this.onExpand(this);
        }
    };

    CollapsePanel.prototype.collapse = function collapse() {
        this.setState({ expanded: false });
        if (this.props.onCollapse) {
            this.props.onCollapse();
        }
    };

    return CollapsePanel;
}(_react2.default.Component), _class.contextTypes = {
    collapse: _propTypes2.default.any
}, _temp);
exports.default = CollapsePanel;
module.exports = exports['default'];