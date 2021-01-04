/* eslint-disable react/self-closing-comp */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import OrderTemplate from "@templates/OrderTemplate";
import { BackButton } from "@components/atoms";
import routes from "@routes/";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import { connect } from "react-redux";
import DeliveryAndPayment from "./DeliveryAndPayment/DeliveryAndPayment";
import Box from "./Box/Box";
import Summary from "./Summary/Summary";
import Done from "./Done/Done";

const StyledWrapper = styled.div`
  margin-top: 45px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 1480px) {
    padding: 0 0 0 50px;
  }

  @media (max-width: 1380px) {
    padding: 0 0 0 30px;
  }

  @media (max-width: 1160px) {
    padding: 0 30px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    margin-top: ${useFluidSize({ min: 25, max: 45 })};
  }

  @media (max-width: 360px) {
    margin-top: 25px;
  }
`;

const StyledLeftColumn = styled.div`
  max-width: 550px;

  @media (max-width: 1280px) {
    max-width: 500px;
  }

  @media (max-width: 720px) {
    max-width: unset;
    width: 100%;
  }
`;

const StyledRightColumn = styled.div``;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 400;
  margin-bottom: 25px;
`;

const StyledSecondHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 20, max: 30 })};
  }

  @media (max-width: 360px) {
    margin-bottom: 20px;
  }
`;

const StyledSection = styled.section`
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 30, max: 60 })};
  }

  @media (max-width: 360px) {
    margin-bottom: 30px;
  }
`;

const StyledBackButton = styled(BackButton)`
  @media (max-width: 1160px) {
    margin-left: 2.5%;
  }
`;

const NewOrder = ({ level, basket }) => {
  const { width } = useWindowSize();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [level]);

  return (
    <OrderTemplate level={level}>
      <>
        <StyledWrapper>
          {level !== 3 ? (
            <>
              <StyledLeftColumn>
                {level === 1 && (
                  <DeliveryAndPayment
                    Headline={StyledHeadline}
                    SecondHeadline={StyledSecondHeadline}
                    Section={StyledSection}
                  />
                )}
                {level === 2 && (
                  <Summary
                    Headline={StyledHeadline}
                    SecondHeadline={StyledSecondHeadline}
                    basket={basket}
                    Section={StyledSection}
                  />
                )}
              </StyledLeftColumn>
              <StyledRightColumn>
                <Box
                  values={[
                    { name: "Kod promocyjny", price: -82.24 },
                    { name: "Dostawa", price: 0 },
                    { name: "Płatność", price: 25 },
                  ]}
                  level={level}
                  basket={basket}
                />
              </StyledRightColumn>
            </>
          ) : (
            <Done />
          )}
        </StyledWrapper>
        {level < 3 && width > 1024 && (
          <StyledBackButton to={routes.basket}>
            Wróć do zakupów
          </StyledBackButton>
        )}
      </>
    </OrderTemplate>
  );
};

NewOrder.propTypes = {
  level: PropTypes.number.isRequired,
  basket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { basket } = state;

  return { basket };
};

export default connect(mapStateToProps)(NewOrder);
