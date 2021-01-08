import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { primary, secondary } from "@constants/kinds";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  padding: 10px 15px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};
  outline: none;
  width: 100%;
  display: block;
  transition: border 0.2s ease-in-out, color 0.2s ease-in-out;

  :focus {
    border: 1.5px solid ${({ theme, $kind }) => theme[$kind]};
    color: ${({ theme }) => theme.black};
  }

  ${({ $icon }) =>
    $icon &&
    css`
      padding: 10px 35px 10px 15px;
    `}

  @media (max-width: 1024px) {
    border-radius: ${useFluidSize({ min: 5, max: 10 })};
  }

  @media (max-width: 360px) {
    border-radius: 5px;
  }
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
    color: ${({ theme, $kind }) => theme[$kind]};
  }
`;

const Input = ({
  label,
  name,
  icon,
  kind,
  className,
  value,
  onChange,
  type,
  ...props
}) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        placeholder={label}
        $icon={icon}
        $kind={kind}
        value={value}
        onChange={onChange}
        type={type}
        {...props}
      />
      {icon && <StyledIcon icon={icon} $kind={kind} />}
    </StyledWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object,
  kind: PropTypes.oneOf([primary, secondary]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "password"]),
};

Input.defaultProps = {
  icon: null,
  kind: primary,
  className: "",
  onChange: undefined,
  value: undefined,
  type: "text",
};

export default Input;
