import React from 'react'
import PropTypes from 'prop-types'
import theme from './theme'

const ThemeProvider = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}

export default ThemeProvider
