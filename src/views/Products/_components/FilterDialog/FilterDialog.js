import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "@components/atoms";
import PropTypes from "prop-types";
import Dialog from "@components/molecules/Dialog/Window/Window";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import Filter from "../Filter/Filter";
import PriceRange from "../PriceRange/PriceRange";

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 5%;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 135px);

  ${({ $isActive }) =>
    $isActive &&
    css`
      position: static;
    `}
`;

const StyledBottomBarWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 5%;
  display: flex;
  align-items: center;
  height: 75px;
`;

const FiltersWrapper = styled.div`
  margin-top: 20px;
  overflow: hidden;
`;

const FilterDialog = ({
  isActive,
  onClose,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  changePriceRange,
}) => {
  const [activeOption, setActiveOption] = useState(0);
  const [isItemsActive, setItemsActive] = useState(false);

  const handleClose = () => {
    if (isItemsActive) {
      setItemsActive(false);
    } else {
      onClose();
    }
  };

  const handleButtonClick = () => handleClose();

  const handleHeaderClick = (key) => {
    setActiveOption(key);
    setItemsActive(true);
  };

  return (
    <Dialog
      title="Filtruj"
      isActive={isActive}
      onClose={handleClose}
      bottomBar={() => <BottomBar onClick={handleButtonClick} />}
    >
      <StyledWrapper $isActive={isItemsActive}>
        <PriceRange
          min={minPrice}
          max={maxPrice}
          currentMinPrice={currentMinPrice}
          currentMaxPrice={currentMaxPrice}
          changePriceRange={changePriceRange}
        />
        <FiltersWrapper>
          {[...Array(7).keys()].map((key) => (
            <Filter
              handleHeaderClick={() => handleHeaderClick(key)}
              isItemsActive={isItemsActive && activeOption === key}
              key={key}
            />
          ))}
        </FiltersWrapper>
      </StyledWrapper>
    </Dialog>
  );
};

// eslint-disable-next-line react/prop-types
function BottomBar({ onClick }) {
  return (
    <StyledBottomBarWrapper onClick={onClick}>
      <Button fullWidth icon={arrowIcon} rotateIcon={-90}>
        Gotowe
      </Button>
    </StyledBottomBarWrapper>
  );
}

FilterDialog.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  currentMinPrice: PropTypes.number,
  currentMaxPrice: PropTypes.number,
  changePriceRange: PropTypes.func.isRequired,
};

FilterDialog.defaultProps = {
  currentMinPrice: undefined,
  currentMaxPrice: undefined,
};

export default FilterDialog;
