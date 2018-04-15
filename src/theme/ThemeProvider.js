import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import './global'
import theme from './defaultTheme'

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ])
}

export default ThemeProvider
