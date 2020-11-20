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
`;

const StyledSelectedOption = styled.div`
  padding: 8px 40px 8px 15px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  user-select: none;

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }

  ${({ isDropDownActive }) =>
    isDropDownActive &&
    css`
      border-radius: 10px 10px 0 0;
      border-bottom: 0;
      box-shadow: ${({ theme }) => theme.shadow};
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
  border-radius: 0 0 10px 10px;
  display: none;
  background: #fff;

  ${({ isDropDownActive, theme }) =>
    isDropDownActive &&
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
    background: ${({ isSelected, theme, kind }) =>
      !isSelected && rgba(theme[kind], 0.1)};
  }

  ${({ isSelected, theme, kind }) =>
    isSelected &&
    css`
      background: ${theme[kind]};
      color: #fff;
    `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) !important;
  pointer-events: none;

  ${({ isDropDownActive, theme, kind }) =>
    isDropDownActive &&
    css`
      transform: translateY(-50%) rotate(180deg) !important;
      color: ${theme[kind]};
    `}
`;

const Select = ({ options, kind, maxLength, ...props }) => {
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
    <StyledWrapper ref={wrapper} {...props}>
      <StyledSelectedOption
        onClick={handleSelectClick}
        isDropDownActive={isDropDownActive}
      >
        {maxLength && options[activeOption].length > maxLength
          ? `${options[activeOption].substring(0, maxLength)}...`
          : options[activeOption]}
      </StyledSelectedOption>
      <StyledDropDown isDropDownActive={isDropDownActive}>
        {options.map((item, index) => (
          <StyledOption
            key={index}
            isSelected={index === activeOption}
            onClick={() => handleOptionClick(index)}
            kind={kind}
          >
            {item}
          </StyledOption>
        ))}
      </StyledDropDown>
      <StyledIcon
        icon={angleLine}
        isDropDownActive={isDropDownActive}
        kind={kind}
      />
    </StyledWrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  kind: PropTypes.oneOf([primary, secondary]),
  maxLength: PropTypes.number,
};

Select.defaultProps = {
  kind: primary,
  maxLength: null,
};

export default Select;
