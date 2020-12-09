/* eslint-disable no-console */
import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import { Link, useHistory } from "react-router-dom";
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
  text-align: center;
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 300;
  margin-right: 5px;

  ${({ $withoutText }) =>
    $withoutText &&
    css`
      display: none;
    `}
`;

const Pagination = ({
  current,
  min,
  max,
  withoutText,
  changePage,
  ...props
}) => {
  const [value, setValue] = useState(current);
  const reg = /^\d+$/;
  const history = useHistory();

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

    if (key === "Enter" && value !== current) {
      if (changePage) {
        changePage(value);
      } else {
        history.push(`?page=${value}`);
      }
    }

    return null;
  };

  useLayoutEffect(() => {
    setValue(current);
  }, [current]);

  return (
    <StyledWrapper {...props}>
      <StyledLink
        as={current === min ? "span" : undefined}
        to={current !== min ? { search: `?page=${current - 1}` } : undefined}
        $disabled={current === min}
        onClick={
          changePage && current !== min
            ? (e) => changePage(current - 1, e)
            : undefined
        }
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
        as={current === max ? "span" : undefined}
        to={current !== max ? { search: `?page=${current + 1}` } : undefined}
        $disabled={current === max}
        onClick={
          changePage && current !== max
            ? (e) => changePage(current + 1, e)
            : undefined
        }
      >
        <StyledText $withoutText={withoutText}>Następna</StyledText>
        <StyledSecondIcon icon={arrowIcon} />
      </StyledLink>
    </StyledWrapper>
  );
};

Pagination.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  withoutText: PropTypes.bool,
  changePage: PropTypes.func,
};

Pagination.defaultProps = {
  withoutText: null,
  changePage: null,
};

export default Pagination;
