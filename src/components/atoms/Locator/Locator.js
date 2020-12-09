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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledSeperator = styled.span`
  margin: 0 6px;
`;

const StyledItem = styled.li`
  display: inline-flex;
  line-height: 1.4;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Locator = ({ locations }) => {
  return (
    <StyledWrapper>
      {[{ name: "Hardware Team", link: "/" }]
        .concat(locations)
        .map(({ name, link, onClick }, index) => (
          <div key={link}>
            <StyledItem>
              <StyledLink to={link} onClick={onClick || undefined}>
                {name}
              </StyledLink>
            </StyledItem>
            {index !== locations.length && (
              <StyledSeperator>&gt;</StyledSeperator>
            )}
          </div>
        ))}
    </StyledWrapper>
  );
};

Locator.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default Locator;
