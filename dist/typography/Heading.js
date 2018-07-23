"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Text = _interopRequireDefault(require("./Text"));

var _defaultTheme = _interopRequireDefault(require("../theme/defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = _Text.default.withComponent("h3");

Heading.displayName = "Heading";
Heading.defaultProps = {
  regular: true,
  fontSize: 4,
  m: 0,
  theme: _defaultTheme.default
};
Heading.h1 = Heading.withComponent("h1");
Heading.h1.defaultProps = {
  bold: true,
  fontSize: 6,
  m: 0
};
Heading.h2 = Heading.withComponent("h2");
Heading.h2.defaultProps = {
  bold: true,
  fontSize: 5,
  m: 0
};
Heading.h3 = Heading.withComponent("h3");
Heading.h3.defaultProps = {
  regular: true,
  fontSize: 4,
  m: 0
};
Heading.h4 = Heading.withComponent("h4");
Heading.h4.defaultProps = {
  regular: true,
  fontSize: 3,
  m: 0
};
Heading.h5 = Heading.withComponent("h5");
Heading.h5.defaultProps = {
  bold: true,
  fontSize: 2,
  m: 0
};
Heading.h6 = Heading.withComponent("h6");
Heading.h6.defaultProps = {
  bold: true,
  caps: true,
  fontSize: 0,
  m: 0
};
var _default = Heading;
exports.default = _default;