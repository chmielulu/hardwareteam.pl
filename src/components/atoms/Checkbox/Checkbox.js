import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import checkIcon from "@iconify/icons-bi/check";
import { Icon } from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";
import { primary, secondary } from "@constants/kinds";

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
    background: ${({ theme, $kind }) => theme[$kind]};
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
  align-self: flex-start;
  flex: 1;
  line-height: 16px;
`;

const Checkbox = ({
  name,
  label,
  render,
  id,
  checked,
  onChange,
  kind,
  ...props
}) => (
  <StyledWrapper {...props}>
    <StyledInnerWrapper>
      <StyledInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        id={id || name}
      />
      <StyledCheckbox $kind={kind} />
      <StyledIcon icon={checkIcon} />
    </StyledInnerWrapper>
    <StyledLabel htmlFor={id || name}>{render ? render() : label}</StyledLabel>
  </StyledWrapper>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  render: PropTypes.func,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  kind: PropTypes.oneOf([primary, secondary]),
};

Checkbox.defaultProps = {
  label: null,
  render: null,
  id: null,
  checked: undefined,
  onChange: undefined,
  kind: primary,
};

export default Checkbox;
