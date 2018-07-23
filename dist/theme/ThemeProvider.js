"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

require("./global");

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function ThemeProvider(props) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: props.theme || _defaultTheme.default
  }, props.children);
};

ThemeProvider.propTypes = {
  theme: _propTypes.default.object,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var _default = ThemeProvider;
exports.default = _default;