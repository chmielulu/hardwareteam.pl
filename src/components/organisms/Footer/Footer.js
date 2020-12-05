import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BrandZone from "./_components/BrandZone/BrandZone";
import Newsletter from "./_components/Newsletter/Newsletter";
import Navigation from "./_components/Navigation/Navigation";
import Copyright from "./_components/Copyright/Copyright";

const StyledWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;

const Footer = ({ brands, copyrightImages }) => {
  return (
    <StyledWrapper>
      <BrandZone brands={brands} />
      <Newsletter />
      <Navigation />
      <Copyright copyrightImages={copyrightImages} />
    </StyledWrapper>
  );
};

Footer.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
  copyrightImages: PropTypes.array.isRequired,
};

export default Footer;
