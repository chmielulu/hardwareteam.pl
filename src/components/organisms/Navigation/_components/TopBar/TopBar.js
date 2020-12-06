import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo } from "@components/atoms";
import routes from "@routes";
import helpIcon from "@iconify-icons/clarity/help-line";
import heartIcon from "@iconify-icons/clarity/heart-line";
import userIcon from "@iconify-icons/clarity/user-line";
import basketIcon from "@iconify-icons/clarity/shopping-bag-line";
import Link from "../StyledLink/StyledLink";
import Search from "../Search/Search";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import PopUp from "./PopUp/PopUp";

const StyledWrapper = styled.div`
  width: 100%;
  min-width: 260px;
  height: 85px;
  align-items: center;
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  justify-content: center;
  background: #fff;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 0;
    box-shadow: 0px -7px 20px rgba(0, 0, 0, 0.25);
    justify-content: flex-start;
    z-index: 9999;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    height: 55px;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 40px;
  min-width: 229px;

  @media (max-width: 1480px) {
    margin-right: 20px;
    min-width: unset;
  }
`;

const TextWithIconsWrapper = styled.div`
  margin-left: 30px;
  display: flex;

  @media (max-width: 1480px) {
    margin-left: 10px;
  }

  @media (max-width: 1300px) {
    margin-left: 20px;
  }
`;

const StyledTextWithIcon = styled(TextWithIcon)`
  padding: 0 10px;

  :last-of-type {
    padding-right: 0;
  }

  :first-of-type {
    padding-left: 0;
  }

  @media (max-width: 1300px) {
    padding: 0 15px;
  }
`;

const StyledPopUp = styled(PopUp)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
`;

const PopUpWrapper = styled.div`
  position: relative;
  padding: 10px 10px;

  @media (max-width: 1300px) {
    padding: 5px 15px;
    svg {
      margin: 0;
    }
  }

  & ${StyledTextWithIcon} {
    padding: 0;
    position: relative;
    z-index: 5;
  }

  :hover ${StyledPopUp} {
    opacity: 1;
    pointer-events: unset;
  }
`;

const TopBar = ({ innerSizes }) => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.index}>
        <Logo
          withoutText={innerSizes.width <= 1024}
          size={innerSizes.width <= 768 ? "35px" : undefined}
        />
      </StyledLink>
      <Search innerSizes={innerSizes} />
      {innerSizes.width > 1024 && (
        <TextWithIconsWrapper>
          <PopUpWrapper>
            <StyledTextWithIcon icon={helpIcon} text="Kontakt" />
            <StyledPopUp />
          </PopUpWrapper>
          <StyledTextWithIcon icon={heartIcon} text="Listy zakupowe" />
          <StyledTextWithIcon icon={userIcon} text="Twoje konto" />
          <StyledTextWithIcon icon={basketIcon} text="Koszyk" />
        </TextWithIconsWrapper>
      )}
    </StyledWrapper>
  );
};

TopBar.propTypes = {
  innerSizes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default TopBar;
