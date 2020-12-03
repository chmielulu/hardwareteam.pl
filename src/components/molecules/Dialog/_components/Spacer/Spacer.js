import { useFontSize } from "@hooks/styled-components";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  color: ${({ theme }) => theme.gray};
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 1024px) {
    margin: 15px 0;
    width: 100%;
  }
`;

const StyledLine = styled.span`
  background: ${({ theme }) => theme.gray};
  height: 1px;
  width: 80px;
  display: block;

  :first-of-type {
    margin-right: 15px;
  }

  :last-of-type {
    margin-left: 15px;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

const Spacer = () => (
  <StyledWrapper>
    <StyledLine />
    albo
    <StyledLine />
  </StyledWrapper>
);

export default Spacer;
