![](./banner.png)

A baseline style for React apps that use css-in-js. Essentially just a wrapper around [styled-system](https://github.com/jxnblk/styled-system) with some accessible extras.

## Getting Started

Install into any React project.

```
yarn add d10m
```

## Usage

`d10m` includes a global reset as well as normalized components. It also includes a flexible Text component.

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

### Components

**Global**

`d10m` comes with a global 'normalizer', which is based off of [reset.css](https://meyerweb.com/eric/tools/css/reset/) and [normalize.css](https://necolas.github.io/normalize.css/)

**Text**

```
import { Text, Heading } from 'd10m'

const Test = () => (
  <div>
    <Text>some regular text</Text>
    <Heading.h1>header</Header.h1>
  </div>
)
```

## Related / Shoutouts

- [styled-system](https://github.com/jxnblk/styled-system)

```

```
