import React from "react";
import styled from "styled-components";
import { Button } from "@components/atoms";
import searchIcon from "@iconify/icons-clarity/search-line";
import Filter from "../Filter/Filter";

const StyledWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.lightGray};
  padding: 20px 25px 40px;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  padding: 10px 25px;
`;

const LeftNav = () => {
  return (
    <StyledWrapper>
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <StyledButton icon={searchIcon}>Więcej filtrów</StyledButton>
    </StyledWrapper>
  );
};

export default LeftNav;
