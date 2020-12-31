import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Icon from "@iconify/react";
import ordersIcon from "@iconify/icons-clarity/list-line";
import returnIcon from "@iconify/icons-clarity/history-line";
import heartIcon from "@iconify/icons-clarity/heart-line";
import settingsIcon from "@iconify/icons-clarity/settings-line";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import routes from "@routes";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";

const StyledWrapper = styled.div``;

const StyledGreeting = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  padding-left: 15px;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

const StyledUserName = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  display: block;
  margin-top: 5px;
  padding-left: 15px;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

const StyledNavigation = styled.nav``;

const StyledList = styled.ul`
  margin-top: 30px;
  list-style-type: none;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 300;

  :last-of-type {
    margin-bottom: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 400;
      color: ${({ theme }) => theme.black};
      cursor: default;
    `}

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }

  @media (max-width: 1024px) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px 75px 15px 15px;
  width: 100%;

  @media (max-width: 1024px) {
    padding-right: 15px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 10px;
`;

const StyledArrowIcon = styled(Icon)`
  transform: rotate(90deg) !important;
  margin-left: auto;
  font-size: 2rem;
`;

const items = [
  { name: "Zamówienia", icon: ordersIcon, link: routes.orders },
  { name: "Zwroty i reklamacje", icon: returnIcon, link: routes.returns },
  { name: "Ulubione produkty", icon: heartIcon, link: routes.favorite },
  { name: "Ustawienia", icon: settingsIcon, link: routes.settings },
];

const UserNav = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();

  return (
    <StyledWrapper>
      <StyledGreeting>
        Cześć,
        <StyledUserName>Jakub Chmielewski</StyledUserName>
      </StyledGreeting>

      <StyledNavigation>
        <StyledList>
          {items.map(({ name, icon, link }) => {
            const isActive = pathname.includes(link);

            return (
              <StyledItem key={link} $isActive={isActive}>
                <StyledLink to={link}>
                  <StyledIcon icon={icon} />
                  {name}
                  {width <= 1024 && <StyledArrowIcon icon={arrowIcon} />}
                </StyledLink>
              </StyledItem>
            );
          })}
        </StyledList>
      </StyledNavigation>
    </StyledWrapper>
  );
};

export default UserNav;
