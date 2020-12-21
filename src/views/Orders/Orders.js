import React from "react";
import styled from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { useFontSize } from "@hooks/styled-components";
import { Select, Pagination } from "@components/atoms";
import OrderCard from "./_components/OrderCard/OrderCard";
import { orders } from "./_dummyContent/dummyContent";

const StyledSortWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  margin: 30px 0;
`;

const StyledSelect = styled(Select)`
  margin-left: 15px;
  width: 160px;
`;

const StyledOrdersWrapper = styled.div``;

const StyledOrdersDate = styled.h3`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.darkGray};
`;

const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1000px;
  margin-top: 30px;
`;

const User = () => {
  return (
    <UserTemplate Headline={() => <>Zamówienia (2)</>}>
      <>
        <StyledSortWrapper>
          Sortuj od:
          <StyledSelect
            options={[
              { name: "Najnowszego" },
              { name: "Najstarszego" },
              { name: "Najtańszego" },
              { name: "Najdroższego" },
            ]}
          />
        </StyledSortWrapper>

        <StyledOrdersWrapper>
          <StyledOrdersDate>Październik 2020</StyledOrdersDate>
          {orders.map(({ number, ...props }) => (
            <OrderCard key={number} number={number} {...props} />
          ))}
        </StyledOrdersWrapper>

        <StyledPaginationWrapper>
          <Pagination min={1} max={1} current={1} />
        </StyledPaginationWrapper>
      </>
    </UserTemplate>
  );
};

export default User;
