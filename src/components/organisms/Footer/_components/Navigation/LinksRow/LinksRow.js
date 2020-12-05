import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import Icon from "@iconify/react";
import angleIcon from "@iconify/icons-clarity/angle-line";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    order: 1;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};

    :first-of-type {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;

const StyledHeadlineWrapper = styled.div`
  @media (max-width: 1024px) {
    position: relative;
    padding: 15px;
  }
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-bottom: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 160px;

  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "l", "xl")}
    margin-bottom: 0;
    font-weight: 300;
    max-width: 80%;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-height: 0px;
    transition: max-height 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
    padding-left: 20px;

    ${({ $isActive }) =>
      $isActive &&
      css`
        max-height: 400px;
      `}
  }
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-bottom: 10px;
  max-width: 220px;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0;
    padding: 10px 0;

    :last-of-type {
      margin-bottom: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.2rem;
  position: absolute;
  height: 100%;
  top: 0;
  right: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg) !important;
    `}
`;

const LinksRow = ({ title, items }) => {
  const [isActive, setActive] = useState(false);
  const { width } = useWindowSize();

  const handleClick = () => setActive(!isActive);

  return (
    <StyledWrapper>
      <StyledHeadlineWrapper onClick={width <= 1024 ? handleClick : undefined}>
        <StyledHeadline>{title}</StyledHeadline>
        {width <= 1024 && <StyledIcon icon={angleIcon} $isActive={isActive} />}
      </StyledHeadlineWrapper>
      <StyledList $isActive={isActive}>
        {items.map(({ name, link }, index) => (
          <StyledItem key={index}>
            <StyledLink to={link}>{name}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

LinksRow.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LinksRow;
