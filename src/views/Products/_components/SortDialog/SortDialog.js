import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Window from "@components/molecules/Dialog/Window/Window";
import { Radio, Button } from "@components/atoms/";
import { useFontSize } from "@hooks/styled-components";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-left: 5%;
  margin-top: 20px;
  display: block;
  margin-bottom: 10px;
`;

const StyledOptionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 15px 4%;

  :first-of-type {
    border-top: 1px solid ${({ theme }) => theme.lightGray};
  }
`;

const StyledTextWrapper = styled.span`
  font-weight: 300;
  ${({ theme }) => useFontSize(theme, "m", "l")}
`;

const StyledBottomBarWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 5%;
  display: flex;
  align-items: center;
  height: 75px;
`;

const SortDialog = ({ sort, isActive, onClose }) => {
  const [controlledRadios, setControlledRadios] = useState([
    { name: "Domyślne", id: "default" },
    { name: "Cena od najtańszych", id: "lowestPrice", checked: true },
    { name: "Cena od najdroższych", id: "highestPrice", checked: false },
    { name: "Ocena: od najlepszej", id: "bestGrade", checked: false },
    { name: "Nazwa: A-Z", id: "nameAZ", checked: false },
    { name: "Nazwa: Z-A", id: "nameZA", checked: false },
  ]);

  const handleOptionClick = (id) => {
    setControlledRadios(
      controlledRadios.map((radio) =>
        radio.id === id
          ? { ...radio, checked: true }
          : { ...radio, checked: false }
      )
    );
  };

  const handleButtonClick = () => {
    const { id } = controlledRadios.find((radio) => radio.checked === true);
    sort(id);
    onClose();
  };

  return (
    <Window
      title="Sortuj"
      isActive={isActive}
      onClose={onClose}
      bottomBar={() => <BottomBar onClick={handleButtonClick} />}
    >
      <StyledHeadline>Sortowanie według</StyledHeadline>

      {controlledRadios.map(({ name, id, checked }) => (
        <StyledOptionWrapper key={id} onClick={() => handleOptionClick(id)}>
          <Radio
            name="sort"
            render={() => <StyledTextWrapper>{name}</StyledTextWrapper>}
            checked={checked || false}
            readOnly
          />
        </StyledOptionWrapper>
      ))}
    </Window>
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

SortDialog.propTypes = {
  sort: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SortDialog;
