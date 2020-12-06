import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";
import { whyUs } from "../../_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 80%;
  max-width: 1600px;
  display: flex;
  margin: 50px auto;
  padding: 30px 60px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  justify-content: space-between;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledItemText = styled.p`
  display: flex;
  flex-direction: column;
`;

const StyledItemHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "xs")};
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const StyledItemContent = styled.span`
  ${({ theme }) => useFontSize(theme)};
  font-weight: 500;
`;

const StyledIcon = styled(Icon)`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 10px;
`;

const WhyUs = () => {
  return (
    <StyledWrapper>
      {whyUs.map(({ icon, title, content }, index) => (
        <StyledItem key={index}>
          <StyledIcon icon={icon} />
          <StyledItemText>
            <StyledItemHeadline>{title}</StyledItemHeadline>
            <StyledItemContent>{content}</StyledItemContent>
          </StyledItemText>
        </StyledItem>
      ))}
    </StyledWrapper>
  );
};

export default WhyUs;
