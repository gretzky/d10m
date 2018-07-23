const black = '#000';
const white = '#fff';
const lightGray = '#ddd';
const darkGray = '#bbb';
const primary = 'dodgerblue';

const colors = {
  black,
  white,
  lightGray,
  darkGray,
  primary
}

export const space = [0, 4, 8, 16, 32, 64, 128]

const lineHeight = [1, 1.25, 1.5, 1.75, 2]

export const fonts = {
  sans: 'system-ui, sans-serif',
  mono: '"SF Mono", "Roboto Mono", monospace'
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const regular = 400
export const bold = 600
export const fontWeights = {
  regular,
  bold
}

export const breakpoints = [32, 40, 48, 64]

const borders = ['1px', '2px']

const transitions = {
  duration: {
    fast: `150ms`,
    normal: `300ms`,
    slow: `450ms`,
    slowest: `600ms`
  },
  timing: {
    easeInOut: 'cubic-bezier(0.5, 0, 0.25, 1)',
    easeIn: 'cubic-bezier(0.5, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.25, 1)'
  }
}

const buttons = {
  default: {
    color: `${colors.black}`,
    border: `${borders[1]} solid ${colors.black}`,
    backgroundColor: 'transparent',
    transition: `all ${transitions.duration.normal} ${
      transitions.timing.easeInOut
    }`,
    '&:hover': {
      backgroundColor: `${colors.black}`,
      color: `${colors.white}`
    },
    '&:disabled': {
      opacity: '0.5'
    }
  },
  primary: {
    color: `${colors.primary}`,
    border: `${borders[1]} solid ${colors.primary}`,
    backgroundColor: 'transparent',
    transition: `all ${transitions.duration.normal} ${
      transitions.timing.easeInOut
    }`,
    '&:hover': {
      backgroundColor: `${colors.primary}`,
      color: `${colors.white}`
    },
    '&:disabled': {
      opacity: '0.5'
    }
  }
}

const colorStyles = {
  default: {
    border: '2px solid black',
    color: 'black'
  }
}

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  breakpoints,
  borders,
  buttons,
  transitions,
  lineHeight,
  colorStyles
}

export default theme
