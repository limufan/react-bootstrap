'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = (_temp = _class = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props, context) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleClick = function () {
            _this.expand();
            _this.select();
        };

        _this.handleIconClick = function (event) {
            _this.toggle();
            event.stopPropagation();
        };

        _this._tree = context.tree;
        _this._tree.addNode(_this);
        _this._nodes = [];
        _this.state = {};
        var node = props.node;

        _this._loaded = node.loaded;
        return _this;
    }

    TreeNode.prototype.render = function render() {
        var style = this.props.style;
        var selected = this.state.selected;


        var className = "ywpui_tree_node";
        if (selected) {
            className += ' selected';
        }
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return _react2.default.createElement(
            'div',
            { className: className, style: style },
            _react2.default.createElement(
                'div',
                { className: 'ywpui_tree_node_content', onClick: this.handleClick },
                _react2.default.createElement(
                    _.Row,
                    { noGutters: true },
                    _react2.default.createElement(
                        _.Col,
                        { auto: true },
                        this.renderIcon()
                    ),
                    _react2.default.createElement(
                        _.Col,
                        null,
                        this.renderContent(),
                        this.props.children
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ywpui_tree_node_children' },
                this.renderNodes()
            )
        );
    };

    TreeNode.prototype.renderIcon = function renderIcon() {
        var node = this.props.node;
        var expanded = this.state.expanded;

        if (this._loaded && (!node.nodes || !node.nodes.length)) {
            return _react2.default.createElement(_.Icon, { type: _.Icon.type.treeCollapse, onClick: this.handleIconClick });
        } else if (expanded) {
            return _react2.default.createElement(_.Icon, { type: _.Icon.type.treeCollapse, onClick: this.handleIconClick });
        } else {
            return _react2.default.createElement(_.Icon, { type: _.Icon.type.treeExpand, onClick: this.handleIconClick });
        }
    };

    TreeNode.prototype.renderContent = function renderContent() {
        var _props = this.props,
            node = _props.node,
            render = _props.render;

        if (render) {
            return render(node, this);
        }

        return node.text;
    };

    TreeNode.prototype.renderNodes = function renderNodes() {
        var _this2 = this;

        var expanded = this.state.expanded;

        if (!expanded) {
            return null;
        }

        var _props2 = this.props,
            node = _props2.node,
            load = _props2.load,
            render = _props2.render,
            onSelect = _props2.onSelect;


        if (node.nodes) {
            return node.nodes.map(function (node) {
                return _react2.default.createElement(TreeNode, { parent: _this2, node: node, load: load, render: render, key: node.value || node.text, onSelect: onSelect });
            });
        }

        return null;
    };

    TreeNode.prototype.componentWillUnmount = function componentWillUnmount() {
        this._tree.removeNode(this);
    };

    TreeNode.prototype.toggle = function toggle() {
        var expanded = this.state.expanded;

        if (expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    TreeNode.prototype.expand = function expand() {
        this.load();
        this.setState({ expanded: true });
    };

    TreeNode.prototype.collapse = function collapse() {
        this.setState({ expanded: false });
    };

    TreeNode.prototype.select = function select() {
        var _props3 = this.props,
            onSelect = _props3.onSelect,
            node = _props3.node;

        if (onSelect) {
            onSelect(node, this);
        }
        if (this.onSelect) {
            this.onSelect(node, this);
        }
        this.setState({ selected: true });
    };

    TreeNode.prototype.unselect = function unselect() {
        var _props4 = this.props,
            onUnselect = _props4.onUnselect,
            node = _props4.node;

        if (onUnselect) {
            onUnselect(node, this);
        }
        this.setState({ selected: false });
    };

    TreeNode.prototype.isSelected = function isSelected() {
        return this.state.selected;
    };

    TreeNode.prototype.getParent = function getParent() {
        return this.props.parent;
    };

    TreeNode.prototype.getNodeInfo = function getNodeInfo() {
        return this.props.node;
    };

    TreeNode.prototype.getText = function getText() {
        return this.props.node.text;
    };

    TreeNode.prototype.getValue = function getValue() {
        return this.props.node.value;
    };

    TreeNode.prototype.load = function load() {
        var _props5 = this.props,
            node = _props5.node,
            load = _props5.load;

        if (!this._loaded && load) {
            var nodes = load(node, this);
            node.nodes = nodes;
            this._loaded = true;
            this._tree.triggerNodeOnLoad(node, this);
        }
    };

    return TreeNode;
}(_react2.default.Component), _class.contextTypes = {
    tree: _propTypes2.default.any
}, _temp);
exports.default = TreeNode;
module.exports = exports['default'];