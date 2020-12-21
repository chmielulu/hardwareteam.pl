import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import { Spinner, ToolBox } from "@components/atoms";
import { useFontSize } from "@hooks/styled-components";
import icon from "@iconify/icons-la/file-invoice-dollar";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);

  :last-of-type {
    margin-bottom: 0;
  }
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
  position: relative;
`;

const StyledStatus = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 500;
`;

const StyledDate = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-top: 15px;
`;

const StyledOrderNumber = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-top: 5px;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme)}
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
`;

const StyledProductImg = styled(Img)`
  max-width: 150px;
  max-height: 130px;
`;

const StyledProductName = styled.p`
  ${({ theme }) => useFontSize(theme)}
  margin-left: 20px;
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
      </StyledRightColumn>
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
