import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Headline } from "@components/atoms";
import { CustomSwiper } from "@components/molecules";
import { Link } from "react-router-dom";
import { useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 50px 25px;
  margin: auto;
  display: flex;
  justify-content: center;

  .swiper-slide:last-of-type {
    margin-right: 0 !important;
  }

  @media (max-width: 1024px) {
    padding: ${useFluidSize({ min: 30, max: 50 })} 20px;
  }

  @media (max-width: 360px) {
    padding: 30px 20px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledImg = styled.img`
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.2s ease-in-out;
  max-width: 150px;
  max-height: 60px;

  :hover {
    filter: grayscale(0);
  }

  @media (max-width: 1024px) {
    max-width: ${useFluidSize({ min: 100, max: 150 })};
    max-height: ${useFluidSize({ min: 40, max: 60 })};
  }

  @media (max-width: 360px) {
    max-width: 100px;
    max-height: 40px;
  }
`;

const BrandZone = ({ brands }) => {
  return (
    <StyledWrapper>
      <Headline>Strefa Marek</Headline>
      <StyledInnerWrapper>
        <CustomSwiper
          spaceBetween={35}
          breakpoints={{ 540: { spaceBetween: 50 } }}
        >
          {brands.map(({ link, icon, name }) => (
            <StyledLink to={link}>
              <StyledImg src={icon} alt={name} />
            </StyledLink>
          ))}
        </CustomSwiper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

BrandZone.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default BrandZone;
