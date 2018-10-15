"use strict";

exports.__esModule = true;
exports.Loading = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./css/loaders.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = exports.Loading = (_temp = _class = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading(props, context) {
        _classCallCheck(this, Loading);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {
            show: props.show
        };
        return _this;
    }

    Loading.prototype.componentDidMount = function componentDidMount() {};

    Loading.prototype.render = function render() {
        var _this2 = this;

        var style = {};
        if (!this.state.show) {
            style.display = "none";
        }
        return _react2.default.createElement(
            "div",
            { ref: function ref(el) {
                    return _this2._element = el;
                }, className: "shadow", style: style },
            _react2.default.createElement(
                "div",
                { "class": "loader-inner ball-pulse" },
                _react2.default.createElement("div", null),
                _react2.default.createElement("div", null),
                _react2.default.createElement("div", null)
            )
        );
    };

    Loading.prototype.show = function show(message, duration) {
        this.setState({ show: true });
    };

    Loading.prototype.hide = function hide(message, duration) {
        this.setState({ show: false });
    };

    return Loading;
}(_react2.default.Component), _class.defaultProps = {
    show: false
}, _temp);


var CONTAINER_ID = "__loadingContainer__";
var container = null;
var showed = false;

function newLoading(refCallback) {
    container = document.getElementById(CONTAINER_ID);
    if (container === null) {
        container = document.createElement('div');
        container.id = CONTAINER_ID;
        document.body.appendChild(container);
    }

    _reactDom2.default.render(_react2.default.createElement(Loading, { show: true }), container);
};

var loading = {
    show: function show() {
        if (showed) {
            return;
        }

        newLoading();
        showed = true;
    },
    hide: function hide() {
        if (container) {
            _reactDom2.default.unmountComponentAtNode(container);
            showed = false;
        }
    }
};

exports.default = loading;