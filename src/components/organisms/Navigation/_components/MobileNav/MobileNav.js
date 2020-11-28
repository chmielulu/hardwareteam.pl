import React, { useState, useEffect, useLayoutEffect } from "react";
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
  const [activeList, setActiveList] = useState(null);
  const [activeSublist, setActiveSublist] = useState(null);

  const handleItemClick = (index, second = false) => {
    if (!second) {
      setActiveList(categories[index]);
      setDialogActive(true);
    } else {
      setActiveSublist(activeList.subcategories[index]);
      setSecondDialogActive(true);
    }
  };

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
  });

  useLayoutEffect(() => {
    setActiveList(categories[0]);
    if (activeList) {
      setActiveSublist(activeList.subcategories[0]);
    }
  }, []);

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
      {activeList && (
        <Dialog
          isActive={isDialogActive}
          categories={activeList.subcategories}
          name={activeList.name}
          handleBackClick={() => handleBackClick()}
          handleItemClick={handleItemClick}
        />
      )}
      {activeSublist && (
        <Dialog
          isActive={isSecondDialogActive}
          categories={activeSublist.subcategories}
          name={activeSublist.name}
          handleBackClick={() => handleBackClick(true)}
        />
      )}
    </>
  );
};

MobileNav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

export default MobileNav;
