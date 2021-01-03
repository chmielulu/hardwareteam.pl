import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useScrollDirection } from "@hooks/utils";
import { connect } from "react-redux";
import { setBottomBarHidden as setBottomBarHiddenAction } from "@actions";
import TextWithIcon from "../TextWithIcon/TextWithIcon";
import DropDown from "./DropDown/DropDown";
import Link from "../StyledLink/StyledLink";

const StyledWrapper = styled.nav`
  width: 100vw;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 12px;
  background: #fff;
  display: flex;
  justify-content: center;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform-origin: top center;

  @media (max-width: 1752px) {
    height: 50px;
  }

  ${({ $isHide }) =>
    $isHide &&
    css`
      transform: scaleY(0);
      opacity: 0;
      pointer-events: none;
    `}
`;

const StyledListWrapper = styled.ul`
  align-items: center;
  display: inline-flex;
  list-style-type: none;
  justify-content: center;
  height: 100%;
  margin: 0;
`;

const StyledListItem = styled.li`
  height: 100%;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  user-select: none;
  position: relative;
  color: ${({ theme }) => theme.darkGray};

  :last-of-type {
    margin-right: 0;
  }

  ::before {
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: #fff;
    left: 0;
    content: "";
    opacity: 0;
  }

  :hover {
    border-left: 1px solid ${({ theme }) => theme.lightGray};
    border-right: 1px solid ${({ theme }) => theme.lightGray};

    ::before {
      opacity: 1;
    }
  }
`;

const StyledListItemLink = styled(Link)`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 0 40px;
  }
`;

const BottomBar = ({
  categories,
  isDropDownActive,
  setDropDownActive,
  isBottomBarHidden,
  setBottomBarHidden,
}) => {
  const [activeOption, setActiveOption] = useState(0);
  const [delayHandler, setDelayHandler] = useState(null);
  const [preventDelay, setPreventDelay] = useState(false);
  const scrollProperties = useScrollDirection({
    initialDirection: "up",
    thresholdPixels: 100,
    off: true,
  });

  const wrapper = useRef(null);

  const handleMouseEnter = (index) => {
    setActiveOption(index);

    if (!preventDelay) {
      setDelayHandler(
        setTimeout(() => {
          setDropDownActive(true);
          setPreventDelay(true);
        }, 300)
      );
    } else {
      setDropDownActive(true);
    }
  };

  const handleMouseLeave = ({ relatedTarget }) => {
    if (delayHandler) {
      clearTimeout(delayHandler);
      setDelayHandler(null);
    }

    if (
      // eslint-disable-next-line no-undef
      relatedTarget instanceof HTMLElement &&
      (relatedTarget === wrapper.current ||
        wrapper.current.contains(relatedTarget))
    ) {
      setPreventDelay(true);
    } else {
      setPreventDelay(false);
    }

    setDropDownActive(false);
  };

  useEffect(() => {
    const { direction, y } = scrollProperties;

    if (y > 50 && direction === "down" && !isBottomBarHidden) {
      setBottomBarHidden(true);
    } else if (y > 50 && direction === "up" && isBottomBarHidden) {
      setBottomBarHidden(false);
    } else if (y < 50 && isBottomBarHidden) {
      setBottomBarHidden(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollProperties]);

  return (
    <StyledWrapper $isHide={isBottomBarHidden}>
      <StyledListWrapper ref={wrapper}>
        {categories.map(
          ({ name, icon, featuredProduct, subcategories, link }, index) => (
            <StyledListItem
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <StyledListItemLink to={link}>
                <TextWithIcon icon={icon} text={name} secondary />
              </StyledListItemLink>
              <DropDown
                title={name}
                featuredProduct={featuredProduct}
                subcategories={subcategories}
                link="/"
                isActive={isDropDownActive && activeOption === index}
                reverse={index > 3}
                mid={index === 3}
              />
            </StyledListItem>
          )
        )}
      </StyledListWrapper>
    </StyledWrapper>
  );
};

BottomBar.propTypes = {
  categories: PropTypes.array.isRequired,
  isDropDownActive: PropTypes.bool.isRequired,
  setDropDownActive: PropTypes.func.isRequired,
  isBottomBarHidden: PropTypes.bool.isRequired,
  setBottomBarHidden: PropTypes.func.isRequired,
};

BottomBar.defaultProps = {};

const mapStateToProps = (state) => {
  const { navigation } = state;
  return { isBottomBarHidden: navigation.isBottomBarHidden };
};

const mapDispatchToProps = (dispatch) => ({
  setBottomBarHidden: (payload) => dispatch(setBottomBarHiddenAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
