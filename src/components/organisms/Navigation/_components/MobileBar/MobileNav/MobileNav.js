import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { xl } from "@constants/fontSizes";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/clarity/arrow-line";
import TextWithIcon from "../../TextWithIcon/TextWithIcon";

const StyledWrapper = styled.nav`
  ${({ theme }) => useFontSize(theme, xl)}
  position: relative;
  padding: 105px 20px 115px;
  width: 100vw;
  height: 100vh;
  background: #fff;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 75px 20px 95px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      height: unset;
      min-height: 100vh;
      transform: translateX(0);
    `}
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledSecondList = styled(StyledList)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateX(100%);
  padding: 105px 20px;
  background: #fff;
  transition: transform 0.4s ease-in-out;

  @media (max-width: 768px) {
    padding: 75px 20px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      height: unset;
      min-height: 100vh;
      transform: translateX(0);
    `}
`;

const StyledItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  height: 55px;
  padding: 0 25px 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-left: auto;
  transform: rotate(90deg) !important;
  color: ${({ theme }) => theme.black};
`;

const MobileNav = ({ isActive, categories }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [isSecondListActive, setSecondListActive] = useState(false);

  const handleMainItemClick = (index) => {
    setActiveOption(index);
    setSecondListActive(true);
  };

  useEffect(() => {
    if (!isActive) setSecondListActive(false);
  });

  return (
    <StyledWrapper isActive={isActive}>
      <StyledList>
        {categories.map(({ name, icon }, index) => (
          <StyledItem key={index} onClick={() => handleMainItemClick(index)}>
            <TextWithIcon icon={icon} text={name} tertiary />
            <StyledIcon icon={arrowIcon} />
          </StyledItem>
        ))}
      </StyledList>
      <StyledSecondList isActive={isSecondListActive}>
        {categories[activeOption].subcategories.map(
          ({ name, subcategories }, index) => (
            <StyledItem key={index}>
              <TextWithIcon text={name} tertiary />
              {subcategories && <StyledIcon icon={arrowIcon} />}
            </StyledItem>
          )
        )}
      </StyledSecondList>
    </StyledWrapper>
  );
};

MobileNav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

export default MobileNav;
