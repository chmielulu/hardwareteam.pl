import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import toolBoxIcon from "@iconify/icons-clarity/ellipsis-vertical-line";
import { Link } from "react-router-dom";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useOutsideClick } from "@hooks/utils";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2.4rem;
  padding: 8px;
  cursor: pointer;
  border-radius: 50px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.lighterGray};
    `}

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 2, max: 2.4, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

const StyledPopUp = styled.div`
  position: absolute;
  background: #fff;
  min-width: 100%;
  top: 110%;
  right: 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transform: scale(0.6, 0);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease;
  transform-origin: top right;
  opacity: 0;
  overflow: hidden;
  z-index: 90;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: scale(1, 1);
      opacity: 1;
    `}
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }
`;

const StyledItemContent = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 10px;

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
`;

const StyledItemText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  user-select: none;
`;

const ToolBox = ({ content, ...props }) => {
  const wrapper = useRef();
  const [isActive, setActive] = useState(false);
  const handleButtonClick = () => setActive(!isActive);

  useOutsideClick(wrapper, () => setActive(false));

  return (
    <StyledWrapper aria-expanded={isActive.toString()} ref={wrapper} {...props}>
      <StyledButton $isActive={isActive} onClick={handleButtonClick}>
        <Icon icon={toolBoxIcon} />
      </StyledButton>

      <StyledPopUp aria-hidden={(!isActive).toString()} $isActive={isActive}>
        <StyledList>
          {content.map(({ name, icon, action, link, color }, index) => (
            <StyledItem key={index}>
              <StyledItemContent
                as={!link ? "span" : undefined}
                to={link || undefined}
                onClick={action || undefined}
              >
                <StyledIcon icon={icon} $color={color || undefined} />
                <StyledItemText>{name}</StyledItemText>
              </StyledItemContent>
            </StyledItem>
          ))}
        </StyledList>
      </StyledPopUp>
    </StyledWrapper>
  );
};

ToolBox.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      action: PropTypes.func,
      link: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default ToolBox;
