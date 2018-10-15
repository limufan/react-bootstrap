'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = (_temp = _class = function (_React$Component) {
    _inherits(Upload, _React$Component);

    function Upload(props, context) {
        _classCallCheck(this, Upload);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleSuccess = function (model) {
            var _this$props = _this.props,
                onSuccess = _this$props.onSuccess,
                onChange = _this$props.onChange;


            var src = model.data && model.data.msg;
            if (onSuccess) {
                onSuccess(model);
            }
            if (onChange) {
                onChange({ value: src }, _this);
            }
        };

        return _this;
    }

    Upload.prototype.render = function render() {
        var _props = this.props,
            style = _props.style,
            headers = _props.headers,
            action = _props.action,
            accept = _props.accept;


        return _react2.default.createElement(
            _rcUpload2.default,
            { style: style, headers: headers, action: action, accept: accept, onSuccess: this.handleSuccess },
            this.props.children
        );
    };

    return Upload;
}(_react2.default.Component), _class.defaultProps = {
    // action: `${config.API_BASE_URL}/upload/UploadFile`,
    // headers: {Authorization: "Bearer " + cookie.get("token"), "X-Requested-With": null}
}, _temp);
exports.default = Upload;
module.exports = exports['default'];