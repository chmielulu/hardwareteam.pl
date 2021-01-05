import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useWindowSize } from "@hooks/utils";
import { useFluidSize } from "@hooks/styled-components";
import calculateFluidSize from "@utils/calculateFluidSize";

const HEIGHT = `520px`;

const StyledWrapper = styled.div`
  width: 75%;
  height: ${HEIGHT};
  display: flex;
  justify-content: center;
  margin: 50px auto 0;

  @media (max-width: 1320px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    height: ${useFluidSize({ min: 180, max: 520 })};
    margin-top: ${useFluidSize({ min: 10, max: 50 })};
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const Image360 = ({ src, id }) => {
  const { width } = useWindowSize();

  const calculateHeight = () => {
    if (width > 1024) {
      return HEIGHT;
    }

    if (width <= 360) {
      return "180px";
    }

    return `${calculateFluidSize({
      min: 180,
      max: 520,
      width,
    })}px`;
  };

  const calculateWidth = () => {
    if (width > 1920) {
      return Math.round(1920 * 0.5105513955071477);
    }

    if (width <= 1320 && width > 1024) {
      return Math.round(width * 0.6712224753227031);
    }

    if (width <= 1024) {
      return Math.round(width * 0.9);
    }

    return Math.round(width * 0.5105513955071477);
  };

  useEffect(() => {
    const imageWidth = calculateWidth();
    const height = calculateHeight();

    if (!Number.isNaN(imageWidth)) {
      const script = document.createElement("script");
      script.src = `${src}&width=${imageWidth}&height=${height}`;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, src]);

  return (
    <StyledWrapper className="orbitvu-viewer">
      <div
        id={`ovContent-${id}`}
        style={{
          background: `url(//cdn.orbitvu.co/share/${id}/still/view) no-repeat center center #ffffff`,
        }}
      />
    </StyledWrapper>
  );
};

Image360.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Image360;
