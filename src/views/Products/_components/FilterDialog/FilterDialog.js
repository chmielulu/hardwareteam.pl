import React from "react";
import PropTypes from "prop-types";
import Dialog from "@components/molecules/Dialog/Window/Window";
import Filter from "../Filter/Filter";
import PriceRange from "../PriceRange/PriceRange";

const FilterDialog = ({
  isActive,
  onClose,
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  changePriceRange,
}) => {
  return (
    <Dialog title="Filtruj" isActive={isActive} onClose={onClose}>
      <PriceRange
        min={minPrice}
        max={maxPrice}
        currentMinPrice={currentMinPrice}
        currentMaxPrice={currentMaxPrice}
        changePriceRange={changePriceRange}
      />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </Dialog>
  );
};

FilterDialog.propTypes = {
  isActive: PropTypes.func.isRequired,
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
