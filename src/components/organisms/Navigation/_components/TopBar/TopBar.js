import React from "react";
import styled from "styled-components";
import { Logo } from "@components/atoms";
import routes from "@routes";
import helpLine from "@iconify-icons/clarity/help-line";
import heart from "@iconify-icons/clarity/heart-line";
import user from "@iconify-icons/clarity/user-line";
import basket from "@iconify-icons/clarity/shopping-bag-line";
import Link from "../StyledLink/StyledLink";
import Search from "../Search/Search";
import TextWithIcon from "../TextWithIcon/TextWithIcon";

const StyledWrapper = styled.header`
  width: 100vw;
  height: 85px;
  align-items: center;
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin-right: 40px;
`;

const TextWithIconsWrapper = styled.div`
  margin-left: 40px;
  display: flex;
`;

const StyledTextWithIcon = styled(TextWithIcon)`
  margin-right: 20px;

  :last-of-type {
    margin-right: 0;
  }
`;

const TopBar = () => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.index}>
        <Logo />
      </StyledLink>
      <Search />
      <TextWithIconsWrapper>
        <StyledTextWithIcon icon={helpLine} text="Kontakt" />
        <StyledTextWithIcon icon={heart} text="Listy zakupowe" />
        <StyledTextWithIcon icon={user} text="Twoje konto" />
        <StyledTextWithIcon icon={basket} text="Koszyk" />
      </TextWithIconsWrapper>
    </StyledWrapper>
  );
};

export default TopBar;
