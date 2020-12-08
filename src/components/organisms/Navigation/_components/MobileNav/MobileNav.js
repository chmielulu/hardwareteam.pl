import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { xl } from "@constants/fontSizes";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/clarity/arrow-line";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import Dialog from "./Dialog/Dialog";

const StyledWrapper = styled.nav`
  ${({ theme }) => useFontSize(theme, xl)}
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledList = styled.ul`
  position: absolute;
  list-style-type: none;
  background: #fff;
  padding: 30px 25px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
  const [isDialogActive, setDialogActive] = useState(false);
  const [isSecondDialogActive, setSecondDialogActive] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [secondActiveOption, setSecondActiveOption] = useState(0);

  const handleItemClick = useCallback((index, second = false) => {
    if (!second) {
      setActiveOption(index);
      setDialogActive(true);
    } else {
      setSecondActiveOption(index);
      setSecondDialogActive(true);
    }
  }, []);

  const handleBackClick = (second = null) => {
    if (!second) {
      setDialogActive(false);
    } else {
      setSecondDialogActive(false);
    }
  };

  useEffect(() => {
    if (!isActive) {
      setDialogActive(false);
      setSecondDialogActive(false);
    }
  }, [isActive]);

  return (
    <>
      <StyledWrapper>
        <StyledList isActive={isActive}>
          {categories.map(({ name, icon }, index) => (
            <StyledItem key={index} onClick={() => handleItemClick(index)}>
              <TextWithIcon icon={icon} text={name} tertiary />
              <StyledIcon icon={arrowIcon} />
            </StyledItem>
          ))}
        </StyledList>
      </StyledWrapper>
      <Dialog
        isActive={isDialogActive}
        categories={categories[activeOption].subcategories}
        name={categories[activeOption].name}
        link={categories[activeOption].link}
        handleBackClick={() => handleBackClick()}
        handleItemClick={handleItemClick}
      />
      <Dialog
        isActive={isSecondDialogActive}
        categories={
          categories[activeOption].subcategories[secondActiveOption]
            .subcategories
        }
        name={categories[activeOption].subcategories[secondActiveOption].name}
        handleBackClick={() => handleBackClick(true)}
        link="/"
      />
    </>
  );
};

MobileNav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

export default MobileNav;
