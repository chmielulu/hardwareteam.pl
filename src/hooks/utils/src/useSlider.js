import { useEffect, useState } from "react";
import gsap from "gsap";

export default ({ wrapper, view, isActive } = {}) => {
  const [transformMultipliersState, setTransformMultipliersState] = useState();
  const [transformWidthState, setTransformWidthState] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    if (activeSlide === transformMultipliersState.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(transformMultipliersState.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  useEffect(() => {
    if (wrapper.current && view.current && !transformMultipliersState) {
      const transformMultipliers = [];

      const wrapperWidth = wrapper.current.getBoundingClientRect().width;

      const viewChildren = view.current.children;
      const viewChildStyle =
        viewChildren[0].currentStyle ||
        window.getComputedStyle(viewChildren[0]);

      const viewChildWidth =
        viewChildren[0].getBoundingClientRect().width +
        parseFloat(viewChildStyle.marginRight);

      const viewChildrenWidth = viewChildWidth * viewChildren.length;
      let divider = viewChildrenWidth / wrapperWidth;

      let buffer = 0.0;
      transformMultipliers.push(0);
      for (;;) {
        if (divider > 1) {
          buffer += 1;
          transformMultipliers.push(buffer);
          divider -= 1;
        } else if (divider > 0.5) {
          buffer += divider;
          transformMultipliers.push(buffer);
          divider = 0;
          break;
        } else {
          break;
        }
      }
      setTransformMultipliersState(transformMultipliers);
      setTransformWidthState(wrapperWidth);
    }
  }, [isActive, transformMultipliersState, view, wrapper]);

  useEffect(() => {
    if (transformMultipliersState) {
      gsap.to(view.current, {
        x: -transformWidthState * transformMultipliersState[activeSlide],
        duration: 0.2,
      });
    }
  }, [activeSlide, transformMultipliersState, transformWidthState, view]);

  return {
    handleNextSlide,
    handlePrevSlide,
    activeSlide,
    slidesCount: transformMultipliersState
      ? transformMultipliersState.length
      : 0,
  };
};
