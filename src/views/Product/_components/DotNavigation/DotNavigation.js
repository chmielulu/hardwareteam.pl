import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 75%;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const StyledDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.lightGray};
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-top: 10px;

  :last-of-type {
    margin-right: 0;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background: ${theme.primary};
      transform: scale(1.2);
      transform-origin: center center;
      cursor: default;
    `}

  @media (max-width: 720px) {
    width: 15px;
    height: 15px;
  }
`;

const DotNavigation = ({ count, active, changeActive, ...props }) => {
  return (
    <StyledWrapper {...props}>
      {[...Array(count).keys()].map((key) => (
        <StyledDot
          key={key}
          $isActive={key === active}
          onClick={key !== active ? () => changeActive(key) : undefined}
        />
      ))}
    </StyledWrapper>
  );
};

DotNavigation.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
};

export default DotNavigation;
