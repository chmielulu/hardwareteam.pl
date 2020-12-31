import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Window from "@components/molecules/Dialog/Window/Window";
import { Radio, Button } from "@components/atoms/";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";

const StyledWrapper = styled.div`
  margin: ${useFluidSize({ min: 20, max: 40 })} 0;

  @media (max-width: 360px) {
    margin: 20px 0;
  }
`;

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-left: 5%;
  display: block;
  margin-bottom: ${useFluidSize({ min: 10, max: 20 })};

  @media (max-width: 360px) {
    margin-bottom: 10px;
  }
`;

const StyledOptionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 15px 20px;

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

const SortDialog = ({ sort, isActive, onClose, items, activeOption }) => {
  const [controlledRadios, setControlledRadios] = useState(
    items.map((item, index) => ({
      ...item,
      checked: index === 0,
    }))
  );

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

  const updateRadios = () => {
    setControlledRadios(
      controlledRadios.map((radio, index) =>
        index === activeOption
          ? { ...radio, checked: true }
          : { ...radio, checked: false }
      )
    );
  };

  useLayoutEffect(() => {
    updateRadios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOption]);

  useLayoutEffect(() => {
    if (
      isActive &&
      activeOption !== controlledRadios.findIndex((radio) => radio.checked)
    ) {
      updateRadios();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <Window
      title="Sortuj"
      isActive={isActive}
      onClose={onClose}
      bottomBar={() => <BottomBar onClick={handleButtonClick} />}
    >
      <StyledWrapper>
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
      </StyledWrapper>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  activeOption: PropTypes.number,
};

SortDialog.defaultProps = {
  activeOption: null,
};

export default SortDialog;
