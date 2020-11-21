import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Button } from "@components/atoms";
import { tertiary } from "@constants/kinds";
import { useFontSize } from "@hooks/styled-components";
import Link from "../../StyledLink/StyledLink";

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  top: calc(100% + 1px);
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
  left: 0;
  width: 700px;
  height: 370px;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: scale(0);
  opacity: 0;
  pointer-events: none;

  @media (max-width: 1300px) {
    width: 500px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: unset;
      opacity: 1;
      transform: scale(1);
    `}

  ${({ isReverse }) =>
    isReverse &&
    css`
      left: unset;
      right: 0;
    `}

  ${({ isMid, isActive }) =>
    isMid &&
    css`
      left: 50%;
      transform: scale(0) translateX(-50%);

      ${isActive &&
      css`
        transform: scale(1) translateX(-50%);
      `}
    `}
`;

const StyledLeftColumn = styled.div`
  width: 45%;
`;
const StyledRightColumn = styled.div`
  width: 55%;
`;

const StyledTitle = styled.div`
  ${({ theme }) => useFontSize(theme)};
  display: flex;
  padding: 15px 20px 10px;
  justify-content: space-between;
  color: ${({ theme }) => theme.darkGray};

  ${({ second }) =>
    second &&
    css`
      padding: 15px 40px 10px 20px;
    `}
`;

const StyledTitleText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1300px) {
    width: 60%;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.gray};
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 5px;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)};
  font-weight: 300;
  width: 100%;

  ${({ second }) =>
    second &&
    css`
      :hover {
        background: ${({ theme }) => theme.lighterGray};
      }
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.lighterGray};
    `}
  
  ${({ more }) =>
    more &&
    css`
      font-weight: 400;
    `}
`;

const StyledItemLink = styled(Link)`
  width: 100%;
  padding: 7px 20px 7px 0;
  display: block;
`;

const StyledItemSpan = styled.span`
  display: block;
  width: 100%;
  padding: 0 0 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledInnerWrapper = styled.div`
  padding: 10px 20px;
  display: inline-flex;
  flex-shrink: 0;
`;

const StyledInnerLeftColumn = styled.div`
  width: 230px;
`;

const StyledInnerRightColumn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledMarkImg = styled.img`
  max-width: 120px;
  max-height: 25px;
  margin: 20px 0;
`;
const StyledProductTitle = styled.div`
  ${({ theme }) => useFontSize(theme)};
  color: ${({ theme }) => theme.black};
  margin-bottom: 15px;
`;
const StyledProductAttribute = styled.div`
  ${({ theme }) => useFontSize(theme)};
  font-weight: 300;
  margin-bottom: 8px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledPriceWrapper = styled.div`
  margin-top: 15px;
`;

const StyledPriceTitle = styled.div`
  color: ${({ theme }) => theme.gray};
  ${({ theme }) => useFontSize(theme)};
  margin-bottom: 5px;
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "l")};
`;

const StyledProductImg = styled.img`
  max-width: 230px;
  max-height: 180px;

  @media (max-width: 1300px) {
    right: 0;
    bottom: 0;
    position: absolute;
    max-height: 140px;
    transform: translate(50%, 25%);
  }
`;

const StyledButton = styled(Button)`
  padding: 8px 20px;
  border-radius: 5px;
  margin: 10px 20px;
`;

const DropDown = ({
  title,
  link,
  featuredProduct,
  subcategories,
  isActive,
  reverse,
  mid,
}) => {
  const [activeOption, setActiveOption] = useState(-1);

  const handleItemMouseOver = (index) => setActiveOption(index);

  return (
    <StyledWrapper isActive={isActive} isReverse={reverse} isMid={mid}>
      <StyledLeftColumn>
        <StyledTitle>
          <StyledTitleText>{title}</StyledTitleText>
          <StyledLink to={link}>Wszystko</StyledLink>
        </StyledTitle>
        <StyledList>
          <StyledItem isActive={activeOption === -1}>
            <StyledItemLink to="/">
              <StyledItemSpan onMouseOver={() => handleItemMouseOver(-1)}>
                Polecane
              </StyledItemSpan>
            </StyledItemLink>
          </StyledItem>
          {subcategories.map((item, index) => (
            <StyledItem key={index} isActive={activeOption === index}>
              <StyledItemLink to="/">
                <StyledItemSpan onMouseOver={() => handleItemMouseOver(index)}>
                  {item.name}
                </StyledItemSpan>
              </StyledItemLink>
            </StyledItem>
          ))}
        </StyledList>
      </StyledLeftColumn>
      <StyledRightColumn>
        <StyledTitle second>
          <StyledTitleText>
            {activeOption !== -1
              ? subcategories[activeOption].name
              : "Polecane"}
          </StyledTitleText>
          {activeOption !== -1 && <StyledLink to="/">Wszystko</StyledLink>}
        </StyledTitle>
        {activeOption === -1 ? (
          <StyledInnerWrapper>
            <StyledInnerLeftColumn>
              <StyledMarkImg
                src={featuredProduct.markImg}
                alt={featuredProduct.mark}
              />
              <StyledProductTitle>{featuredProduct.title}</StyledProductTitle>
              {featuredProduct.attributes.map((item, index) => (
                <StyledProductAttribute key={index}>
                  {item}
                </StyledProductAttribute>
              ))}
              <StyledPriceWrapper>
                <StyledPriceTitle>tylko</StyledPriceTitle>
                <StyledPrice>{featuredProduct.price} zł</StyledPrice>
              </StyledPriceWrapper>
            </StyledInnerLeftColumn>
            <StyledInnerRightColumn>
              <StyledProductImg
                src={featuredProduct.image}
                alt={featuredProduct.title}
              />
            </StyledInnerRightColumn>
          </StyledInnerWrapper>
        ) : (
          <>
            {subcategories[activeOption].subcategories ? (
              <StyledList>
                {subcategories[activeOption].subcategories.length > 9 ? (
                  <>
                    {subcategories[activeOption].subcategories
                      .slice(0, 8)
                      .map((item, index) => (
                        <StyledItem second key={index}>
                          <StyledItemLink to="/">
                            <StyledItemSpan>{item}</StyledItemSpan>
                          </StyledItemLink>
                        </StyledItem>
                      ))}
                    <StyledItem second more>
                      <StyledItemLink to="">
                        <StyledItemSpan>
                          Więcej... (
                          {subcategories[activeOption].subcategories.length - 9}
                          )
                        </StyledItemSpan>
                      </StyledItemLink>
                    </StyledItem>
                  </>
                ) : (
                  subcategories[activeOption].subcategories.map(
                    (item, index) => (
                      <StyledItem second key={index}>
                        <StyledItemLink to="">
                          <StyledItemSpan>{item}</StyledItemSpan>
                        </StyledItemLink>
                      </StyledItem>
                    )
                  )
                )}
              </StyledList>
            ) : (
              <StyledButton kind={tertiary}>
                Zobacz {subcategories[activeOption].name}
              </StyledButton>
            )}
          </>
        )}
      </StyledRightColumn>
    </StyledWrapper>
  );
};

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  featuredProduct: PropTypes.object.isRequired,
  subcategories: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  reverse: PropTypes.bool,
  mid: PropTypes.bool,
};

DropDown.defaultProps = {
  reverse: false,
  mid: false,
};

export default DropDown;
