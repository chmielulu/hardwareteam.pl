import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import heartIcon from "@iconify-icons/clarity/heart-line";
import userIcon from "@iconify-icons/clarity/user-line";
import basketIcon from "@iconify-icons/clarity/shopping-bag-line";
import searchIcon from "@iconify-icons/clarity/search-line";
import { Icon } from "@iconify/react";
import { Logo } from "@components/atoms";
import MobileNav from "./MobileNav/MobileNav";

const StyledWrapper = styled.nav`
  ${({ theme }) => useFontSize(theme, "xl")}
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const StyledList = styled.ul`
  width: 100%;
  height: 55px;
  background: #fff;
  display: flex;
  list-style-type: none;
  justify-content: center;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
`;

const StyledItem = styled.li`
  width: 18%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  ::before {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
    bottom: 0;
    left: 0;
    content: "";
  }

  ${({ active, theme }) =>
    active &&
    css`
      ::before {
        background: ${theme.primary};
      }
    `}
`;

const StyledIcon = styled(Icon)`
  font-size: 2.8rem;
`;

const iconsArray = [searchIcon, basketIcon, heartIcon, userIcon];

const MobileBar = ({ categories }) => {
  const [activeOption, setActiveOption] = useState(-1);

  const handleItemClick = (index) => setActiveOption(index);

  return (
    <>
      <StyledWrapper>
        <StyledList>
          <StyledItem
            onClick={() => handleItemClick(-1)}
            active={activeOption === -1}
          >
            <Logo withoutText size="35px" />
          </StyledItem>
          {iconsArray.map((icon, index) => (
            <StyledItem
              key={index}
              onClick={() => handleItemClick(index)}
              active={activeOption === index}
            >
              <StyledIcon icon={icon} />
            </StyledItem>
          ))}
        </StyledList>
      </StyledWrapper>
      <MobileNav isActive={activeOption === 0} categories={categories} />
    </>
  );
};

MobileBar.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default MobileBar;
