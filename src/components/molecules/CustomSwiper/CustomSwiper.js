import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "@components/atoms";

SwiperCore.use([Navigation]);

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
`;

const StyledArrowButton = styled(ArrowButton)`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  display: none;

  ${({ $isActive }) =>
    $isActive &&
    css`
      display: block;
    `}

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledNextButton = styled(StyledArrowButton)`
  right: 5px;
`;

const StyledPrevButton = styled(StyledArrowButton)`
  left: 5px;
`;

const CustomSwiper = ({
  spaceBetween,
  slidesPerView,
  freeMode,
  withNavigation,
  breakpoints,
  suffix,
  loop,
  children,
}) => {
  const [position, setPosition] = useState(0);

  return (
    <StyledWrapper>
      <StyledSwiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        freeMode={freeMode}
        navigation={{
          nextEl: `.swiper-next-button${suffix}`,
          prevEl: `.swiper-prev-button${suffix}`,
        }}
        onReachEnd={() => setPosition(2)}
        onReachBeginning={() => setPosition(0)}
        onFromEdge={() => setPosition(1)}
        updateOnWindowResize
        breakpoints={breakpoints}
        loop={loop}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </StyledSwiper>
      {withNavigation && (
        <>
          <StyledNextButton
            className={`swiper-next-button${suffix}`}
            $isActive={position !== 2 && position !== -1}
          />
          <StyledPrevButton
            rotate={-90}
            $isActive={position !== 0 && position !== -1}
            className={`swiper-prev-button${suffix}`}
          />
        </>
      )}
    </StyledWrapper>
  );
};

CustomSwiper.propTypes = {
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  freeMode: PropTypes.bool,
  withNavigation: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  breakpoints: PropTypes.object,
  suffix: PropTypes.any,
  loop: PropTypes.bool,
};

CustomSwiper.defaultProps = {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  withNavigation: true,
  breakpoints: undefined,
  suffix: "",
  loop: false,
};

export default CustomSwiper;
