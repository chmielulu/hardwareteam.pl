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
import { useWindowSize } from "@hooks/utils";
import { useFluidSize } from "@hooks/styled-components";
import { recommendedProducts } from "../views/Index/_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;

  @media (max-width: 1160px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 90%;
    padding-bottom: ${useFluidSize({ min: 30, max: 60 })};
  }

  @media (max-width: 360px) {
    padding-bottom: 30px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 65px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  @media (max-width: 1380px) {
    padding: 20px 30px 30px;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0 0;
    border-bottom: 0;
  }
`;

const StyledOrderProcess = styled(OrderProcess)`
  margin-left: 100px;

  @media (max-width: 1480px) {
    margin-left: 50px;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  user-select: none;
`;

const StyledHeadline = styled(Headline).attrs(() => ({
  kind: secondary,
}))`
  @media (max-width: 1160px) {
    margin-left: 2.5%;
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const StyledSliderWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 1160px) {
    margin-left: 2.5%;
  }

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

const StyledWhyUs = styled(WhyUs)`
  @media (max-width: 1160px) {
    width: 95% !important;
    margin-left: auto;
    margin-right: auto;
  }
`;

const OrderTemplate = ({ level, children }) => {
  const { width } = useWindowSize();

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
              <Logo toSmall />
            </StyledLink>
            <StyledOrderProcess
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
              secondary
            />
          </StyledHeader>
          <main>
            {children}
            {width > 1024 && <StyledWhyUs />}
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
          </main>
        </StyledWrapper>
        {width > 1024 && <Footer kind={secondary} />}
      </>
    </BasicTemplate>
  );
};

OrderTemplate.propTypes = {
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
  children: PropTypes.node.isRequired,
};

export default OrderTemplate;
