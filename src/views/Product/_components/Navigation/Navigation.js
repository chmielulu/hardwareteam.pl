import React from "react";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import infoIcon from "@iconify/icons-clarity/info-standard-line";
import atomIcon from "@iconify/icons-clarity/atom-line";
import accessoriesIcon from "@iconify/icons-clarity/add-text-line";
import chatIcon from "@iconify/icons-clarity/chat-bubble-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const items = [
  { icon: infoIcon, text: "Opis" },
  { icon: atomIcon, text: "Specyfikacja" },
  { icon: accessoriesIcon, text: "Akcesoria" },
  { icon: chatIcon, text: "Opinie (2)" },
];

const StyledWrapper = styled.nav`
  padding: 15px 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  display: inline-flex;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 410px) {
    padding: 15px 20px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 5px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.2, max: 2, unit: "rem" })};
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  white-space: nowrap;

  :last-of-type {
    margin-right: 0;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: ${theme.primary};
    `}

  @media (max-width: 1024px) {
    margin-right: 20px;
  }

  @media (max-width: 360px) {
    margin-right: 10px;
  }
`;

const Navigation = () => {
  return (
    <StyledWrapper>
      <StyledList>
        {items.map(({ icon, text }, index) => (
          <StyledItem key={index} $isActive={index === 0}>
            <StyledIcon icon={icon} />
            {text}
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default Navigation;
