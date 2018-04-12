"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.breakpoints = exports.fontSizes = exports.font = exports.space = void 0;
var space = [0, 4, 8, 16, 32, 64, 128];
exports.space = space;
var font = "-apple-system";
exports.font = font;
var fontSizes = [12, 14, 16, 20, 24, 32, 48];
exports.fontSizes = fontSizes;
var breakpoints = [32, 40, 48, 64];
exports.breakpoints = breakpoints;
var theme = {
  space: space,
  font: font,
  fontSizes: fontSizes,
  breakpoints: breakpoints
};
var _default = theme;
exports.default = _default;