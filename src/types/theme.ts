interface ColorScheme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

interface Colors {
  dark: ColorScheme;
  light: ColorScheme;
}

interface Font {
  family: string;
  size: Array<number>;
  weight: {
    regular: number;
    semibold: number;
    bold: number;
    heavy: number;
  };
  lineHeight: Array<number>;
}

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Transitions {
  duration: {
    fast: string;
    normal: string;
    slow: string;
    slowest: string;
  };
  timing: {
    easeInOut: string;
    easeIn: string;
    easeOut: string;
  };
}

interface Theme {
  colors: Colors;
  font: Font;
  space: Array<number>;
  breakpoints: Breakpoints;
  transitions: Transitions;
}

export { Theme, Transitions, Breakpoints, Font, Colors };
