import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import truckIcon from "@iconify/icons-clarity/truck-line";
import historyIcon from "@iconify/icons-clarity/history-line";
import faceIcon from "@iconify/icons-clarity/happy-face-line";
import { useFontSize } from "@hooks/styled-components";

const items = [
  {
    icon: truckIcon,
    name: "Darmowa dostawa od 199 zł",
    value:
      "Twoje zamówienie dostarczymy za darmo (nie dotyczy płatności przy odbiorze oraz wysyłki za granicę)",
  },
  {
    icon: historyIcon,
    name: "Zwrot w ciągu 15 dni",
    value:
      "Na zwrot w swojego zamówienia masz aż 15 dni. W razie nietrafionego zakupu możesz go oddać",
  },
  {
    icon: faceIcon,
    name: "Wsparcie techniczne",
    value:
      "Jesteśmy dla twojej dyspozycji cały tydzień! Udzielamy pomocy nawet po zakupie",
  },
];

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  margin-top: 20px;
  padding: 20px 10px;
  justify-content: space-between;
`;

const StyledItem = styled.div`
  max-width: 450px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;
  margin-right: 15px;
`;

const StyledHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  flex: 1;
`;

const WhyUs = () => {
  return (
    <StyledWrapper>
      {items.map(({ icon, name, value }, index) => (
        <StyledItem key={index}>
          <StyledHeadline>{name}</StyledHeadline>
          <StyledInnerWrapper>
            <StyledIcon icon={icon} />
            <StyledParagraph>{value}</StyledParagraph>
          </StyledInnerWrapper>
        </StyledItem>
      ))}
    </StyledWrapper>
  );
};

export default WhyUs;
