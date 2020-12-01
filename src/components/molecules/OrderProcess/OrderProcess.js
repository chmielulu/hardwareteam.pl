import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import checkIcon from "@iconify/icons-bi/check";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }
`;

const StyledIndex = styled.div`
  ${({ theme }) => useFontSize(theme)}
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  margin-bottom: 10px;

  ${({ $isFinished }) =>
    $isFinished &&
    css`
      border: 1px solid transparent;
      background: ${({ theme }) => theme.darkGray};
      color: #fff;
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.gradient};
      color: #fff;
      font-weight: 500;
    `}

  @media (max-width: 1024px) {
    width: ${useFluidSize(18, 30)};
    height: ${useFluidSize(18, 30)};
  }

  @media (max-width: 360px) {
    width: 18px;
    height: 18px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize(`3rem`, 1.8)};
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const StyledName = styled.h3`
  font-weight: 300;
  ${({ theme }) => useFontSize(theme, "m", "xs")}

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 400;
    `}
`;

const StyledDescription = styled.p`
  ${({ theme }) => useFontSize(theme, "xs")}
  text-align: right;
  color: ${({ theme }) => theme.gray};
  margin-top: 6px;
  width: 160px;
  position: absolute;
  top: 100%;
  right: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledSpacer = styled.div`
  width: 100px;
  height: 1px;
  background: ${({ theme }) => theme.gray};
  margin: 0 30px;

  @media (max-width: 1024px) {
    width: ${useFluidSize(15, 100)};
    margin: 0 ${useFluidSize(7, 30)};
  }

  @media (max-width: 360px) {
    width: 15px;
    margin: 0 7px;
  }
`;

const OrderProcess = ({ content }) => {
  return (
    <StyledWrapper>
      {content.map(({ name, isFinished, description, isActive }, index) => (
        <React.Fragment key={index}>
          <StyledItem>
            <StyledIndex $isFinished={isFinished} $isActive={isActive}>
              {isFinished ? <StyledIcon icon={checkIcon} /> : index + 1}
            </StyledIndex>
            <StyledName $isActive={isActive}>{name}</StyledName>
            {isFinished && description && (
              <StyledDescription>{description}</StyledDescription>
            )}
          </StyledItem>
          {index !== content.length - 1 && <StyledSpacer />}
        </React.Fragment>
      ))}
    </StyledWrapper>
  );
};

OrderProcess.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isFinished: PropTypes.bool,
      description: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};

export default OrderProcess;
