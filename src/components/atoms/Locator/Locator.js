import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.ul`
  ${({ theme }) => useFontSize(theme)};
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSeperator = styled.span`
  margin: 0 6px;
`;

const StyledItem = styled.li`
  display: inline-flex;
  line-height: 1.4;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Locator = ({ location }) => (
  <StyledWrapper>
    {location.map(({ name, to }, index) => (
      <div key={index}>
        <StyledItem>
          <StyledLink to={to}>{name}</StyledLink>
        </StyledItem>
        {index !== location.length - 1 && (
          <StyledSeperator>&gt;</StyledSeperator>
        )}
      </div>
    ))}
  </StyledWrapper>
);

Locator.propTypes = {
  location: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
};
export default Locator;
