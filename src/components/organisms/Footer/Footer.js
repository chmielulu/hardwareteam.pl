import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { primary, secondary } from "@constants/kinds";
import BrandZone from "./_components/BrandZone/BrandZone";
import Newsletter from "./_components/Newsletter/Newsletter";
import Navigation from "./_components/Navigation/Navigation";
import Copyright from "./_components/Copyright/Copyright";

const StyledWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 30px auto;
  }

  ${({ $kind }) =>
    $kind === secondary &&
    css`
      margin: 0;
      margin-bottom: 20px;
    `}
`;

const Footer = ({ brands, copyrightImages, kind }) => {
  return (
    <StyledWrapper $kind={kind}>
      {kind === primary && (
        <>
          <BrandZone brands={brands} />
          <Newsletter />
          <Navigation />
        </>
      )}
      <Copyright copyrightImages={copyrightImages} kind={kind} />
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
  kind: PropTypes.oneOf([primary, secondary]),
};

Footer.defaultProps = {
  kind: primary,
};

export default Footer;
