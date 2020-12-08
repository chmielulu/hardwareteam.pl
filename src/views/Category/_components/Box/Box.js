import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  padding: 20px 30px 30px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 310px;
  flex-shrink: 0;
  height: 0%;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)}
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  ${({ $active }) =>
    $active &&
    css`
      font-weight: 500;
      :hover {
        text-decoration: none;
      }
    `}
`;

const StyledSecondList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  margin-left: 17px;
`;

const Box = ({ categories, subcategories, categoryId }) => {
  return (
    <StyledWrapper>
      <StyledHeadline>Kategorie</StyledHeadline>
      <StyledList>
        {categories.map(({ name, id }, index) => {
          const isActive = id === categoryId;

          return (
            <StyledItem key={index}>
              <StyledLink
                to={!isActive ? `${id}` : undefined}
                $active={isActive}
                as={isActive ? "span" : undefined}
              >
                {name}
              </StyledLink>

              {isActive && (
                <StyledSecondList>
                  {subcategories.map(({ name, id: subId }, index) => (
                    <StyledItem key={index}>
                      <StyledLink to={`${id}/${subId}`}>{name}</StyledLink>
                    </StyledItem>
                  ))}
                </StyledSecondList>
              )}
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
};

Box.propTypes = {
  categories: PropTypes.array.isRequired,
  subcategories: PropTypes.array.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default Box;
