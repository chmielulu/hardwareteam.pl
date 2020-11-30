/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.min.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  &.noUi-target {
    position: relative;
    direction: ltr;
    width: 200px;
    height: 18px;
    border-radius: 10px;
    border: none;
    background: ${({ theme }) => theme.lightGray};
    box-shadow: none;
  }

  .noUi-base {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .noUi-connect {
    background: ${({ theme }) => theme.gradient};
    height: 100%;
  }

  .noUi-connect {
    background: ${({ theme }) => theme.gradient};
  }

  .noUi-handle {
    width: 25px;
    height: 25px;
    border: 2px solid ${({ theme }) => theme.secondary};
    background: #fff;
    border-radius: 50%;
    outline: none;
    box-shadow: none;
    top: -3px;

    ::before,
    ::after {
      display: none;
    }
  }
`;

const Progress = ({ min, max, onChange, className }) => {
  const slider = useRef();

  useEffect(() => {
    noUiSlider.create(slider.current, {
      start: [min, max],
      behaviour: "tap",
      connect: true,
      range: {
        min,
        max,
      },
      orientation: "horizontal",
      direction: "ltr",
    });

    if (onChange)
      slider.current.noUiSlider.on("slide", (e) => onChange(e[0], e[1]));
  }, []);

  return <StyledWrapper ref={slider} className={className} />;
};

Progress.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Progress.defaultProps = {
  onChange: null,
  className: undefined,
};

export default Progress;
