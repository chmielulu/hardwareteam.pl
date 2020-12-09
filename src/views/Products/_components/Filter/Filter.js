import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Checkbox } from "@components/atoms";
import { Icon } from "@iconify/react";
import angleIcon from "@iconify/icons-clarity/angle-line";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.section`
  margin-bottom: 30px;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
`;

const StyledButton = styled.button`
  ${({ theme }) => useFontSize(theme)}
  color: ${({ theme }) => theme.gray};
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-bottom: 4px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledText = styled.div`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-left: 5px;
`;

const StyledCount = styled.span`
  color: ${({ theme }) => theme.gray};
`;

const ShowMoreButton = styled.button`
  ${({ theme }) => useFontSize(theme)}
  background: transparent;
  border: none;
  font-weight: 300;
  color: ${({ theme }) => theme.primary};
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg) !important;
    `}
`;

const Filter = () => {
  const [isMoreActive, setMoreActive] = useState(false);
  const [isAnyChecked, setAnyChecked] = useState(false);
  const [controlledCheckboxes, setControlledCheckboxes] = useState(
    items.map(({ name }) => ({
      name,
      checked: false,
    }))
  );

  const handleCheckboxOnChange = (id) => {
    setControlledCheckboxes(
      controlledCheckboxes.map((item, index) =>
        id === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleMoreButtonClick = () => {
    setMoreActive(!isMoreActive);
  };

  const handleCheckAllCheckboxes = () => {
    if (!isAnyChecked) {
      setControlledCheckboxes(
        controlledCheckboxes.map((item) => ({ ...item, checked: true }))
      );
    } else {
      setControlledCheckboxes(
        controlledCheckboxes.map((item) => ({ ...item, checked: false }))
      );
    }
  };

  useEffect(() => {
    if (controlledCheckboxes.some((checkbox) => checkbox.checked)) {
      setAnyChecked(true);
    } else {
      setAnyChecked(false);
    }
  }, [controlledCheckboxes]);

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeadline>Producent</StyledHeadline>
        <StyledButton onClick={handleCheckAllCheckboxes}>
          {isAnyChecked ? "Wyczyść" : "Zaznacz"}
        </StyledButton>
      </StyledHeader>

      {(isMoreActive ? items : items.slice(0, 6)).map(
        ({ name, count, id }, index) => (
          <StyledItem key={id}>
            <Checkbox
              name={name}
              id={id.toString()}
              checked={controlledCheckboxes[index].checked}
              onChange={() => handleCheckboxOnChange(id)}
              render={() => (
                <StyledText>
                  {name} <StyledCount>({count})</StyledCount>
                </StyledText>
              )}
            />
          </StyledItem>
        )
      )}

      {items.length > 6 && (
        <ShowMoreButton onClick={handleMoreButtonClick}>
          <StyledIcon icon={angleIcon} $isActive={isMoreActive} />
          {isMoreActive ? "Zwiń" : "Pokaż więcej"}
        </ShowMoreButton>
      )}
    </StyledWrapper>
  );
};

/* eslint-disable no-var */
var items = [...Array(8).keys()].map((key) => ({
  name: "Samsung",
  count: 58,
  id: key,
}));

export default Filter;
