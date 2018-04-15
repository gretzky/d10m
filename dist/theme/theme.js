"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.breakpoints = exports.fontWeights = exports.bold = exports.regular = exports.fontSizes = exports.fonts = exports.space = void 0;
var black = '#000';
var white = '#fff';
var lightGray = '#ddd';
var darkGray = '#bbb';
var colors = {
  black: black,
  white: white,
  lightGray: lightGray,
  darkGray: darkGray
};
var space = [0, 4, 8, 16, 32, 64, 128];
exports.space = space;
var fonts = {
  sans: 'system-ui, sans-serif',
  mono: '"SF Mono", "Roboto Mono", monospace'
};
exports.fonts = fonts;
var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
exports.fontSizes = fontSizes;
var regular = 400;
exports.regular = regular;
var bold = 600;
exports.bold = bold;
var fontWeights = {
  regular: regular,
  bold: bold
};
exports.fontWeights = fontWeights;
var breakpoints = [32, 40, 48, 64];
exports.breakpoints = breakpoints;
var theme = {
  colors: colors,
  space: space,
  fonts: fonts,
  fontSizes: fontSizes,
  breakpoints: breakpoints
};
var _default = theme;
exports.default = _default;