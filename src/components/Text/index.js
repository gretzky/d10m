import * as React from "react";
import styled from "styled-components";
import { StyledText, StyledDfn, StyledA } from "./styles";
import theme from "../../styles/theme";

export const Text = () => (
  <StyledText fontSize={[theme.font.size[0], theme.font.size[1]]} />
);

export const Dfn = () => (
  <StyledDfn fontSize={[theme.font.size[0], theme.font.size[1]]} />
);

export const A = () => (
  <StyledA fontSize={[theme.font.size[0], theme.font.size[1]]} />
);

export const Heading = styled(Text).withComponent("h3");

Heading.defaultProps = {
  m: 0,
  fontSize: [2, 3, 4]
};

Heading.h1 = Heading.withComponent("h1");
Heading.h1.defaultProps = {
  m: 0,
  fontSize: [4, 5, 6]
};

Heading.h2 = Heading.withComponent("h2");
Heading.h2.defaultProps = {
  m: 0,
  fontSize: [3, 4, 5]
};

Heading.h3 = Heading.withComponent("h3");
Heading.h3.defaultProps = {
  m: 0,
  fontSize: [2, 3, 4]
};

Heading.h4 = Heading.withComponent("h4");
Heading.h4.defaultProps = {
  m: 0,
  fontSize: [1, 2, 3],
  fontWeight: "bold"
};

Heading.h5 = Heading.withComponent("h5");
Heading.h5.defaultProps = {
  m: 0,
  fontWeight: "regular",
  fontSize: [1, 2, 3]
};

Heading.h6 = Heading.withComponent("h6");
Heading.h6.defaultProps = {
  m: 0,
  fontSize: 0
};
