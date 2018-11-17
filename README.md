![](./banner.png)

Baseline CSS for any React app. A styled-components wrapper around normalize.css / reset.css as well as a WCAG-compliant theme.

## Getting Started

Install into any React project.

```
yarn add global-reset
```

## Usage

### Global

Import the `Global` component as the first child in your root component.

```javascript
import React from "react";
import { render } from "react-dom";
import { Global } from "d10m";
import theme from "./theme";

const App = () => <h1 style={{ color: theme.primary }}>hello world</h1>;

render(
  <div>
    <Global />
    <App />
  </div>,
  document.getElementById("root")
);
```

### Theme

A theme object with WCAG-compliant, a11y colors.

There are 2 color schemes (light and dark) for usage with the correct background, i.e. `theme.dark.primary` should be used against the black background color.

```
import { theme } from 'd10m'

const Text = () => (
  <div style={{ backgroundColor: theme.dark.black }}>
    <p style={{ color: theme.dark.primary }}>hello</p>
  </div>
)
```
