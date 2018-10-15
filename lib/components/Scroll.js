"use strict";

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scroll = (_temp = _class = function (_React$Component) {
    _inherits(Scroll, _React$Component);

    function Scroll(props, context) {
        _classCallCheck(this, Scroll);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    Scroll.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var showScroll = this.props.showScroll;

        if (showScroll) {
            this.setSize();
            (0, _jquery2.default)(window).resize(function () {
                _this2.setSize(true);
            });
        }
    };

    Scroll.prototype.componentDidUpdate = function componentDidUpdate() {
        var showScroll = this.props.showScroll;

        if (showScroll) {
            this.setSize();
        }
    };

    Scroll.prototype.setSize = function setSize(windowResized) {
        var $elemet = (0, _jquery2.default)(this._element);

        var heightChanged = false;
        heightChanged = this.setHeight(windowResized);
        var hasXScroll = this.hasXScroll();
        if (hasXScroll) {
            $elemet.css("overflow-x", "auto");
        } else {
            $elemet.css("overflow-x", "visible");
        }

        if (this.props.onChange) {
            this.props.onChange({
                hasYScroll: this.hasYScroll(),
                hasXScroll: hasXScroll,
                height: this._height

            }, this);
        }
    };

    Scroll.prototype.setHeight = function setHeight(windowResized) {
        var changed = false;
        if (this.props.height) {
            return changed;
        }
        var $body = (0, _jquery2.default)(".ywpui_layout_main_content");
        if (!$body.length) {
            $body = (0, _jquery2.default)(document);
        }
        var $elemet = (0, _jquery2.default)(this._element);

        var windowHeight = (0, _jquery2.default)(window).innerHeight();
        var documentHeight = (0, _jquery2.default)(document).innerHeight();
        var elementHeight = $elemet.outerHeight();
        var height = void 0;
        if (documentHeight <= windowHeight) {
            var contentHeight = $body.innerHeight();
            var childrenHeight = this.getChildrenHeight($body);
            height = contentHeight - childrenHeight + elementHeight - this.props.offsetHeight;
            // height = windowHeight - documentHeight + elementHeight - this.props.offsetHeight;
        } else {
            height = windowHeight - documentHeight + elementHeight - this.props.offsetHeight;
            // console.log(windowHeight);
            // console.log(documentHeight);
            // console.log(elementHeight);
            // console.log(height);
        }
        if (this.props.maximize || documentHeight > windowHeight || windowResized) {
            $elemet.outerHeight(height);
            $elemet.css("overflow-y", "auto");

            this._height = height;
            changed = true;
        } else {
            this._height = null;
        }

        return changed;
    };

    Scroll.prototype.getChildrenHeight = function getChildrenHeight($el) {
        var childrenHeight = 0;
        $el.children().each(function (i, child) {
            childrenHeight += (0, _jquery2.default)(child).outerHeight();
        });

        return childrenHeight;
    };

    Scroll.prototype.render = function render() {
        var _this3 = this;

        var style = {};
        if (this.props.height) {
            style.maxHeight = this.props.height;
            style.overflowY = "auto";
        }
        var _props = this.props,
            onScroll = _props.onScroll,
            className = _props.className;

        return _react2.default.createElement(
            "div",
            { className: className, style: style, ref: function ref(el) {
                    return _this3._element = el;
                }, onScroll: onScroll },
            this.props.children
        );
    };

    Scroll.prototype.hasYScroll = function hasYScroll() {
        if (!this._element) {
            return false;
        }
        return this._element.scrollHeight > this._element.clientHeight;
    };

    Scroll.prototype.hasXScroll = function hasXScroll() {
        if (!this._element) {
            return false;
        }
        return this._element.scrollWidth > this._element.clientWidth;
    };

    Scroll.prototype.getYScrollbarSize = function getYScrollbarSize() {
        if (!this._element) {
            return 0;
        }

        return this._element.offsetWidth - this._element.clientWidth;
    };

    Scroll.prototype.getXScrollbarSize = function getXScrollbarSize() {
        if (!this._element) {
            return 0;
        }

        return this._element.offsetHeight - this._element.clientHeight;
    };

    return Scroll;
}(_react2.default.Component), _class.defaultProps = {
    offsetHeight: 0,
    height: null,
    maximize: false,
    showScroll: true
}, _temp);
exports.default = Scroll;
module.exports = exports["default"];