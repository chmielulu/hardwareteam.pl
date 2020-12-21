import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.button`
  ${({ theme }) => useFontSize(theme)}
  border: 0;
  background: transparent;
  outline: 0;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 15px;
  color: ${({ theme, $color }) => $color || theme.black};

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.gray};
      cursor: not-allowed;

      :hover {
        background: transparent;
      }
    `}
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 5px;
`;

const StyledText = styled.span``;

const Button = ({ color, icon, children, disabled, ...props }) => {
  return (
    <StyledWrapper $color={color} {...props} $disabled={disabled}>
      <StyledIcon icon={icon} />
      <StyledText>{children}</StyledText>
    </StyledWrapper>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
