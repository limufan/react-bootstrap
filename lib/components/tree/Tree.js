'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

require('./scss/tree.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = (_temp = _class = function (_React$Component) {
    _inherits(Tree, _React$Component);

    function Tree(props, context) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleNodeSelect = function (args, node) {
            var otherSelectedNode = _this._nodes.find(function (n) {
                return n.isSelected() && n !== node;
            });
            if (otherSelectedNode) {
                otherSelectedNode.unselect();
            }
        };

        _this._nodes = [];
        _this.state = { value: props.value };
        return _this;
    }

    Tree.prototype.getChildContext = function getChildContext() {
        return { tree: this };
    };

    Tree.prototype.render = function render() {
        var style = this.props.style;


        var className = "ywpui_tree";
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return _react2.default.createElement(
            'div',
            { className: className, style: style },
            this.renderNodes(),
            this.props.children
        );
    };

    Tree.prototype.renderNodes = function renderNodes() {
        var _props = this.props,
            nodes = _props.nodes,
            load = _props.load,
            render = _props.render,
            onSelect = _props.onSelect;

        if (nodes && nodes.length) {
            return nodes.map(function (node) {
                return _react2.default.createElement(_TreeNode2.default, { node: node, load: load, render: render, key: node.value || node.text, onSelect: onSelect });
            });
        }

        return null;
    };

    Tree.prototype.addNode = function addNode(node) {
        node.onSelect = this.handleNodeSelect;
        this._nodes.push(node);
    };

    Tree.prototype.removeNode = function removeNode(node) {
        node.onSelect = null;
        this._nodes = this._nodes.filter(function (p) {
            return p !== node;
        });
    };

    Tree.prototype.triggerNodeOnLoad = function triggerNodeOnLoad(args, node) {
        var onLoad = this.props.onLoad;

        if (onLoad) {
            onLoad(args, node);
        }

        this.setState({ nodes: this.props.nodes });
    };

    Tree.prototype.expandFirst = function expandFirst() {
        if (this._nodes && this._nodes.length) {
            this._nodes[0].expand();
        }
    };

    Tree.prototype.selectFirst = function selectFirst() {
        if (this._nodes && this._nodes.length) {
            this._nodes[0].select();
        }
    };

    Tree.prototype.getSelectedNode = function getSelectedNode() {
        if (this._nodes && this._nodes.length) {
            return this._nodes.find(function (n) {
                return n.isSelected();
            });
        }

        return null;
    };

    Tree.prototype.setValue = function setValue(value) {
        this.setState({ value: value });
    };

    return Tree;
}(_react2.default.Component), _class.childContextTypes = {
    tree: _propTypes2.default.any
}, _temp);
exports.default = Tree;
module.exports = exports['default'];