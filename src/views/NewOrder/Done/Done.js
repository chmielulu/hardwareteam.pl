/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Button } from "@components/atoms";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import shoppingIcon from "@iconify/icons-clarity/shopping-bag-line";
import checkIcon from "@iconify/icons-clarity/check-circle-line";
import Icon from "@iconify/react";
import { Link } from "react-router-dom";
import routes from "@routes/";
import { secondary } from "@constants/kinds";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const StyledInnerWrapper = styled.div``;

const StyledHeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledIcon = styled(Icon)`
  font-size: 5rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 20px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
  line-height: 1;
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 300;
  max-width: 800px;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  margin: 0 8px;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  margin-right: 20px;

  :last-of-type {
    margin-right: 0;
  }
`;

const Done = () => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledHeadlineWrapper>
          <StyledIcon icon={checkIcon} />
          <StyledHeadline>Przyjeliśmy twoje zamówienia</StyledHeadline>
        </StyledHeadlineWrapper>
        <StyledParagraph>
          Twoje zamówienie
          <StyledLink to="/uzytkownik/zamowienia/12345345">
            nr 12345345
          </StyledLink>
          zostało przyjęte do realizacji. Cieszymy się, że wybrałeś nasz sklep.
          O postępach będziemy Cię informować mailowo!
        </StyledParagraph>

        <StyledButtonsWrapper>
          <StyledButton
            icon={arrowIcon}
            rotateIcon={-90}
            to={routes.index}
            forwardedAs={Link}
          >
            Wracam do sklepu
          </StyledButton>
          <StyledButton
            icon={shoppingIcon}
            to="/uzytkownik/zamowienia/12345345"
            kind={secondary}
            position="right"
            forwardedAs={Link}
          >
            Chcę zobaczyć zamówienie
          </StyledButton>
        </StyledButtonsWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Done;
