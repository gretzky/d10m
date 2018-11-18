import { Transitions, Colors, Font, Breakpoints, Theme } from '../types/theme'

const colors: Colors = {
  dark: {
    black: '#1a1a1a',
    white: '#fbfbfb',
    primary: '#4083ff',
    secondary: '#7b8bbd',
    error: '#ff433a',
    warning: '#ffe63c',
    success: '#45ea7f',
    info: '#4aeadb'
  },
  light: {
    black: '#1a1a1a',
    white: '#fbfbfb',
    primary: '#1564ff',
    secondary: '#4e5775',
    error: '#dd000f',
    warning: '#8a7200',
    success: '#00860e',
    info: '#008080'
  }
}

const font: Font = {
  family:
    "-apple-system, system-ui, BlinkMacSystemFont, 'SegoeUI', 'Oxygen-Sans', Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  size: [14, 16, 20, 24, 32, 48, 64],
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    heavy: 900
  },
  lineHeight: [1, 1.25, 1.5, 1.75, 2]
}

const space: Array<number> = [0, 4, 8, 16, 32, 64, 128]

const breakpoints: Breakpoints = {
  xs: 20,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
}

const transitions: Transitions = {
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

const theme: Theme = {
  colors,
  font,
  space,
  breakpoints,
  transitions
}

export default theme