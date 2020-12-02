import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import checkIcon from "@iconify/icons-clarity/check-circle-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
  font-weight: 300;
  align-items: center;
`;

const StyledConfirmendIcon = styled(Icon)`
  font-size: 2.2rem;
  color: #34ac4f;
  margin-right: 7px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ max: 2.2, min: 1.8, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const Confirmed = () => (
  <StyledWrapper>
    <StyledConfirmendIcon icon={checkIcon} /> Potwierdzony zakup
  </StyledWrapper>
);

export default Confirmed;
