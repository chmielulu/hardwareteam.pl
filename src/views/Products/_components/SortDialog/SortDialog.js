import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Window from "@components/molecules/Dialog/Window/Window";
import { Radio } from "@components/atoms/";

const StyledHeadline = styled.span``;

const StyledOptionWrapper = styled.label``;

const SortDialog = ({ sort, isActive, onClose }) => {
  const [controlledRadios, setControlledRadios] = useState([
    { name: "Domyślne", checked: true, id: "default" },
    { name: "Cena od najtańszych", checked: false, id: "lowestPrice" },
    { name: "Cena od najdroższych", checked: false, id: "highestPrice" },
    { name: "Ocena: od najlepszej", checked: false, id: "bestGrade" },
    { name: "Nazwa: A-Z", checked: false, id: "nameAZ" },
    { name: "Nazwa: Z-A", checked: false, id: "nameZA" },
  ]);

  const handleOptionClick = (id) => {
    sort(id);
    setControlledRadios(
      controlledRadios.map((radio) =>
        radio.id === id ? { ...radio, checked: true } : radio
      )
    );
  };

  return (
    <Window title="Sortuj" isActive={isActive} onClose={onClose}>
      <StyledHeadline>Sortowanie według</StyledHeadline>

      {controlledRadios.map(({ name, checked, id }) => (
        <StyledOptionWrapper onClick={() => handleOptionClick(id)}>
          <Radio name="sort" checked={checked} />
          {name}
        </StyledOptionWrapper>
      ))}
    </Window>
  );
};

SortDialog.propTypes = {
  sort: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SortDialog;
