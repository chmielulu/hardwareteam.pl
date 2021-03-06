import React from "react";
import styled, { keyframes } from "styled-components";
import loadingIcon from "@iconify/icons-mdi-light/loading";
import Icon from "@iconify/react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.lighterGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled(Icon)`
  font-size: 4rem;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = () => (
  <StyledWrapper>
    <StyledSpinner icon={loadingIcon} />
  </StyledWrapper>
);

export default Spinner;
