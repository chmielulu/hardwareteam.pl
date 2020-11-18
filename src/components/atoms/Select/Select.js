import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { useFontSize } from "@hooks/styled-components";
import { useOutsideClick } from "@hooks/utils";
import { primary, secondary } from "@constants/types";
import { Icon } from "@iconify/react";
import angleLine from "@iconify/icons-clarity/angle-line";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  position: relative;
  cursor: pointer;
  width: 100%;
`;

const StyledSelectedOption = styled.div`
  padding: 8px 40px 8px 15px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 5px;
  user-select: none;

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }

  ${({ isDropDownActive }) =>
    isDropDownActive &&
    css`
      border-radius: 5px 5px 0 0;
      border-bottom: 0;
    `}
`;

const StyledDropDown = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border-radius: 0 0 5px;
  display: none;

  ${({ isDropDownActive, theme }) =>
    isDropDownActive &&
    css`
      display: flex;
      border: 1px solid ${theme.gray};
      border-top: 0;
    `}
`;

const StyledOption = styled.li`
  padding: 8px 40px 8px 15px;
  user-select: none;

  :hover {
    background: ${({ isSelected, theme, type }) =>
      !isSelected && rgba(theme[type], 0.1)};
  }

  ${({ isSelected, theme, type }) =>
    isSelected &&
    css`
      background: ${theme[type]};
      color: #fff;
    `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) !important;
  pointer-events: none;

  ${({ isDropDownActive, theme, type }) =>
    isDropDownActive &&
    css`
      transform: translateY(-50%) rotate(180deg) !important;
      color: ${theme[type]};
    `}
`;

const Select = ({ options, type }) => {
  const wrapper = useRef();
  const [isDropDownActive, setDropDownActive] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  const handleSelectClick = () => setDropDownActive(!isDropDownActive);
  const handleOptionClick = (index) => {
    setActiveOption(index);
    setDropDownActive(false);
  };
  useOutsideClick(wrapper, () => setDropDownActive(false));

  return (
    <StyledWrapper ref={wrapper}>
      <StyledSelectedOption
        onClick={handleSelectClick}
        isDropDownActive={isDropDownActive}
      >
        {options[activeOption]}
      </StyledSelectedOption>
      <StyledDropDown isDropDownActive={isDropDownActive}>
        {options.map((item, index) => (
          <StyledOption
            key={index}
            isSelected={index === activeOption}
            onClick={() => handleOptionClick(index)}
            type={type}
          >
            {item}
          </StyledOption>
        ))}
      </StyledDropDown>
      <StyledIcon
        icon={angleLine}
        isDropDownActive={isDropDownActive}
        type={type}
      />
    </StyledWrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf([primary, secondary]),
};

Select.defaultProps = {
  type: primary,
};

export default Select;
