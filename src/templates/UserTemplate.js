import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import routes from "@routes";
import { useFontSize } from "@hooks/styled-components";
import { Link, useLocation } from "react-router-dom";
import Icon from "@iconify/react";
import ordersIcon from "@iconify/icons-clarity/list-line";
import returnIcon from "@iconify/icons-clarity/history-line";
import heartIcon from "@iconify/icons-clarity/heart-line";
import settingsIcon from "@iconify/icons-clarity/settings-line";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
  margin-top: 40px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
`;

const StyledLeftColumn = styled.div``;

const StyledRightColumn = styled.div`
  padding-left: 40px;
  padding-top: 10px;
  border-left: 1px solid ${({ theme }) => theme.lightGray};
  flex: 1;
  overflow: hidden;
`;

const StyledGreeting = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  padding-left: 15px;
`;

const StyledUserName = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  display: block;
  margin-top: 5px;
  padding-left: 15px;
`;

const StyledNavigation = styled.nav``;

const StyledList = styled.ul`
  margin-top: 30px;
  list-style-type: none;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)}
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
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px 75px 15px 15px;
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 10px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
`;

const items = [
  { name: "Zamówienia", icon: ordersIcon, link: routes.orders },
  { name: "Zwroty i reklamacje", icon: returnIcon, link: routes.returns },
  { name: "Zapisane produkty", icon: heartIcon, link: routes.favorite },
  { name: "Ustawienia", icon: settingsIcon, link: routes.settings },
];

const UserTemplate = ({ Headline, children }) => {
  const { pathname } = useLocation();

  return (
    <MainTemplate>
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledLeftColumn>
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
                      </StyledLink>
                    </StyledItem>
                  );
                })}
              </StyledList>
            </StyledNavigation>
          </StyledLeftColumn>
          <StyledRightColumn>
            {Headline && (
              <StyledHeadline>
                <Headline />
              </StyledHeadline>
            )}
            {children}
          </StyledRightColumn>
        </StyledInnerWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

UserTemplate.propTypes = {
  Headline: PropTypes.node,
  children: PropTypes.node.isRequired,
};

UserTemplate.defaultProps = {
  Headline: null,
};

export default UserTemplate;
