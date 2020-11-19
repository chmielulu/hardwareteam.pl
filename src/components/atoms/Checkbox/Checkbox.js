import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import checkIcon from "@iconify/icons-bi/check";
import { Icon } from "@iconify/react";
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
  border-radius: 5px;
  display: block;

  ${StyledInput}:checked ~ & {
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => rgba(theme.black, 0)};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  font-size: 2rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
  pointer-events: none;
  z-index: 1;
  color: #fff;
`;

const StyledLabel = styled.label`
  ${({ theme }) => useFontSize(theme)}
  cursor: pointer;
  user-select: none;
`;

const Checkbox = ({ name, label, render }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledInput type="checkbox" name={name} id={name} />
      <StyledCheckbox />
      <StyledIcon icon={checkIcon} />
    </StyledInnerWrapper>
    <StyledLabel htmlFor={name}>{render ? render() : label}</StyledLabel>
  </StyledWrapper>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  render: PropTypes.func,
};

Checkbox.defaultProps = {
  label: null,
  render: null,
};

export default Checkbox;
