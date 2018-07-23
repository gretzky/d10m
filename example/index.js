import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, Wrapper, Heading, Button, Input, Link } from '../src';
import theme from './theme';

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default
  console.log('a11y enabled')
  a11y(React, ReactDOM)
}

const App = () => (
  <Heading color={theme.colors.white}>
    hello<Button label='test button'>click me</Button>
    <Input placeholder='your name' />
  </Heading>
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <App />
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('root')
)
