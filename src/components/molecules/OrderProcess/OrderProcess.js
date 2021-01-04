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
    width: ${useFluidSize({ min: 18, max: 30 })};
    height: ${useFluidSize({ min: 18, max: 30 })};
  }

  @media (max-width: 360px) {
    width: 18px;
    height: 18px;
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      @media (max-width: 1024px) {
        margin-bottom: ${useFluidSize({ min: 5, max: 10 })};
      }

      @media (max-width: 360px) {
        margin-bottom: 5px;
      }
    `}
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.8, max: 3, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const StyledName = styled.h3`
  font-weight: 300;
  ${({ theme }) => useFontSize(theme, "m")}
  white-space: nowrap;

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 400;
    `}

  ${({ $secondary }) =>
    $secondary &&
    css`
      ${({ theme }) => useFontSize(theme, "m", "s")}
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
    width: ${useFluidSize({ min: 15, max: 100 })};
    margin: 0 ${useFluidSize({ min: 7, max: 30 })};
  }

  @media (max-width: 360px) {
    width: 15px;
    margin: 0 7px;
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      @media (max-width: 1380px) {
        width: 80px;
        margin: 0 20px;
      }

      @media (max-width: 1220px) {
        width: 55px;
        margin: 0 10px;
      }

      @media (max-width: 1024px) {
        width: ${useFluidSize({ min: 15, max: 100 })};
        margin: 0 ${useFluidSize({ min: 7, max: 30 })};
      }

      @media (max-width: 360px) {
        width: 15px;
        margin: 0 7px;
      }
    `}
`;

const OrderProcess = ({ content, secondary, ...props }) => {
  return (
    <StyledWrapper {...props}>
      {content.map(({ name, isFinished, description, isActive }, index) => (
        <React.Fragment key={index}>
          <StyledItem>
            <StyledIndex
              $isFinished={isFinished}
              $isActive={isActive}
              $secondary={secondary}
            >
              {isFinished ? <StyledIcon icon={checkIcon} /> : index + 1}
            </StyledIndex>
            <StyledName $isActive={isActive} $secondary={secondary}>
              {name}
            </StyledName>
            {isFinished && description && (
              <StyledDescription>{description}</StyledDescription>
            )}
          </StyledItem>
          {index !== content.length - 1 && (
            <StyledSpacer $secondary={secondary} />
          )}
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
  secondary: PropTypes.bool,
};

OrderProcess.defaultProps = {
  secondary: false,
};

export default OrderProcess;
