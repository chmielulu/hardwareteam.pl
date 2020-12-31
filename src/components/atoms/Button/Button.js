import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { primary, secondary, tertiary } from "@constants/kinds";
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
  text-decoration: none;

  ${({ $kind, theme }) =>
    $kind === tertiary &&
    css`
      background: transparent;
      border: 1px solid ${theme.secondary};
      color: ${theme.secondary};
      font-weight: 300;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      padding: 15px 0;
      width: 100%;
    `}

  @media (max-width: 1024px) {
    padding: ${useFluidSize({ min: 10, max: 15 })} ${useFluidSize({
  min: 20,
  max: 25,
})};
    border-radius: ${useFluidSize({ min: 5, max: 10 })};
  }

  @media (max-width: 360px) {
    border-radius: 5px;
    padding: 10px 20px;

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

  ${({ $rotateIcon }) =>
    $rotateIcon &&
    css`
      transform: ${`rotate(${$rotateIcon}deg)!important`};
    `}
`;

const Button = ({
  children,
  kind,
  icon,
  position,
  fullWidth,
  onClick,
  rotateIcon,
  ...props
}) => (
  <StyledButton
    $kind={kind}
    $fullWidth={fullWidth}
    onClick={onClick}
    {...props}
  >
    {icon && (
      <StyledInlineIcon
        icon={icon}
        $position={position}
        $rotateIcon={rotateIcon}
      />
    )}
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
  rotateIcon: PropTypes.number,
};

Button.defaultProps = {
  children: "",
  kind: primary,
  icon: null,
  position: "left",
  fullWidth: false,
  className: undefined,
  onClick: undefined,
  rotateIcon: null,
};

export default Button;
