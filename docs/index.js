import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider, Wrapper } from 'd10m'

const App = () => (
  <h1>hello</h1>
)

render(
  <ThemeProvider>
    <Wrapper>
      <App />
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('root')
)
