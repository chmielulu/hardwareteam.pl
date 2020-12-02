import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import zoomInIcon from "@iconify/icons-clarity/zoom-in-line";
import zoomOutIcon from "@iconify/icons-clarity/zoom-out-line";
import playIcon from "@iconify/icons-clarity/play-line";
import pauseIcon from "@iconify/icons-clarity/pause-line";
import resizeUpIcon from "@iconify/icons-clarity/resize-line";
import resizeDownIcon from "@iconify/icons-clarity/resize-down-line";
import closeIcon from "@iconify/icons-clarity/close-line";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import { Spinner } from "@components/atoms";
import { Transition } from "react-transition-group";
import { Img } from "react-image";

const transitionStyles = {
  entering: {
    opacity: 1,
    transform: `translateY(0) scale(1)`,
    pointerEvents: "all",
  },
  entered: {
    opacity: 1,
    transform: `translateY(0) scale(1)`,
    pointerEvents: "all",
  },
  exiting: {
    opacity: 0,
    transform: `translateY(-40%) scale(0.9)`,
    pointerEvents: "none",
  },
  exited: {
    opacity: 0,
    transform: `translateY(-40%) scale(0.9)`,
    pointerEvents: "none",
  },
};

const duration = 500;

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity ${duration}ms ease-in-out,
    transform ${duration}ms ease-in-out;
  opacity: 0;
  transform: translateY(-40%) scale(0.9);
  transform-origin: top center;
  pointer-events: none;
`;

const StyledChangeImageButton = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  background: transparent;
  border: none;
  font-size: 3rem;
  height: 30vh;
  cursor: pointer;
  align-items: center;
  transform: translateY(-50%);
  outline: none;
`;

const StyledPrevImageButton = styled(StyledChangeImageButton)`
  left: 5%;
  padding: 0 20% 0 50px;
`;

const StyledNextImageButton = styled(StyledChangeImageButton)`
  right: 5%;
  padding: 0 50px 0 20%;
`;

const StyledNextImageIcon = styled(Icon)`
  transform: rotate(90deg) !important;
`;

const StyledPrevImageIcon = styled(Icon)`
  transform: rotate(-90deg) !important;
`;

const StyledNavigation = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
`;

const StyledNavigationButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  padding: 5px 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const StyledNavigationIcon = styled(Icon)`
  font-size: 3rem;
`;

const StyledActiveImageWrapper = styled.div`
  max-width: 1000px;
  max-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  display: relative;
  z-index: 99;
`;

const StyledActiveImage = styled.img`
  max-width: 1000px;
  max-height: 500px;
`;

const StyledAllImagesWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 25px;
  left: 0;
`;

const StyledAllImages = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImageWrapper = styled.div`
  width: 160px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  opacity: 0.5;
  cursor: pointer;
  overflow: hidden;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      cursor: default;
    `}

  :last-of-type {
    margin-right: 0;
  }
`;

const StyledImage = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageGallery = ({ images, activeImageIndex, handleClose, isActive }) => {
  const [activeImage, setActiveImage] = useState(activeImageIndex || 0);
  const [isEntered, setEntered] = useState(false);

  const handleImageClick = (index) => setActiveImage(index);

  const handleChangeImage = (changeIndex) => {
    if (changeIndex === 1) {
      if (activeImage === images.length - 1) setActiveImage(0);
      else setActiveImage(activeImage + 1);
    }

    if (changeIndex === -1) {
      if (activeImage === 0) setActiveImage(images.length - 1);
      else setActiveImage(activeImage - 1);
    }
  };

  const navigation = [
    { icon: zoomInIcon, oppositeIcon: zoomOutIcon },
    { icon: playIcon, oppositeIcon: pauseIcon },
    { icon: resizeUpIcon, oppositeIcon: resizeDownIcon },
    { icon: closeIcon, func: handleClose },
  ];

  return (
    <Transition
      in={isActive}
      timeout={duration}
      onEntered={() => setEntered(true)}
    >
      {(state) => (
        <StyledWrapper style={{ ...transitionStyles[state] }}>
          <StyledNavigation>
            {navigation.map(({ icon, func }, index) => (
              <StyledNavigationButton key={index} onClick={func}>
                <StyledNavigationIcon icon={icon} />
              </StyledNavigationButton>
            ))}
          </StyledNavigation>
          <StyledPrevImageButton onClick={() => handleChangeImage(-1)}>
            <StyledPrevImageIcon icon={arrowIcon} />
          </StyledPrevImageButton>
          <StyledNextImageButton onClick={() => handleChangeImage(1)}>
            <StyledNextImageIcon icon={arrowIcon} />
          </StyledNextImageButton>
          <StyledActiveImageWrapper>
            {isEntered && (
              <StyledActiveImage
                src={images[activeImage]}
                alt=""
                loader={<Spinner />}
              />
            )}
          </StyledActiveImageWrapper>
          <StyledAllImagesWrapper>
            <StyledAllImages>
              {isEntered &&
                images.map((image, index) => (
                  <StyledImageWrapper
                    key={index}
                    $isActive={index === activeImage}
                    onClick={() => handleImageClick(index)}
                  >
                    <StyledImage
                      src={image}
                      alt=""
                      decode={false}
                      loader={<Spinner />}
                    />
                  </StyledImageWrapper>
                ))}
            </StyledAllImages>
          </StyledAllImagesWrapper>
        </StyledWrapper>
      )}
    </Transition>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  activeImageIndex: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

ImageGallery.defaultProps = {
  activeImageIndex: 0,
};

export default ImageGallery;
