import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Checkbox } from "@components/atoms";
import { Icon } from "@iconify/react";
import angleIcon from "@iconify/icons-clarity/angle-line";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";

const StyledWrapper = styled.section`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    padding: 15px 10px 15px 20px;
    margin-bottom: 0;

    ${StyledWrapper}:first-of-type & {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.4, max: 1.8, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const StyledButton = styled.button`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  color: ${({ theme }) => theme.gray};
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-bottom: 4px;

  @media (max-width: 1024px) {
    margin-top: -10px;
    padding: 10px 0;
    margin-bottom: 10px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    padding: 15px 10px;
    margin-bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};

    :first-of-type {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;

const StyledText = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg) !important;
    `}
`;

const StyledArrow = styled(Icon)`
  font-size: 2rem;
  transform: rotate(90deg) !important;
`;

const StyledItemsWrapper = styled.div`
  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    right: 100%;
    transition: transform 0.4s ease;
    width: 100%;
    background: #fff;
    min-height: 100%;
    z-index: 20;
    padding: 20px 5%;

    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: translateX(100%);
      `}
  }
`;

const Filter = ({ isItemsActive, handleHeaderClick }) => {
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

  const { width } = useWindowSize();

  return (
    <StyledWrapper>
      <StyledHeader onClick={handleHeaderClick}>
        <StyledHeadline>Producent</StyledHeadline>
        {width > 1024 ? (
          <StyledButton onClick={handleCheckAllCheckboxes}>
            {isAnyChecked ? "Wyczyść" : "Zaznacz"}
          </StyledButton>
        ) : (
          <StyledArrow icon={arrowIcon} />
        )}
      </StyledHeader>

      <StyledItemsWrapper $isActive={isItemsActive}>
        {width <= 1024 && (
          <StyledButton onClick={handleCheckAllCheckboxes}>
            {isAnyChecked ? "Wyczyść" : "Zaznacz"}
          </StyledButton>
        )}
        {(isMoreActive
          ? items
          : items.slice(0, width > 1024 ? 6 : undefined)
        ).map(({ name, count, id }, index) => (
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
        ))}
      </StyledItemsWrapper>

      {width > 1024 && items.length > 6 && (
        <ShowMoreButton onClick={handleMoreButtonClick}>
          <StyledIcon icon={angleIcon} $isActive={isMoreActive} />
          {isMoreActive ? "Zwiń" : "Pokaż więcej"}
        </ShowMoreButton>
      )}
    </StyledWrapper>
  );
};

Filter.propTypes = {
  isItemsActive: PropTypes.bool,
  handleHeaderClick: PropTypes.func,
};

Filter.defaultProps = {
  isItemsActive: false,
  handleHeaderClick: () => {},
};

/* eslint-disable no-var */
// eslint-disable-next-line vars-on-top
var items = [...Array(15).keys()].map((key) => ({
  name: "Samsung",
  count: 58,
  id: key,
}));

export default Filter;
