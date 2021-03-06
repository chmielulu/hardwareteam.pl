import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { useFontSize } from "@hooks/styled-components";
import { useOutsideClick } from "@hooks/utils";
import { primary, secondary } from "@constants/kinds";
import { Icon } from "@iconify/react";
import angleLine from "@iconify/icons-clarity/angle-line";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  position: relative;
  cursor: pointer;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  padding: 8px 15px;
  align-items: center;
  justify-content: space-between;

  ${({ $isDropDownActive }) =>
    $isDropDownActive &&
    css`
      border-radius: 10px 10px 0 0;
      background: ${({ theme }) => theme.lighterGray};
    `}

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }
`;

const StyledSelectedOption = styled.div`
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 99%;
`;

const StyledDropDown = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 100%;
  right: -1px;
  width: calc(100% + 2px);
  flex-direction: column;
  display: none;
  margin: 0 auto;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0 0 5px 5px;
  z-index: 10;

  ${({ $isDropDownActive, theme }) =>
    $isDropDownActive &&
    css`
      display: flex;
      border: 1px solid ${theme.gray};
      border-top: 0;
    `};
`;

const StyledOption = styled.li`
  padding: 8px 40px 8px 15px;
  user-select: none;

  :hover {
    background: ${({ $isSelected, theme, $kind }) =>
      !$isSelected && rgba(theme[$kind], 0.1)};
  }

  ${({ $isSelected, theme, $kind }) =>
    $isSelected &&
    css`
      background: ${theme[$kind]};
      color: #fff;
    `}
`;

const StyledIcon = styled(Icon)`
  pointer-events: none;
  margin-left: 10px;

  ${({ $isDropDownActive, theme, $kind }) =>
    $isDropDownActive &&
    css`
      transform: rotate(180deg) !important;
      color: ${theme[$kind]};
    `}
`;

const Select = ({ options, kind, activeOption, setActiveOption, ...props }) => {
  const wrapper = useRef();
  const [isDropDownActive, setDropDownActive] = useState(false);
  const [activeOptionState, setActiveOptionState] = useState(0);

  const handleSelectClick = () => setDropDownActive(!isDropDownActive);
  const handleOptionClick = (index) => {
    if (activeOption !== undefined) {
      setActiveOption(index);
    } else {
      setActiveOptionState(index);
    }

    setDropDownActive(false);
  };
  useOutsideClick(wrapper, () => setDropDownActive(false));

  return (
    <StyledWrapper
      ref={wrapper}
      $isDropDownActive={isDropDownActive}
      onClick={handleSelectClick}
      {...props}
    >
      <StyledSelectedOption>
        {options[activeOption || activeOptionState].name}
      </StyledSelectedOption>
      <StyledIcon
        icon={angleLine}
        $kind={kind}
        $isDropDownActive={isDropDownActive}
      />
      <StyledDropDown $isDropDownActive={isDropDownActive}>
        {options.map(({ name, method }, index) => (
          <StyledOption
            key={index}
            $isSelected={index === (activeOption || activeOptionState)}
            onClick={() => {
              handleOptionClick(index);
              if (method) method();
            }}
            $kind={kind}
          >
            {name}
          </StyledOption>
        ))}
      </StyledDropDown>
    </StyledWrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      method: PropTypes.func,
    })
  ).isRequired,
  kind: PropTypes.oneOf([primary, secondary]),
  activeOption: PropTypes.number,
  setActiveOption: PropTypes.func,
};

Select.defaultProps = {
  kind: primary,
  activeOption: undefined,
  setActiveOption: undefined,
};

export default Select;
