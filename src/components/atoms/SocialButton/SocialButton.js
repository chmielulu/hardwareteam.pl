import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import kind, { kinds as allKinds } from "./kinds";

const StyledWrapper = styled.button`
  ${({ theme }) => useFontSize(theme)}
  border: none;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 1px 12px -5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  padding: 13px 40px;
  display: flex;

  ${({ $secondary, theme }) =>
    $secondary &&
    css`
      color: ${theme.black};
      box-shadow: unset;
      border-radius: unset;
      font-weight: 400;
      outline: none;
      padding: 0 5px !important;
    `}

  @media (max-width: 1024px) {
    padding: 13px ${useFluidSize({ min: 20, max: 40 })};
  }

  @media (max-width: 360px) {
    padding: 13px 20px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 15px;
  color: ${({ $color }) => $color || "unset"};

  ${({ $secondary }) =>
    $secondary &&
    css`
      margin-right: 10px;
      font-size: 2.2rem;
    `}
`;

const SocialButton = ({ kind: kindName, secondary, ...props }) => {
  const { icon, secondIcon, text, color } = kind[kindName];

  return (
    <StyledWrapper $secondary={secondary} {...props}>
      <StyledIcon
        icon={secondary ? secondIcon || icon : icon}
        $color={color}
        $secondary={secondary}
      />
      {text}
    </StyledWrapper>
  );
};

SocialButton.propTypes = {
  kind: PropTypes.oneOf(allKinds),
  secondary: PropTypes.bool,
};

SocialButton.defaultProps = {
  kind: allKinds[0],
  secondary: false,
};

export default SocialButton;
