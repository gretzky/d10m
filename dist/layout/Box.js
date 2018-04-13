"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cleanTag = _interopRequireDefault(require("clean-tag"));

var _theme = _interopRequireDefault(require("../theme/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = (0, _styledComponents.default)(_cleanTag.default)([], {
  boxSizing: 'border-box'
}, _styledSystem.width, _styledSystem.space, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.order);
Box.displayName = 'Box';
Box.defaultProps = {
  theme: _theme.default
};
Box.propTypes = _objectSpread({}, _styledSystem.width.propTypes, _styledSystem.space.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.color.propTypes, _styledSystem.flex.propTypes, _styledSystem.order.propTypes);
var _default = Box;
exports.default = _default;