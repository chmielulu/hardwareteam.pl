import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import { Spinner, ToolBox } from "@components/atoms";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import icon from "@iconify/icons-la/file-invoice-dollar";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
  position: relative;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 820px) {
    min-height: 130px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  width: 100%;
`;

const StyledLeftColumn = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: ${({ theme }) => theme.lighterGray};
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 820px) {
    min-width: 140px;
    padding: ${`${useFluidSize({ min: 20, max: 30, maxView: 820 })}
      ${useFluidSize({ min: 15, max: 30, maxView: 820 })}`};
  }

  @media (max-width: 360px) {
    padding: 20px 15px;
  }
`;

const StyledRightColumn = styled.div`
  display: flex;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid ${({ theme }) => theme.lighterGray};
  border-bottom: 1px solid ${({ theme }) => theme.lighterGray};
  border-right: 1px solid ${({ theme }) => theme.lighterGray};
  width: 70%;
  padding: 30px 0 30px 45px;

  @media (max-width: 820px) {
    align-items: flex-end;
    padding-left: ${useFluidSize({ min: 15, max: 45, maxView: 820 })};
    padding-top: ${useFluidSize({ min: 15, max: 30, maxView: 820 })};
    padding-bottom: ${useFluidSize({ min: 15, max: 30, maxView: 820 })};
  }

  @media (max-width: 360px) {
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const StyledStatus = styled.h4`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;
`;

const StyledDate = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-top: 15px;
  line-height: 1.4;
`;

const StyledOrderNumber = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-top: 5px;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;
  margin-top: 15px;
  display: block;
`;

const StyledProductWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  :first-of-type {
    margin-left: 0;
  }

  @media (max-width: 1380px) {
    display: none;

    :nth-of-type(1),
    :nth-of-type(2) {
      display: flex;
    }
  }

  @media (max-width: 820px) {
    margin-left: ${useFluidSize({ min: 15, max: 30, maxView: 820 })};
  }

  @media (max-width: 360px) {
    margin-left: 15px;
  }
`;

const StyledProductImg = styled(Img)`
  max-width: 150px;
  max-height: 130px;

  @media (max-width: 820px) {
    max-width: ${useFluidSize({
      min: 45,
      max: 150,
      maxView: 820,
      minView: 320,
    })};
    max-height: ${useFluidSize({
      min: 45,
      max: 130,
      maxView: 820,
      minView: 320,
    })};
  }

  @media (max-width: 320px) {
    max-width: 45px;
    max-height: 45px;
  }
`;

const StyledProductName = styled.p`
  ${({ theme }) => useFontSize(theme)}
  margin-left: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledToolBox = styled(ToolBox)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const OrderCard = ({ status, date: dateProp, number, price, products }) => {
  const date = new Date(dateProp);
  const formatedDate = date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <StyledWrapper>
      <StyledLink to={`/uzytkownik/zamowienia/${number}`}>
        <StyledLeftColumn>
          <StyledStatus>{status}</StyledStatus>
          <StyledDate>{formatedDate}</StyledDate>
          <StyledOrderNumber>nr {number}</StyledOrderNumber>
          <StyledPrice>{formatPrice(price)}</StyledPrice>
        </StyledLeftColumn>
        <StyledRightColumn>
          {products.length === 1 ? (
            <StyledProductWrapper>
              <StyledProductImg
                src={products[0].img}
                alt={products[0].name}
                decode={false}
                loader={<Spinner />}
              />
              <StyledProductName>{products[0].name}</StyledProductName>
            </StyledProductWrapper>
          ) : (
            products.slice(0, 3).map(({ img, name }, index) => (
              <StyledProductWrapper key={index}>
                <StyledProductImg
                  src={img}
                  alt={name}
                  decode={false}
                  loader={<Spinner />}
                />
              </StyledProductWrapper>
            ))
          )}
        </StyledRightColumn>
      </StyledLink>
      <StyledToolBox
        content={[
          {
            name: "Faktura VAT",
            icon,
            // eslint-disable-next-line no-alert
            action: () => window.alert("Clicked!"),
          },
        ]}
      />
    </StyledWrapper>
  );
};

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderCard;
