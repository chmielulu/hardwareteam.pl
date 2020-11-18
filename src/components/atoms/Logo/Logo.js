import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { l } from "@constants/fontSizes";
import logo from "@assets/logo.png";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.h1`
  ${({ theme }) => useFontSize(theme, l)}
  font-weight: 400;
`;

const StyledImage = styled.img`
  width: 60px;
  height: auto;
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <StyledWrapper>
      <StyledImage src={logo} />
      <StyledText>Hardware Team</StyledText>
    </StyledWrapper>
  );
};

export default Logo;
