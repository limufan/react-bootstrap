"use strict";

exports.__esModule = true;
exports.TabPane = exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = (_temp = _class = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleTabOnClick = function (event, tabName) {
            _this.setState({ activeTab: tabName });
            event.preventDefault();
            if (_this.props.onChange) {
                _this.props.onChange(event, tabName);
            }
        };

        _this.state = {
            activeTab: props.activeTab
        };
        return _this;
    }

    Tab.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        this.setState({ activeTab: props.activeTab });
    };

    Tab.prototype.render = function render() {
        var _this2 = this;

        var items = _react2.default.Children.map(this.props.children, function (pane) {
            var paneName = pane.props.name;
            var className = "nav-item nav-link";
            if (paneName === _this2.state.activeTab) {
                className = "nav-item nav-link active";
            }
            return _react2.default.createElement(
                "a",
                { href: "#", "class": className, onClick: function onClick(event) {
                        return _this2.handleTabOnClick(event, paneName);
                    } },
                pane.props.title
            );
        });

        var panes = _react2.default.Children.toArray(this.props.children);
        var activePane = panes.filter(function (pane) {
            return pane.props.name === _this2.state.activeTab;
        });

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                "div",
                { "class": "nav nav-tabs" },
                items
            ),
            _react2.default.createElement(
                "div",
                { "class": "tab-content", id: "nav-tabContent" },
                activePane
            )
        );
    };

    return Tab;
}(_react2.default.Component), _class.defaultProps = {
    activeTab: null
}, _temp);
exports.default = Tab;

var TabPane = exports.TabPane = function (_React$Component2) {
    _inherits(TabPane, _React$Component2);

    function TabPane(props) {
        _classCallCheck(this, TabPane);

        return _possibleConstructorReturn(this, _React$Component2.call(this, props));
    }

    TabPane.prototype.render = function render() {
        var className = "tab-pane fade show active";

        return _react2.default.createElement(
            "div",
            { className: className },
            this.props.children
        );
    };

    return TabPane;
}(_react2.default.Component);