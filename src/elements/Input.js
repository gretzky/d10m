import React, { Component } from "react";
import styled from "styled-components";
import {
  space,
  fontWeight,
  borderRadius,
  bg,
  borders,
  color
} from "styled-system";
import PropTypes from "prop-types";
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

const StyledInput = styled.input`
  appearance: none;
  display: block;
  font-family: inherit;
  ${space} ${size} ${fullWidth} ${fontWeight} ${borderRadius} ${bg} ${borders} ${color};
`;

const nsa = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
]);

class Input extends Component {
  static propTypes = {
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
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    tabIndex: PropTypes.string,
    nodeRef: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    theme: theme,
    type: "text",
    disabled: false,
    readOnly: false,
    border: `${theme.borders[1]} solid ${theme.colors.black}`,
    color: `${theme.colors.black}`,
    fontWeight: 600
  };

  render() {
    let {
      disabled,
      type,
      nodeRef,
      tabIndex,
      readOnly,
      placeholder,
      ...props
    } = this.props;

    return (
      <StyledInput
        {...props}
        type={type}
        ref={nodeRef}
        tabIndex={tabIndex || 0}
        autoComplete="off"
        disabled={disabled}
        readOnly={readOnly}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
