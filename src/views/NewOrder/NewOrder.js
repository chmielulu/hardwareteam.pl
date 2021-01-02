/* eslint-disable react/self-closing-comp */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import OrderTemplate from "@templates/OrderTemplate";
import { BackButton } from "@components/atoms";
import routes from "@routes/";
import { useFontSize } from "@hooks/styled-components";
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
`;

const StyledLeftColumn = styled.div``;

const StyledRightColumn = styled.div``;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
  margin-bottom: 25px;
`;

const StyledSecondHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  margin-bottom: 30px;
`;

const StyledBackButton = styled(BackButton)`
  margin-left: 10px;
`;

const NewOrder = ({ level, basket }) => {
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
                  />
                )}
                {level === 2 && (
                  <Summary
                    Headline={StyledHeadline}
                    SecondHeadline={StyledSecondHeadline}
                    basket={basket}
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
        {level < 3 && (
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
