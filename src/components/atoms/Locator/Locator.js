import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Link } from "react-router-dom";
import { useLocator } from "@hooks/utils";

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
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Locator = () => {
  const locations = useLocator();

  return (
    <StyledWrapper>
      {locations.map(({ name, link }, index) => (
        <div key={index}>
          <StyledItem>
            <StyledLink to={link}>{name}</StyledLink>
          </StyledItem>
          {index !== locations.length - 1 && (
            <StyledSeperator>&gt;</StyledSeperator>
          )}
        </div>
      ))}
    </StyledWrapper>
  );
};

export default Locator;
