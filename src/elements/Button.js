import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { space, fontWeight, borderRadius, buttonStyle } from "styled-system";
import theme from "../theme/defaultTheme";

const size = props => {
  switch (props.size) {
    case "small":
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: "7px 12px"
      };
    case "medium":
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px"
      };
    case "large":
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: "12px 22px"
      };
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px"
      };
  }
};

const fullWidth = props => (props.fullWidth ? { width: "100%" } : null);

const StyledButton = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  line-height: ${theme.lineHeight[2]};
  cursor: pointer;
  ${fullWidth} ${size} ${space} ${fontWeight} ${borderRadius} ${buttonStyle}
`;

const nsa = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
]);

class Button extends Component {
  static propTypes = {
    /** Size */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    fullWidth: PropTypes.bool,
    /** Margin */
    m: nsa,
    mt: nsa,
    mr: nsa,
    mb: nsa,
    ml: nsa,
    mx: nsa,
    my: nsa,
    /** Padding */
    p: nsa,
    pt: nsa,
    pr: nsa,
    pb: nsa,
    pl: nsa,
    px: nsa,
    py: nsa,
    /** a11y */
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    busy: PropTypes.bool,
    children: PropTypes.any
  };

  static defaultProps = {
    theme: theme,
    type: "button",
    disabled: false,
    fontWeight: "bold",
    buttonStyle: "default"
  };

  render() {
    let { disabled, label, type, children, ...props } = this.props;

    return (
      <StyledButton
        {...props}
        tabIndex="-1"
        title={label}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={label}
      >
        {children}
      </StyledButton>
    );
  }
}

StyledButton.displayName = "Button";

export default Button;
