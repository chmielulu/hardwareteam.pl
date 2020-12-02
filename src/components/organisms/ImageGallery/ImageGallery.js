import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import zoomInIcon from "@iconify/icons-clarity/zoom-in-line";
import zoomOutIcon from "@iconify/icons-clarity/zoom-out-line";
import playIcon from "@iconify/icons-clarity/plane-line";
import pauseIcon from "@iconify/icons-clarity/pause-line";
import resizeUpIcon from "@iconify/icons-clarity/resize-line";
import resizeDownIcon from "@iconify/icons-clarity/resize-down-line";
import closeIcon from "@iconify/icons-clarity/close-line";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import Spinner from "@components/atoms";
import { Img } from "react-image";

const navigation = [
  { icon: zoomInIcon, oppositeIcon: zoomOutIcon },
  { icon: playIcon, oppositeIcon: pauseIcon },
  { icon: resizeUpIcon, oppositeIcon: resizeDownIcon },
  { icon: closeIcon },
];

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
  padding: 0 100px 0 50px;
  outline: none;
`;

const StyledPrevImageButton = styled(StyledChangeImageButton)`
  left: 5%;
`;

const StyledNextImageButton = styled(StyledChangeImageButton)`
  right: 5%;
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

const StyledNavigationButton = styled.button``;

const StyledNavigationIcon = styled(Icon)``;

const StyledActiveImage = styled(Img)`
  max-width: 1000px;
  max-height: 500px;
  border-radius: 20px;
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

const StyledImage = styled(Img)`
  object-fit: cover;
  width: 160px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  opacity: 0.5;
  cursor: pointer;

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

const ImageGallery = ({ images, activeImageIndex }) => {
  const [activeImage, setActiveImage] = useState(activeImageIndex || 0);

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

  return (
    <StyledWrapper>
      <StyledNavigation>
        {navigation.map(({ icon }, index) => (
          <StyledNavigationButton key={index}>
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
      <StyledActiveImage
        src={images[activeImage]}
        alt=""
        loader={<Spinner />}
      />
      <StyledAllImagesWrapper>
        <StyledAllImages>
          {images.map((image, index) => (
            <StyledImage
              src={image}
              alt=""
              key={index}
              $isActive={index === activeImage}
              onClick={() => handleImageClick(index)}
              decode={false}
              loader={<Spinner />}
            />
          ))}
        </StyledAllImages>
      </StyledAllImagesWrapper>
    </StyledWrapper>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  activeImageIndex: PropTypes.number,
};

ImageGallery.defaultProps = {
  activeImageIndex: 0,
};

export default ImageGallery;
