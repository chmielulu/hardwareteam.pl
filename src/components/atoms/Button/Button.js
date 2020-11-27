import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { primary, secondary, tertiary } from "@constants/kinds";
import { rgba } from "polished";
import { InlineIcon } from "@iconify/react";

const StyledButton = styled.button`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  background: ${({ theme, $kind }) =>
    $kind === tertiary ? theme[secondary] : theme[$kind]};
  border: 0;
  color: #fff;
  padding: 15px 25px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :focus {
    box-shadow: 0 0 0 4px ${({ theme, $kind }) =>
      rgba($kind === tertiary ? theme[secondary] : theme[$kind], 0.4)};
  }

  ${({ $kind, theme }) =>
    $kind === tertiary &&
    css`
      background: transparent;
      border: 1.5px solid ${theme.secondary};
      color: ${theme.secondary};
      font-weight: 300;

      :focus {
        box-shadow: 0 0 0 2px
          ${rgba($kind === tertiary ? theme[secondary] : theme[$kind], 0.4)};
      }
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      padding: 15px 0;
      width: 100%;
    `}

  @media (max-width: 1024px) {
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

const StyledInlineIcon = styled(InlineIcon)`
  font-size: 2.2rem;
  margin-right: 12px;

  ${({ $position }) =>
    $position === "right" &&
    css`
      margin-right: 0;
      margin-left: 10px;
      order: 1;
    `}
`;

const Button = ({
  children,
  kind,
  icon,
  position,
  fullWidth,
  onClick,
  ...props
}) => (
  <StyledButton
    $kind={kind}
    $fullWidth={fullWidth}
    onClick={onClick}
    {...props}
  >
    {icon && <StyledInlineIcon icon={icon} $position={position} />}
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.oneOf([primary, secondary, tertiary]),
  icon: PropTypes.any,
  position: PropTypes.oneOf(["left", "right"]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "",
  kind: primary,
  icon: null,
  position: "left",
  fullWidth: false,
  className: undefined,
  onClick: undefined,
};

export default Button;
