"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _invariant = _interopRequireDefault(require("invariant"));

var _json2mq = _interopRequireDefault(require("json2mq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Media =
/*#__PURE__*/
function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        matches: _this.props.defaultMatches
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "updateMatches", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          matches: _this.mediaQueryList.matches
        });
      }
    }), _temp));
  }

  _createClass(Media, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;
      var targetWindow = this.props.targetWindow || window;
      (0, _invariant.default)(typeof targetWindow.matchMedia === "function", "<Media targetWindow> does not support `matchMedia`.");
      var query = this.props.query;
      if (typeof query !== "string") query = (0, _json2mq.default)(query);
      this.mediaQueryList = targetWindow.matchMedia(query);
      this.mediaQueryList.addListener(this.updateMatches);
      this.updateMatches();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mediaQueryList.removeListener(this.updateMatches);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          render = _props.render;
      var matches = this.state.matches;
      return render ? matches ? render() : null : children ? typeof children === "function" ? children(matches) : !Array.isArray(children) || children.length ? matches ? _react.default.Children.only(children) : null : null : null;
    }
  }]);

  return Media;
}(_react.Component);

Object.defineProperty(Media, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    defaultMatches: _propTypes.default.bool,
    query: propTypes.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.object.isRequired)]).isRequired,
    render: _propTypes.default.func,
    children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
    targetWindow: _propTypes.default.object
  }
});
Object.defineProperty(Media, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    defaultMatches: true
  }
});
var _default = Media;
exports.default = _default;