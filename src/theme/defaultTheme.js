const black = '#000'
const white = '#fff'
const lightGray = '#ddd'
const darkGray = '#bbb'

const colors = {
  black,
  white,
  lightGray,
  darkGray
}

export const space = [0, 4, 8, 16, 32, 64, 128]

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

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  breakpoints
}

export default theme
