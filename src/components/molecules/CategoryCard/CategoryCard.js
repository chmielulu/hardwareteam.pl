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
  }
`;

const StyledImg = styled.img`
  max-width: 235px;
  max-height: 201px;

  @media (max-width: 1024px) {
    max-width: ${useFluidSize(50, 200)};
    max-height: ${useFluidSize(45, 165)};
  }

  @media (max-width: 360px) {
    max-width: 50px;
    max-height: 45px;
  }
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 400;
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: 0;
    margin-left: 30px;
  }
`;

const StyledCount = styled.span`
  color: ${({ theme }) => theme.gray};
  margin-left: 4px;
`;

const CategoryCard = ({ name, link, img, count }) => {
  return (
    <StyledWrapper>
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
