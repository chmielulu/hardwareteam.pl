import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledInnerWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const StyledInput = styled.input`
  cursor: pointer;
  position: absolute;
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
`;

const StyledCheckbox = styled.span`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 50%;
  display: block;

  ${StyledInput}:checked ~ & {
    ::before {
      width: 50%;
      height: 50%;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.black};
      border-radius: 50%;
    }
  }
`;

const StyledLabel = styled.label`
  ${({ theme }) => useFontSize(theme)}
  cursor: pointer;
  user-select: none;
`;

const Radio = ({ name, label, render, id }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledInput type="radio" name={name} id={id} />
      <StyledCheckbox />
    </StyledInnerWrapper>
    <StyledLabel htmlFor={id}>{render ? render() : label}</StyledLabel>
  </StyledWrapper>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  render: PropTypes.func,
};

Radio.defaultProps = {
  label: null,
  render: null,
};

export default Radio;
