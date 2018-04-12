"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 90%;\n  ", "\n\n  @media only screen and (min-width: 1140px) {\n    width: 80%;\n    ", "\n  }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject, _styledSystem.space, _styledSystem.space);

var nsa = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array]);

Wrapper.propTypes = {
  m: nsa,
  mt: nsa,
  mr: nsa,
  mb: nsa,
  ml: nsa,
  mx: nsa,
  my: nsa,
  p: nsa,
  pt: nsa,
  pr: nsa,
  pb: nsa,
  pl: nsa,
  px: nsa,
  py: nsa
};
Wrapper.defaultProps = {
  m: '1em auto'
};
var _default = Wrapper;
exports.default = _default;