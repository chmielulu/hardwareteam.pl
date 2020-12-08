import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFluidSize, useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div``;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 45, max: 120 })};
    height: ${useFluidSize({ min: 45, max: 120 })};
  }

  @media (max-width: 360px) {
    width: 45px;
    height: 45px;
  }
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 400;
  margin-top: 10px;
  max-width: 200px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 0;
    margin-left: 40px;
    max-width: 80%;
    text-align: left;
  }
`;

const StyledCount = styled.span`
  color: ${({ theme }) => theme.gray};
  margin-left: 4px;
`;

const CategoryCard = ({ name, link, img, count, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledLink to={link}>
        <StyledImg src={img} alt={name} />
        <StyledHeadline>
          {name}
          <StyledCount>({count})</StyledCount>
        </StyledHeadline>
      </StyledLink>
    </StyledWrapper>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default CategoryCard;
