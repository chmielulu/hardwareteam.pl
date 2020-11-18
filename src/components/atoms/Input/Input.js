import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  ${({ theme }) => useFontSize(theme)}
  padding: 10px 15px;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};
  outline: none;
  width: 100%;
  display: block;
  transition: border 0.2s ease-in-out, color 0.2s ease-in-out;

  :focus {
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
  }

  ${({ icon }) =>
    icon &&
    css`
      padding: 10px 35px 10px 15px;
    `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.gray};
  right: 10px;
  top: 50%;
  transform: translateY(-50%) !important;
  pointer-events: none;
  transition: color 0.2s ease-in-out;

  ${StyledInput}:focus + & {
    color: ${({ theme }) => theme.primary};
  }
`;

const Input = ({ label, name, icon, ...props }) => (
  <StyledWrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput
      id={name}
      name={name}
      placeholder={label}
      icon={icon}
      {...props}
    />
    {icon && <StyledIcon icon={icon} />}
  </StyledWrapper>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

Input.defaultProps = {
  icon: null,
};

export default Input;
