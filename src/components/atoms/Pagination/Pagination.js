/* eslint-disable no-console */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import { Link } from "react-router-dom";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const StyledFirstIcon = styled(StyledIcon)`
  transform: rotate(-90deg) !important;
`;

const StyledSecondIcon = styled(StyledIcon)`
  transform: rotate(90deg) !important;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.gray}!important;
      cursor: not-allowed;
    `}
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  color: ${({ theme }) => theme.gray};
  display: flex;
  align-items: center;
  margin: 0 15px 0 15px;
`;

const StyledInput = styled.input`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  width: unset;
  display: flex;
  outline: none;
  font-weight: 300;
  border: 1.5px solid ${({ theme }) => theme.gray};
  padding: 4px 4px;
  border-radius: 5px;
  max-width: 30px;
  padding-right: 2px;
  margin-right: 8px;
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 300;
  margin-right: 5px;
`;

const Pagination = ({ prev, current, next, min, max }) => {
  const [value, setValue] = useState(current);
  const reg = /^\d+$/;

  const handleInputChange = ({ target: { value } }) => {
    if (value === "") {
      setValue(value);
      return null;
    }

    if (!reg.test(value)) {
      return null;
    }

    if (value > max || value < min) {
      return null;
    }

    setValue(value);
    return null;
  };

  const handleKeyDown = ({ key }) => {
    if (!reg.test(value)) {
      return null;
    }

    if (value > max || value < min) {
      return null;
    }

    if (key === "Enter") {
      console.log("Enter!");
    }

    return null;
  };

  return (
    <StyledWrapper>
      <StyledLink
        as={!prev ? "span" : undefined}
        to={prev || undefined}
        $disabled={!prev}
      >
        <StyledFirstIcon icon={arrowIcon} />
      </StyledLink>
      <StyledInnerWrapper>
        <StyledInput
          type="text"
          min={min}
          max={max}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        z {max}
      </StyledInnerWrapper>
      <StyledLink
        as={!next ? "span" : undefined}
        to={next || undefined}
        $disabled={!next}
      >
        <StyledText>Następna</StyledText>
        <StyledSecondIcon icon={arrowIcon} />
      </StyledLink>
    </StyledWrapper>
  );
};

Pagination.propTypes = {
  prev: PropTypes.string,
  current: PropTypes.number.isRequired,
  next: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  prev: null,
  next: null,
};

export default Pagination;
