import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import heartIcon from "@iconify-icons/clarity/heart-line";
import userIcon from "@iconify-icons/clarity/user-line";
import basketIcon from "@iconify-icons/clarity/shopping-bag-line";
import searchIcon from "@iconify-icons/clarity/search-line";
import { Icon } from "@iconify/react";
import { Logo } from "@components/atoms";
import { Link } from "react-router-dom";
import routes from "@routes/";

const StyledWrapper = styled.nav`
  ${({ theme }) => useFontSize(theme, "xl")}
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  min-width: 260px;
  z-index: 9999;
  pointer-events: all;
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

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.8rem;
`;

const itemsArray = [
  { icon: searchIcon },
  { icon: basketIcon, link: routes.index },
  { icon: heartIcon, link: routes.index },
  { icon: userIcon, link: routes.login },
];

const MobileBar = ({ activeOption, handleItemClick }) => (
  <>
    <StyledWrapper>
      <StyledList>
        <StyledItem
          onClick={() => handleItemClick(-1)}
          active={activeOption === -1}
        >
          <StyledLink to={routes.index}>
            <Logo withoutText size="35px" />
          </StyledLink>
        </StyledItem>
        {itemsArray.map(({ icon, link }, index) => (
          <StyledItem
            key={index}
            onClick={() => handleItemClick(index)}
            active={activeOption === index}
          >
            <StyledLink to={link || undefined} as={!link ? "div" : undefined}>
              <StyledIcon icon={icon} />
            </StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  </>
);

MobileBar.propTypes = {
  activeOption: PropTypes.number.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default MobileBar;
