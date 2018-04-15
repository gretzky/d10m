import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider, Wrapper, Heading } from 'd10m'
import theme from './theme'

const App = () => (
  <Heading color={theme.colors.white}>hello</Heading>
)

render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <App />
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('root')
)
