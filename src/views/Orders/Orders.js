import React, { useState } from "react";
import styled from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import { Select, Pagination } from "@components/atoms";
import { useWindowSize } from "@hooks/utils";
import sortIcon from "@iconify/icons-clarity/two-way-arrows-line";
import Icon from "@iconify/react";
import SortDialog from "@components/molecules/Dialog/SortDialog/SortDialog";
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
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.darkGray};

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 20, max: 30 })};
  }
`;

const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1000px;
  margin-top: 30px;
`;

const SortButton = styled.button`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  height: 50px;
  width: 100%;
  margin-top: ${useFluidSize({ min: 20, max: 40 })};
  margin-bottom: ${useFluidSize({ min: 30, max: 40 })};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: ${useFluidSize({ min: 5, max: 10 })};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.8rem;
  margin-right: 10px;
`;

const User = () => {
  const { width } = useWindowSize();
  const [isDialogActive, setDialogActive] = useState(false);
  const [activeOption] = useState(0);

  const handleOpenDialog = () => setDialogActive(true);

  return (
    <UserTemplate Headline={() => <>Zamówienia (2)</>}>
      <>
        {width > 1024 ? (
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
        ) : (
          <SortButton onClick={handleOpenDialog}>
            <StyledIcon icon={sortIcon} />
            Sortuj
          </SortButton>
        )}

        <StyledOrdersWrapper>
          <StyledOrdersDate>Październik 2020</StyledOrdersDate>
          {orders.map(({ number, ...props }) => (
            <OrderCard key={number} number={number} {...props} />
          ))}
        </StyledOrdersWrapper>

        <StyledPaginationWrapper>
          <Pagination min={1} max={1} current={1} />
        </StyledPaginationWrapper>

        {width <= 1024 && (
          <SortDialog
            items={[
              { name: "Najnowszego", id: "newest" },
              { name: "Najstarszego", id: "oldest" },
              { name: "Najtańszego", id: "lowestPrice" },
              { name: "Najdroższego", id: "test" },
            ]}
            isActive={isDialogActive}
            onClose={() => setDialogActive(false)}
            activeOption={activeOption}
            sort={() => {}}
          />
        )}
      </>
    </UserTemplate>
  );
};

export default User;
