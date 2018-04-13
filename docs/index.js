import React from 'react'
import { render } from 'react-dom'
import {
  LiveProvider,
  LivePreview,
  LiveEditor
} from 'react-live'

import '../src/global'
import { ThemeProvider, theme, Wrapper, Flex } from '../src'

const App = () => (
  <LiveProvider code='<strong>hello</strong>'>
    <Flex>
      <LiveEditor />
      <LivePreview />
    </Flex>
  </LiveProvider>
)

render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <App />
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('root')
)
