import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import DropDown from "./DropDown/DropDown";
import Link from "../StyledLink/StyledLink";

const StyledWrapper = styled.nav`
  width: 100vw;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 12px;

  @media (max-width: 1752px) {
    height: 50px;
  }
`;

const StyledListWrapper = styled.ul`
  align-items: center;
  display: flex;
  list-style-type: none;
  justify-content: center;
  height: 100%;
  margin: 0;
`;

const StyledListItem = styled.li`
  height: 100%;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  user-select: none;
  position: relative;
  color: ${({ theme }) => theme.darkGray};

  :last-of-type {
    margin-right: 0;
  }

  ::before {
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: #fff;
    left: 0;
    content: "";
    opacity: 0;
  }

  :hover {
    border-left: 1px solid ${({ theme }) => theme.lightGray};
    border-right: 1px solid ${({ theme }) => theme.lightGray};

    ::before {
      opacity: 1;
    }
  }
`;

const StyledListItemLink = styled(Link)`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 0 40px;
  }
`;

const BottomBar = ({ categories, isDropDownActive, setDropDownActive }) => {
  const [activeOption, setActiveOption] = useState(0);
  const handleMouseOver = (index) => {
    setActiveOption(index);
    setDropDownActive(true);
  };
  const handleMouseOut = () => setDropDownActive(false);

  return (
    <StyledWrapper>
      <StyledListWrapper>
        {categories.map(
          ({ name, icon, featuredProduct, subcategories }, index) => (
            <StyledListItem
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <StyledListItemLink to="/">
                <TextWithIcon icon={icon} text={name} secondary />
              </StyledListItemLink>
              <DropDown
                title={name}
                featuredProduct={featuredProduct}
                subcategories={subcategories}
                link="/"
                isActive={isDropDownActive && activeOption === index}
                reverse={index > 3}
                mid={index === 3}
              />
            </StyledListItem>
          )
        )}
      </StyledListWrapper>
    </StyledWrapper>
  );
};

BottomBar.propTypes = {
  categories: PropTypes.array.isRequired,
  isDropDownActive: PropTypes.bool.isRequired,
  setDropDownActive: PropTypes.func.isRequired,
};

BottomBar.defaultProps = {};

export default BottomBar;
