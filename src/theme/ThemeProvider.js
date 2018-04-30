import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import './global'
import theme from './defaultTheme'

const ThemeProvider = props => (
  <StyledThemeProvider theme={props.theme || theme}>
    {props.children}
  </StyledThemeProvider>
)

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ])
}

export default ThemeProvider
