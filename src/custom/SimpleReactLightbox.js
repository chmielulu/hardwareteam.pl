import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = (theme) => ({
  buttons: {
    iconPadding: "5px",
    iconColor: "#fff",
    size: "5rem",
    showDownloadButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    showCaption: false,
  },
  settings: {
    overlayColor: "rgba(255, 255, 255, 1)",
    slideAnimationType: "fade",
    autoplaySpeed: 5000,
    hideControlsAfter: false,
  },
  progressBar: {
    height: "5px",
    fillColor: theme.primary,
    backgroundColor: theme.lightGray,
  },
  thumbnails: {
    thumbnailsSize: ["150px", "100px"],
    thumbnailsGap: "40px 10px",
  },
  translations: {
    autoplayText: "Włącz autoodtwarzanie",
    closeText: "Zamknij",
    downloadText: "Pobierz",
    fullscreenText: "Pełny ekran",
    nextText: "Następne",
    pauseText: "Zatrzymaj autoodtwarzanie",
    previousText: "Poprzednie",
    thumbnailsText: "Ukryj miniaturki",
    zoomOutText: "Pomniejsz",
  },
});

const CustomSimpleReactLightbox = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options(theme)}>{children}</SRLWrapper>
    </SimpleReactLightbox>
  );
};

CustomSimpleReactLightbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomSimpleReactLightbox;
