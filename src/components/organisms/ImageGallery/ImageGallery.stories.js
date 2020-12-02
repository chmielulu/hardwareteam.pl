import React, { useState } from "react";
import img1 from "@assets/images/storybook/ImageGallery/1.jpg";
import img2 from "@assets/images/storybook/ImageGallery/2.jpg";
import img3 from "@assets/images/storybook/ImageGallery/3.jpg";
import img4 from "@assets/images/storybook/ImageGallery/4.jpg";
import img5 from "@assets/images/storybook/ImageGallery/5.jpg";
import img6 from "@assets/images/storybook/ImageGallery/6.jpg";
import img7 from "@assets/images/storybook/ImageGallery/7.jpg";
import img8 from "@assets/images/storybook/ImageGallery/8.jpg";
import img9 from "@assets/images/storybook/ImageGallery/9.jpg";
import img10 from "@assets/images/storybook/ImageGallery/10.jpg";
import ImageGallery from "./ImageGallery";

export default {
  title: "organisms/ImageGallery",
};

export const withImageGallery = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <button onClick={() => setActive(true)} type="button">
        Show Image gallery
      </button>
      <ImageGallery
        images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
        activeImageIndex={0}
        handleClose={() => setActive(false)}
        isActive={isActive}
      />
    </>
  );
};
