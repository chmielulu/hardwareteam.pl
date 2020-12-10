import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Select, Pagination } from "@components/atoms";
import Icon from "@iconify/react";
import gridIcon from "@iconify/icons-oi/grid-four-up";
import listIcon from "@iconify/icons-oi/list-rich";
import { useSearchParameters } from "@hooks/utils";
import PriceRange from "../PriceRange/PriceRange";

const StyledWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-left: 0;
  border-right: 0;
  display: flex;
  padding: 30px;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  width: 240px;
  height: 0%;
  margin-left: 40px;

  @media (max-width: 1420px) {
    margin-left: auto;
    width: 200px;
  }

  @media (max-width: 1120px) {
    width: 160px;
  }
`;

const StyledPagination = styled(Pagination)`
  margin-left: auto;

  @media (max-width: 1420px) {
    display: none;
  }
`;

const StyledButtonsWrapper = styled.div`
  margin-right: 30px;

  @media (max-width: 1220px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.gray};
  background: transparent;
  border: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  outline: none;
  margin-right: 15px;
  :last-of-type {
    margin-right: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.black};
      cursor: default;
    `};

  @media (max-width: 1220px) {
    margin-right: 0;
    margin-bottom: 5px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;
`;

const TopNav = ({
  currentPage,
  allPages,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  changePage,
  changePriceRange,
  sort,
  changeToPrimary,
  changeToSecondary,
  activeGrid,
}) => {
  const [activeOption, setActiveOption] = useState(0);
  const { sort: sortParam } = useSearchParameters();

  useEffect(() => {
    if (!sortParam) return undefined;

    if (sortParam === "lowestPrice") setActiveOption(1);
    if (sortParam === "highestPrice") setActiveOption(2);
    if (sortParam === "bestGrade") setActiveOption(3);
    if (sortParam === "nameAZ") setActiveOption(4);
    if (sortParam === "nameZA") setActiveOption(5);
    return undefined;
  }, [sortParam]);

  return (
    <StyledWrapper>
      <StyledButtonsWrapper>
        <StyledButton
          $isActive={activeGrid === "primary"}
          onClick={activeGrid !== "primary" ? changeToPrimary : undefined}
        >
          <StyledIcon title="Widok listy szczegółowej" icon={listIcon} />
        </StyledButton>
        <StyledButton
          $isActive={activeGrid === "secondary"}
          onClick={activeGrid !== "secondary" ? changeToSecondary : undefined}
        >
          <StyledIcon title="Widok kafelków" icon={gridIcon} />
        </StyledButton>
      </StyledButtonsWrapper>
      <PriceRange
        min={minPrice}
        max={maxPrice}
        currentMin={currentMinPrice}
        currentMax={currentMaxPrice}
        changePriceRange={changePriceRange}
      />
      <StyledSelect
        options={[
          { name: "Domyślne", method: () => sort("default") },
          { name: "Cena od najtańszych", method: () => sort("lowestPrice") },
          { name: "Cena od najdroższych", method: () => sort("highestPrice") },
          { name: "Ocena: od najlepszej", method: () => sort("bestGrade") },
          { name: "Nazwa: A-Z", method: () => sort("nameAZ") },
          { name: "Nazwa: Z-A", method: () => sort("nameZA") },
        ]}
        initialActiveOption={activeOption}
      />
      <StyledPagination
        max={allPages}
        min={1}
        current={currentPage}
        withoutText
        changePage={changePage}
      />
    </StyledWrapper>
  );
};

TopNav.propTypes = {
  currentPage: PropTypes.number.isRequired,
  allPages: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  currentMinPrice: PropTypes.number,
  currentMaxPrice: PropTypes.number,
  changePage: PropTypes.func.isRequired,
  changePriceRange: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  changeToPrimary: PropTypes.func.isRequired,
  changeToSecondary: PropTypes.func.isRequired,
  activeGrid: PropTypes.string.isRequired,
};

TopNav.defaultProps = {
  currentMinPrice: undefined,
  currentMaxPrice: undefined,
};

export default TopNav;
