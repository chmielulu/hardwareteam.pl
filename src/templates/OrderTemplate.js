import React, { useLayoutEffect } from "react";
import BasicTemplate from "@templates/BasicTemplate";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo, Headline } from "@components/atoms";
import {
  OrderProcess,
  WhyUs,
  CustomSwiper,
  ProductCard,
} from "@components/molecules";
import { Footer } from "@components/organisms";
import { secondary } from "@constants/kinds";
import { Link } from "react-router-dom";
import routes from "@routes";
import { recommendedProducts } from "../views/Index/_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 65px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

const StyledLogo = styled(Logo)`
  margin-right: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  user-select: none;
`;

const StyledHeadline = styled(Headline).attrs(() => ({
  kind: secondary,
}))`
  margin-top: 40px;
`;

const StyledSliderWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const OrderTemplate = ({ level, children }) => {
  useLayoutEffect(() => {
    const { body } = document;
    body.style.overflow = "";
  }, []);

  return (
    <BasicTemplate>
      <>
        <StyledWrapper>
          <StyledHeader>
            <StyledLink to={routes.index}>
              <StyledLogo />
            </StyledLink>
            <OrderProcess
              content={[
                { name: "Koszyk", isActive: false, isFinished: true },
                {
                  name: "Dostawa i płatność",
                  isActive: level === 1,
                  isFinished: level > 1,
                },
                {
                  name: "Podsumowanie",
                  isActive: level === 2,
                  isFinished: level > 2,
                },
                {
                  name: "Gotowe",
                  isActive: level === 3,
                  isFinished: level === 3,
                },
              ]}
            />
          </StyledHeader>
          {children}
          <WhyUs />
          {level >= 3 && (
            <>
              <StyledHeadline forwardedAs="h2">
                To może cię zainteresować
              </StyledHeadline>
              <StyledSliderWrapper>
                <CustomSwiper>
                  {recommendedProducts[0].map((props, index) => (
                    <ProductCard key={index} kind="secondary" {...props} />
                  ))}
                </CustomSwiper>
              </StyledSliderWrapper>
            </>
          )}
        </StyledWrapper>
        <Footer kind={secondary} />
      </>
    </BasicTemplate>
  );
};

OrderTemplate.propTypes = {
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
  children: PropTypes.node.isRequired,
};

export default OrderTemplate;
