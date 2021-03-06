import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "@components/atoms";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled(Input)`
  input {
    ${({ theme }) => useFontSize(theme, "m", "l")}
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    @media (max-width: 1024px) {
      padding: 8px 15px;
    }
  }
`;

const StyledButton = styled(Button)`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 10px 20px;

  @media (max-width: 1024px) {
    padding: 8px 20px;
  }
`;

const InputWithButton = ({
  name,
  label,
  children,
  value,
  onChange,
  onClick,
  onKeyDown,
  ...props
}) => (
  <StyledWrapper {...props}>
    <StyledInput
      name={name}
      label={label}
      kind="secondary"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <StyledButton kind="secondary" onClick={onClick}>
      {children}
    </StyledButton>
  </StyledWrapper>
);

InputWithButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

InputWithButton.defaultProps = {
  value: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
};

export default InputWithButton;
