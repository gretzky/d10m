"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function ThemeProvider(props) {
  return _react.default.createElement(ThemeProvider, {
    theme: _theme.default
  }, props.children);
};

ThemeProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var _default = ThemeProvider;
exports.default = _default;