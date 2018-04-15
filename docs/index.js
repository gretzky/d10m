import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider, theme, Wrapper } from 'd10m'

const App = () => (
  <h1>hello</h1>
)

render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <App />
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('root')
)
