import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Radio } from "@components/atoms";
import Icon from "@iconify/react";
import { Img } from "react-image";
import { useFluidSize, useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  max-width: 625px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-top: 0;
  border-bottom: 0;
  border-radius: 10px;

  @media (max-width: 1280px) {
    max-width: 500px;
  }

  @media (max-width: 720px) {
    width: 100%;
    max-width: unset;
  }
`;

const StyledLabel = styled.label`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid transparent;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  margin: 0 -1px;

  :first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.secondary};
      border: 1px solid ${({ theme }) => theme.secondary}!important;
      border-radius: 10px;
      cursor: default;
    `}

  ${({ $isNext }) =>
    $isNext &&
    css`
      border-top: 1px solid transparent;
    `}

    ${({ $disabled }) =>
      $disabled &&
      css`
        color: ${({ theme }) => theme.gray}!important;
      `}

  @media (max-width: 720px) {
    height: unset;
    min-height: 60px;
  }
`;

const StyledRadio = styled(Radio)`
  span {
    border: 1px solid ${({ theme }) => theme.lightGray};
  }

  input:checked ~ span {
    border: 1px solid ${({ theme }) => theme.secondary};

    ::before {
      background: ${({ theme }) => theme.secondary}!important;
    }
  }
`;

const StyledLabelContent = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  margin-left: 10px;
  opacity: 0.6;
  filter: grayscale(100%);

  :first-of-type {
    margin-left: auto;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      filter: grayscale(0);
    `}

  @media (max-width: 720px) {
    font-size: ${useFluidSize({ min: 2, max: 2.5, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

const StyledImg = styled(Img)`
  max-width: 42px;
  max-height: 42px;
  margin-left: 10px;
  opacity: 0.6;
  filter: grayscale(100%);

  :first-of-type {
    margin-left: auto;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      filter: grayscale(0);
    `}

  @media (max-width: 720px) {
    max-width: ${useFluidSize({ min: 36, max: 42, maxView: 720 })};
    max-height: ${useFluidSize({ min: 21, max: 42, maxView: 720 })};
  }

  @media (max-width: 360px) {
    max-width: 36px;
    max-height: 21px;
  }
`;

const StyledText = styled.span`
  font-weight: 300;
  margin-right: 20px;
  flex: 1;
`;

const StyledAdditionalText = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
`;

const RadioGroup = ({
  items,
  name,
  activeId,
  onChange,
  isRequired,
  register,
  ...props
}) => {
  const [activeOption, setActiveOption] = useState(0);

  const handleRadioChange = (index) => setActiveOption(index);

  return (
    <StyledWrapper {...props}>
      {items.map(
        ({ id, value, icon, img, text, additionalText, disabled }, index) => {
          const isActive = activeId ? activeId === id : index === activeOption;
          const isNext =
            index === items.findIndex(({ id }) => id === activeId) + 1;

          return (
            <StyledLabel
              key={index}
              $isActive={isActive}
              $isNext={isNext}
              $disabled={disabled}
            >
              <StyledRadio
                name={name}
                id={id}
                value={value}
                withoutLabel
                checked={isActive}
                onChange={onChange || (() => handleRadioChange(index))}
                disabled={disabled}
                ref={register ? register({ required: isRequired }) : undefined}
              />

              <StyledLabelContent>
                <StyledText>
                  {text}{" "}
                  <StyledAdditionalText>{additionalText}</StyledAdditionalText>
                </StyledText>
                {icon && <StyledIcon icon={icon} $isActive={isActive} />}
                {img && typeof img === "string" ? (
                  <StyledImg src={img} alt="" $isActive={isActive} />
                ) : (
                  typeof img === "object" &&
                  img.map((img, index) => (
                    <StyledImg
                      src={img}
                      alt=""
                      key={index}
                      $isActive={isActive}
                    />
                  ))
                )}
              </StyledLabelContent>
            </StyledLabel>
          );
        }
      )}
    </StyledWrapper>
  );
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.object,
      img: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      text: PropTypes.string.isRequired,
      additionalText: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  activeId: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  register: PropTypes.any,
};

RadioGroup.defaultProps = {
  activeId: null,
  onChange: undefined,
  isRequired: true,
  register: undefined,
};

export default RadioGroup;
