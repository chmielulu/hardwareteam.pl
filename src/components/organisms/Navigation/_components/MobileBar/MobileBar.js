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
import { Link, useLocation } from "react-router-dom";
import routes from "@routes/";
import { connect } from "react-redux";

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

const StyledIconWrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.8rem;
`;

const StyledCount = styled.span`
  ${({ theme }) => useFontSize(theme, "s", "m")}
  position: absolute;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.4em;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  top: 0;
  right: 0;
  transform: translateX(25%);
`;

const MobileBar = ({ isMobNavActive, setMobNavActive, basket }) => {
  const { pathname } = useLocation();

  const handleItemClick = () => {
    if (isMobNavActive) setMobNavActive(false);
  };

  const handleNavClick = () => {
    setMobNavActive(!isMobNavActive);
  };

  return (
    <>
      <StyledWrapper>
        <StyledList>
          <StyledItem
            onClick={handleItemClick}
            active={pathname === routes.index && !isMobNavActive}
          >
            <StyledLink to={routes.index}>
              <Logo withoutText size="35px" />
            </StyledLink>
          </StyledItem>
          <StyledItem onClick={handleNavClick} active={isMobNavActive}>
            <StyledIcon icon={searchIcon} />
          </StyledItem>
          <StyledItem
            onClick={handleItemClick}
            active={pathname === routes.basket && !isMobNavActive}
          >
            <StyledLink to={routes.basket}>
              <StyledIconWrapper>
                <StyledIcon icon={basketIcon} />
                {basket.count > 0 && <StyledCount>{basket.count}</StyledCount>}
              </StyledIconWrapper>
            </StyledLink>
          </StyledItem>
          <StyledItem
            onClick={handleItemClick}
            active={pathname === routes.login && !isMobNavActive}
          >
            <StyledLink to={routes.login}>
              <StyledIcon icon={heartIcon} />
            </StyledLink>
          </StyledItem>
          <StyledItem
            onClick={handleItemClick}
            active={pathname === routes.login && !isMobNavActive}
          >
            <StyledLink to={routes.login}>
              <StyledIcon icon={userIcon} />
            </StyledLink>
          </StyledItem>
        </StyledList>
      </StyledWrapper>
    </>
  );
};

MobileBar.propTypes = {
  isMobNavActive: PropTypes.bool.isRequired,
  setMobNavActive: PropTypes.func.isRequired,
  basket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { basket } = state;
  return { basket };
};

export default connect(mapStateToProps)(MobileBar);
