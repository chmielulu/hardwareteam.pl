import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { primary, secondary, tertiary } from "@constants/types";
import { rgba } from "polished";
import { InlineIcon } from "@iconify/react";

const StyledButton = styled.button`
  ${({ theme }) => useFontSize(theme)}
  background: ${({ theme, type }) =>
    type === tertiary ? theme[secondary] : theme[type]};
  border: 0;
  color: #fff;
  padding: 15px 25px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;

  :focus {
    box-shadow: 0 0 0 4px ${({ theme, type }) =>
      rgba(type === tertiary ? theme[secondary] : theme[type], 0.4)};
  }

  ${({ type, theme }) =>
    type === "tertiary" &&
    css`
      background: transparent;
      border: 1.5px solid ${theme.secondary};
      color: ${theme.secondary};
      font-weight: 300;

      :focus {
        box-shadow: 0 0 0 2px
          ${({ theme, type }) =>
            rgba(type === tertiary ? theme[secondary] : theme[type], 0.4)};
      }
    `}
`;

const StyledInlineIcon = styled(InlineIcon)`
  font-size: 2.2rem;
  margin-right: 12px;

  ${({ position }) =>
    position === "right" &&
    css`
      margin-right: 0;
      margin-left: 10px;
      order: 1;
    `}
`;

const Button = ({ children, type, icon, position, ...props }) => (
  <StyledButton type={type} {...props}>
    {icon && <StyledInlineIcon icon={icon} position={position} />}
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([primary, secondary, tertiary]),
  icon: PropTypes.object,
  position: PropTypes.oneOf(["left", "right"]),
};

Button.defaultProps = {
  children: "",
  type: primary,
  icon: null,
  position: "left",
};

export default Button;
