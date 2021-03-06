import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import Icon from "@iconify/react";
import gridIcon from "@iconify/icons-oi/grid-four-up";
import listIcon from "@iconify/icons-oi/list-rich";
import filterIcon from "@iconify/icons-clarity/filter-line";
import sortIcon from "@iconify/icons-clarity/two-way-arrows-line";
import { primary, secondary } from "@constants/kinds";
import { useSearchParameters } from "@hooks/utils";
import SortDialog from "@components/molecules/Dialog/SortDialog/SortDialog";
import FilterDialog from "../FilterDialog/FilterDialog";

const StyledWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.lightGray};
  margin-top: ${useFluidSize({ min: 20, max: 30 })};
  height: 50px;
  display: flex;
  border-radius: ${useFluidSize({ min: 5, max: 10 })};

  @media (max-width: 360px) {
    margin-top: 20px;
    border-radius: 5px;
  }
`;

const StyledIcon = styled(Icon)``;

const Button = styled.button`
  height: 100%;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.lightGray};
  cursor: pointer;

  :last-of-type {
    border-right: 0;
  }
`;

const ChangeLayoutButton = styled(Button)`
  padding: 0 15px;
  justify-content: center;

  > ${StyledIcon} {
    font-size: 2.5rem;
  }
`;

const SecondButton = styled(Button)`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  flex: 1;
  padding-left: 5%;

  > ${StyledIcon} {
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;

const MobileNav = ({
  changeToPrimary,
  changeToSecondary,
  activeGrid,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  changePriceRange,
  sort,
}) => {
  const [isFilterDialogActive, setFilterDialogActive] = useState(false);
  const [isSortDialogActive, setSortDialogActive] = useState(false);

  const handleFilterClick = () => setFilterDialogActive(true);
  const handleFilterOnClose = () => setFilterDialogActive(false);

  const handleSortClick = () => setSortDialogActive(true);
  const handleSortOnClose = () => setSortDialogActive(false);

  const [activeOption, setActiveOption] = useState(0);
  const { sort: sortParam } = useSearchParameters();

  useLayoutEffect(() => {
    if (!sortParam || sortParam === "default") setActiveOption(0);
    if (sortParam === "lowestPrice") setActiveOption(1);
    if (sortParam === "highestPrice") setActiveOption(2);
    if (sortParam === "bestGrade") setActiveOption(3);
    if (sortParam === "nameAZ") setActiveOption(4);
    if (sortParam === "nameZA") setActiveOption(5);
  }, [sortParam]);

  return (
    <>
      <StyledWrapper>
        <ChangeLayoutButton
          ariaLabel={activeGrid === primary ? "Widok kafelków" : "Widok listy"}
          onClick={activeGrid === primary ? changeToSecondary : changeToPrimary}
        >
          <StyledIcon icon={activeGrid === primary ? gridIcon : listIcon} />
        </ChangeLayoutButton>
        <SecondButton onClick={handleFilterClick}>
          <StyledIcon icon={filterIcon} />
          Filtruj
        </SecondButton>
        <SecondButton onClick={handleSortClick}>
          <StyledIcon icon={sortIcon} />
          Sortuj
        </SecondButton>
      </StyledWrapper>

      <FilterDialog
        isActive={isFilterDialogActive}
        onClose={handleFilterOnClose}
        minPrice={minPrice}
        maxPrice={maxPrice}
        currentMinPrice={currentMinPrice}
        currentMaxPrice={currentMaxPrice}
        changePriceRange={changePriceRange}
      />

      <SortDialog
        isActive={isSortDialogActive}
        onClose={handleSortOnClose}
        sort={sort}
        items={[
          { name: "Domyślne", id: "default" },
          { name: "Cena od najtańszych", id: "lowestPrice" },
          { name: "Cena od najdroższych", id: "highestPrice" },
          { name: "Ocena: od najlepszej", id: "bestGrade" },
          { name: "Nazwa: A-Z", id: "nameAZ" },
          { name: "Nazwa: Z-A", id: "nameZA" },
        ]}
        activeOption={activeOption}
      />
    </>
  );
};

MobileNav.propTypes = {
  changeToSecondary: PropTypes.func.isRequired,
  changeToPrimary: PropTypes.func.isRequired,
  activeGrid: PropTypes.oneOf([primary, secondary]).isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  currentMinPrice: PropTypes.number,
  currentMaxPrice: PropTypes.number,
  changePriceRange: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

MobileNav.defaultProps = {
  currentMinPrice: undefined,
  currentMaxPrice: undefined,
};

export default MobileNav;
