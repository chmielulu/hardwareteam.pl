import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import Icon from "@iconify/react";
import balanceIcon from "@iconify/icons-clarity/balance-line";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 7px;
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
`;

const ComparedButton = () => {
  return (
    <StyledWrapper>
      <StyledIcon icon={balanceIcon} />
      <StyledText>Dodaj do porównania</StyledText>
    </StyledWrapper>
  );
};

export default ComparedButton;
