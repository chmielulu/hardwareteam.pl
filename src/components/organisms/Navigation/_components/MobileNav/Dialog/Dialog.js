import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Button } from "@components/atoms";
import { Link } from "react-router-dom";
import { tertiary } from "@constants/kinds";
import Icon from "@iconify/react";
import arrowIcon from "@iconify-icons/clarity/arrow-line";
import TextWithIcon from "../../TextWithIcon/TextWithIcon";

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 55px 0;
  background: #fff;
  transform: translateX(100%);
  transition: transform 0.4s ease;

  @media (min-width: 770px) {
    padding: 85px 0 55px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
    `}

  ::after {
    content: "";
    height: 55px;
    width: 100%;
    display: block;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`;

const StyledHeadlineWrapper = styled.div`
  margin-top: 15px;
  padding: 15px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  position: relative;
`;

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
`;

const StyledHeadlineIcon = styled(Icon)`
  font-size: 2rem;
  transform: rotate(-90deg) !important;
  box-sizing: content-box;
  position: absolute;
  left: 15px;
  padding: 10px;
`;

const StyledButtonWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0 30px 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  width: 100%;
  height: 55px;
  display: flex;
  padding: 0 25px 0 20px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

const StyledItemIcon = styled(Icon)`
  transform: rotate(90deg) !important;
  margin-left: auto;
  font-size: 2rem;
`;

function Dialog({
  isActive,
  name,
  categories,
  handleBackClick,
  handleItemClick,
}) {
  // const isArray = typeof categories[0] === 'string';

  return (
    <StyledWrapper isActive={isActive}>
      <StyledInnerWrapper>
        <StyledHeadlineWrapper>
          <StyledHeadlineIcon icon={arrowIcon} onClick={handleBackClick} />
          <StyledHeadline>{name}</StyledHeadline>
        </StyledHeadlineWrapper>
        <StyledButtonWrapper>
          <Button as={Link} to="/" kind={tertiary}>
            Zobacz {name}
          </Button>
        </StyledButtonWrapper>
        <StyledList>
          {categories &&
            categories.map((item, index) => (
              <StyledItem
                key={index}
                onClick={
                  handleItemClick && item.subcategories
                    ? () => handleItemClick(index, true)
                    : undefined
                }
              >
                <TextWithIcon text={item.name} tertiary />
                {item.subcategories && <StyledItemIcon icon={arrowIcon} />}
              </StyledItem>
            ))}
        </StyledList>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

Dialog.propTypes = {
  isActive: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func,
};

Dialog.defaultProps = {
  handleItemClick: null,
};

export default Dialog;
