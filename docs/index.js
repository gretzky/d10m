import React from 'react'
import { render } from 'react-dom'
import {
  LiveProvider,
  LivePreview,
  LiveEditor
} from 'react-live'

import 'd10m/global'
import { ThemeProvider, theme, Wrapper, Flex } from 'd10m'

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
