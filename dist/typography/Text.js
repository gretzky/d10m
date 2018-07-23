"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _defaultTheme = _interopRequireDefault(require("../theme/defaultTheme"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var align = (0, _styledSystem.responsiveStyle)("text-align", "align");

var Text = _styledComponents.default.div(_templateObject, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, _styledSystem.fontWeight, align);

Text.displayName = "Text"; // lol nsa

var nsa = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array]);

Text.propTypes = {
  fontSize: nsa,
  align: _propTypes.default.oneOf(["left", "center", "right", "justify"]),
  fontWeight: _propTypes.default.number,
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
Text.defaultProps = {
  theme: _defaultTheme.default
};
Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");
Text.s = Text.withComponent("s");
var _default = Text;
exports.default = _default;