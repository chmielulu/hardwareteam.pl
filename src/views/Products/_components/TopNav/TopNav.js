import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Select, Pagination } from "@components/atoms";
import Icon from "@iconify/react";
import gridIcon from "@iconify/icons-oi/grid-four-up";
import listIcon from "@iconify/icons-oi/list-rich";
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
`;

const StyledPagination = styled(Pagination)`
  margin-left: auto;
`;

const StyledButtonsWrapper = styled.div`
  margin-right: 30px;
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
}) => {
  return (
    <StyledWrapper>
      <StyledButtonsWrapper>
        <StyledButton $isActive>
          <StyledIcon title="Widok listy szczegółowej" icon={listIcon} />
        </StyledButton>
        <StyledButton>
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
          "Popularność",
          "Cena: od najtańszych",
          "Cena: od najdroższych",
          "Ocena: od najlepszej",
          "Nazwa: A-Z",
          "Nazwa: Z-A",
        ]}
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
};

TopNav.defaultProps = {
  currentMinPrice: undefined,
  currentMaxPrice: undefined,
};

export default TopNav;
