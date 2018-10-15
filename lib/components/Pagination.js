"use strict";

exports.__esModule = true;
exports.default = exports.DEFAULT_PAGE_SIZE = undefined;

var _class, _temp, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./css/pagination.css");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE_SIZE = exports.DEFAULT_PAGE_SIZE = 10;

var Pagination = (_temp = _class = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handlePageItemClick = function (event, pageIndex) {
            _this.setPageIndex(pageIndex);
        };

        _this.handlePreviousPageClick = function (event) {
            _this.previous();
        };

        _this.handleNextPageClick = function (event) {
            _this.next();
        };

        _this.handleBtnClick = function (event) {
            var customPageIndex = Number.parseInt(_this.state.customPageValue);
            if (customPageIndex > _this.state.pageCount) {
                customPageIndex = _this.state.pageCount;
            }
            if (customPageIndex < 1) {
                customPageIndex = 1;
            }
            if (!customPageIndex) {
                customPageIndex = 1;
            }
            _this.setPageIndex(customPageIndex);
            _this.setState({ customPageValue: customPageIndex });
        };

        _this.handleCustomPageChange = function (event) {
            _this.setState({ customPageValue: event.target.value });
        };

        _this.togglePageSizeClick = function () {
            _this.setState({ showPageSizeMenu: !_this.state.showPageSizeMenu });
        };

        var pageCount = _this.getPageCount(props.total, props.pageSize);
        _this.state = {
            pageIndex: props.pageIndex,
            pageSize: props.pageSize,
            pageCount: pageCount,
            showPageSizeMenu: false,
            customPageValue: ''
        };
        return _this;
    }

    Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        var needSetCount = false;
        var total = this.props.total;
        var pageSize = this.props.pageSize;
        if (props.total !== this.props.total) {
            needSetCount = true;
            total = props.total;
        }
        if (props.pageIndex && props.pageIndex !== this.props.pageIndex) {
            this.setState({ pageIndex: props.pageIndex });
        }
        if (props.pageSize && props.pageSize !== this.props.pageSize) {
            this.setState({ pageSize: props.pageSize });
            needSetCount = true;
            pageSize = props.pageSize;
        }
        if (needSetCount) {
            var pageCount = this.getPageCount(total, pageSize);
            this.setState({ pageCount: pageCount });
        }
    };

    Pagination.prototype.next = function next() {
        var pageIndex = this.state.pageIndex;
        pageIndex++;
        if (pageIndex > this.state.pageCount) {
            pageIndex = this.state.pageCount;
        }
        this.setPageIndex(pageIndex);
    };

    Pagination.prototype.previous = function previous(event) {
        var pageIndex = this.state.pageIndex;
        pageIndex--;
        if (pageIndex < 1) {
            pageIndex = 1;
        }

        this.setPageIndex(pageIndex);
    };

    Pagination.prototype.setPageIndex = function setPageIndex(pageIndex) {
        this.setState({ pageIndex: pageIndex });

        if (this.props.onChange) {
            var args = {
                pageIndex: pageIndex,
                pageSize: this.state.pageSize
            };
            this.props.onChange(args, this);
        }
    };

    Pagination.prototype.changePageSize = function changePageSize(pageSize) {
        this.setState({ pageSize: pageSize });
        this.setState({ showPageSizeMenu: false });

        var pageCount = this.getPageCount(this.props.total, pageSize);
        this.setState({ pageCount: pageCount });

        if (this.props.onChange) {
            var args = {
                pageIndex: this.state.pageIndex,
                pageSize: pageSize
            };
            this.props.onChange(args);
        }
    };

    Pagination.prototype.render = function render() {
        var _state = this.state,
            pageCount = _state.pageCount,
            pageIndex = _state.pageIndex;


        return _react2.default.createElement(
            _.Row,
            { className: "ywpui_pager", style: this.props.style },
            this.renderChildren(),
            _react2.default.createElement(
                _.Col,
                { auto: true, marginLeftAuto: true },
                _react2.default.createElement(
                    "div",
                    { className: "ywpui_total" },
                    _react2.default.createElement(
                        "div",
                        { className: "ywpui_total_count" },
                        "\u5171",
                        _react2.default.createElement(
                            "span",
                            null,
                            this.props.total
                        ),
                        "\u6761\u6570\u636E"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "ywpui_total_count" },
                        _react2.default.createElement(
                            "span",
                            null,
                            pageIndex,
                            "/",
                            pageCount
                        ),
                        "\u9875"
                    )
                ),
                this.renderPageSizeSelect(),
                _react2.default.createElement(
                    "ul",
                    { className: "ywpui_pagination" },
                    _react2.default.createElement(
                        PageItem,
                        { disabled: this.state.pageIndex <= 1, onClick: this.state.pageIndex <= 1 ? null : this.handlePreviousPageClick },
                        "\u4E0A\u4E00\u9875"
                    ),
                    this.renderPageSelect(),
                    _react2.default.createElement(
                        PageItem,
                        { disabled: this.state.pageIndex >= pageCount, onClick: this.state.pageIndex >= pageCount ? null : this.handleNextPageClick },
                        "\u4E0B\u4E00\u9875"
                    )
                ),
                this.renderJump()
            )
        );
    };

    Pagination.prototype.renderChildren = function renderChildren() {
        var children = this.props.children;

        if (children) {
            return _react2.default.createElement(
                _.Col,
                { auto: true },
                children
            );
        }

        return null;
    };

    Pagination.prototype.renderPageSizeSelect = function renderPageSizeSelect() {
        var _this2 = this;

        var simple = this.props.simple;

        if (simple) {
            return null;
        }

        var pageSizeMenuStyle = this.state.showPageSizeMenu ? { display: 'block' } : { display: 'none' };
        return _react2.default.createElement(
            "div",
            { className: "ywpui_display" },
            _react2.default.createElement(
                "div",
                { className: "ywpui_display_num", onClick: this.togglePageSizeClick },
                _react2.default.createElement(
                    "span",
                    null,
                    this.state.pageSize,
                    "\u6761"
                ),
                _react2.default.createElement("i", null)
            ),
            _react2.default.createElement(
                "ul",
                { className: "ywpui_display_num_list", style: pageSizeMenuStyle },
                _react2.default.createElement(
                    "li",
                    { onClick: function onClick(e) {
                            return _this2.changePageSize(10);
                        } },
                    "10\u6761"
                ),
                _react2.default.createElement(
                    "li",
                    { onClick: function onClick(e) {
                            return _this2.changePageSize(30);
                        } },
                    "30\u6761"
                ),
                _react2.default.createElement(
                    "li",
                    { onClick: function onClick(e) {
                            return _this2.changePageSize(50);
                        } },
                    "50\u6761"
                )
            )
        );
    };

    Pagination.prototype.renderPageSelect = function renderPageSelect() {
        var _props = this.props,
            dispalyPageCount = _props.dispalyPageCount,
            simple = _props.simple;

        if (simple) {
            return null;
        }

        var pageItems = [];
        var _state2 = this.state,
            pageCount = _state2.pageCount,
            pageIndex = _state2.pageIndex;


        var index = 1;

        pageItems.push(this.getPageItem(index++));

        if (pageIndex > 3 && pageCount > dispalyPageCount + 1) {
            index = pageIndex - Math.floor(dispalyPageCount / 2);

            if (index >= pageCount - dispalyPageCount) {
                index = pageCount - dispalyPageCount;
            }
        }

        if (index > 2) {
            pageItems.push(_react2.default.createElement(
                PageItem,
                { disabled: true },
                "..."
            ));
        }
        var dispalyPageItemLength = 0;
        for (; index <= pageCount; index++) {
            pageItems.push(this.getPageItem(index));
            dispalyPageItemLength++;
            if (dispalyPageItemLength >= dispalyPageCount) {
                break;
            }
        }
        if (index < pageCount - 1) {
            pageItems.push(_react2.default.createElement(
                PageItem,
                { disabled: true },
                "..."
            ));
        }
        if (index < pageCount) {
            pageItems.push(this.getPageItem(pageCount));
        }

        return pageItems;
    };

    Pagination.prototype.renderJump = function renderJump() {
        var simple = this.props.simple;

        if (simple) {
            return null;
        }

        return _react2.default.createElement(
            "div",
            { className: "ywpui_pageJump" },
            _react2.default.createElement(
                "span",
                null,
                "\u8DF3\u8F6C"
            ),
            _react2.default.createElement("input", { type: "number", value: this.state.customPageValue, onChange: this.handleCustomPageChange }),
            _react2.default.createElement(
                "span",
                null,
                "\u9875"
            ),
            _react2.default.createElement(
                "button",
                { type: "button", className: "button", onClick: this.handleBtnClick },
                "\u786E\u5B9A"
            )
        );
    };

    Pagination.prototype.getPageItem = function getPageItem(index) {
        var _this3 = this;

        return _react2.default.createElement(
            PageItem,
            {
                active: this.state.pageIndex === index,
                onClick: function onClick(event) {
                    return _this3.handlePageItemClick(event, index);
                } },
            index
        );
    };

    Pagination.prototype.getPageCount = function getPageCount(total, pageSize) {
        var pageCount = Math.floor(total / pageSize);
        if (total % pageSize > 0) {
            pageCount += 1;
        }

        return pageCount;
    };

    Pagination.prototype.fireKeyDown = function fireKeyDown(event) {
        if (event.keyCode === _.KeyCode.PAGE_DOWN) {
            this.next();
        }
        if (event.keyCode === _.KeyCode.PAGE_UP) {
            this.previous();
        }

        if (event.keyCode === _.KeyCode.PAGE_DOWN || event.keyCode === _.KeyCode.PAGE_UP) {
            event.stopPropagation();
            event.preventDefault();
        }
    };

    return Pagination;
}(_react2.default.Component), _class.defaultPageSize = DEFAULT_PAGE_SIZE, _class.defaultProps = {
    total: 0,
    pageSize: DEFAULT_PAGE_SIZE,
    pageIndex: 1,
    dispalyPageCount: 5,
    simple: false
}, _temp);
exports.default = Pagination;
var PageItem = (_temp2 = _class2 = function (_React$Component2) {
    _inherits(PageItem, _React$Component2);

    function PageItem(props) {
        _classCallCheck(this, PageItem);

        var _this4 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this4.handleClick = function (event) {
            event.preventDefault();
            if (_this4.props.onClick) {
                _this4.props.onClick(event);
            }
        };

        return _this4;
    }

    PageItem.prototype.render = function render() {
        var classNames = ["ywpui_pagination_item"];
        if (this.props.active) {
            classNames.push("active");
        }
        if (this.props.disabled) {
            classNames.push("disabled");
        }
        return _react2.default.createElement(
            "li",
            { onClick: this.handleClick, className: classNames.join(" ") },
            _react2.default.createElement(
                "a",
                { href: "javascript:void(0)" },
                this.props.children
            )
        );
    };

    return PageItem;
}(_react2.default.Component), _class2.defaultProps = {
    active: false,
    disabled: false
}, _temp2);