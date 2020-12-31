import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, Button, Slider } from "@components/atoms";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  width: 305px;

  @media (max-width: 1420px) {
    width: 230px;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 680px) {
    width: 90%;
  }
`;

const StyledTopWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-right: 30px;

  @media (max-width: 1420px) {
    margin-right: 20px;
  }
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 20, max: 30 })};
  }

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const StyledInput = styled(Input)`
  width: 80px;

  input {
    ${({ theme }) => useFontSize(theme, "m", "l")}
    text-align: center;
    padding: 6px;

    @media (max-width: 1024px) {
      padding: 8px ${useFluidSize({ min: 5, max: 15 })};
    }

    @media (max-width: 360px) {
      padding: 8px 5px;
    }
  }

  @media (max-width: 1420px) {
    width: 60px;
  }

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 70, max: 120 })};

    :last-of-type {
      margin-right: 20px;
    }
  }

  @media (max-width: 360px) {
    width: 70px;
  }
`;

const StyledSpacer = styled.span`
  display: block;
  height: 1px;
  width: 20px;
  background: ${({ theme }) => theme.gray};
  margin: 0 10px;

  @media (max-width: 1420px) {
    width: 10px;
    margin: 0 5px;
  }

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 25, max: 50 })};
    margin: 0 ${useFluidSize({ min: 10, max: 15 })};
  }

  @media (max-width: 360px) {
    width: 25px;
    margin: 0 10px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  padding: 8px 15px;

  @media (max-width: 1024px) {
    margin-left: auto;
    flex: 1;
    max-width: 200px;
  }
`;

const StyledSlider = styled(Slider)`
  flex: 1;

  @media (max-width: 1024px) {
    margin-top: 10px;
    width: 100% !important;
    height: ${useFluidSize({ min: 18, max: 22 })} !important;

    .noUi-handle {
      height: ${useFluidSize({ min: 25, max: 29 })} !important;
      width: ${useFluidSize({ min: 25, max: 29 })} !important;
    }
  }

  @media (max-width: 360px) {
    height: 18px !important;

    .noUi-handle {
      height: 25px !important;
      width: 25px !important;
    }
  }
`;

const PriceRange = ({
  min,
  max,
  currentMin,
  currentMax,
  changePriceRange,
  ...props
}) => {
  const [initialMinPrice, initialMaxPrice] = [min, max];

  const [latestMinPrice, setLatestMinPrice] = useState(initialMinPrice);
  const [latestMaxPrice, setLatestMaxPrice] = useState(initialMaxPrice);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const slider = useRef();

  const handleMaxInputChange = (value) => {
    const testedValue = testValue(value);
    if (!testedValue) return null;

    setMaxPrice(testedValue);
    return null;
  };

  const handleMinInputChange = (value) => {
    const testedValue = testValue(value);
    if (!testedValue) return null;

    setMinPrice(testedValue);
    return null;
  };

  const handleMaxInputBlur = () => {
    let changedValue = maxPrice;

    if (maxPrice === " ") {
      changedValue = latestMaxPrice;
    } else if (changedValue === maxPrice && maxPrice <= minPrice) {
      changedValue = minPrice;
    } else if (changedValue === maxPrice && maxPrice > initialMaxPrice) {
      changedValue = initialMaxPrice;
    }

    if (maxPrice !== " ") {
      setLatestMaxPrice(changedValue);
    }

    if (changedValue !== maxPrice) {
      setMaxPrice(changedValue);
    }

    slider.current.noUiSlider.set([null, changedValue]);
  };

  const handleMinInputBlur = () => {
    let changedValue = minPrice;

    if (minPrice === " ") {
      changedValue = latestMinPrice;
    } else if (changedValue === minPrice && minPrice >= maxPrice) {
      changedValue = maxPrice;
    } else if (changedValue === minPrice && maxPrice < initialMinPrice) {
      changedValue = initialMinPrice;
    }

    if (maxPrice !== " ") {
      setLatestMaxPrice(changedValue);
    }

    if (changedValue !== minPrice) {
      setMinPrice(changedValue);
    }

    slider.current.noUiSlider.set([changedValue, null]);
  };

  const handleSliderChange = (min, max) => {
    if (min !== minPrice) {
      const minNumber = parseInt(min, 10);

      setMinPrice(minNumber);
      setLatestMinPrice(minNumber);
    }

    if (max !== maxPrice) {
      const maxNumber = parseInt(max, 10);

      setMaxPrice(maxNumber);
      setLatestMaxPrice(maxNumber);
    }

    return null;
  };

  const handleButtonClick = () => {
    changePriceRange(minPrice, maxPrice);
  };

  useEffect(() => {
    if (currentMin && currentMax) {
      slider.current.noUiSlider.set([currentMin, currentMax]);
    }
  }, [currentMin, currentMax]);

  return (
    <StyledWrapper {...props}>
      <StyledTopWrapper>
        <StyledText>Cena (zł)</StyledText>
        <StyledSlider
          min={initialMinPrice}
          max={initialMaxPrice}
          onChange={handleSliderChange}
          ref={slider}
        />
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledInput
          name="min_price"
          label="Minimalna kwota"
          value={minPrice.toString()}
          onChange={handleMinInputChange}
          onBlur={handleMinInputBlur}
        />
        <StyledSpacer />
        <StyledInput
          name="max_price"
          label="Maksymalna kwota"
          value={maxPrice.toString()}
          onChange={handleMaxInputChange}
          onBlur={handleMaxInputBlur}
        />
        <StyledButton onClick={handleButtonClick}>Filtruj</StyledButton>
      </StyledBottomWrapper>
    </StyledWrapper>
  );
};

PriceRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  currentMin: PropTypes.number,
  currentMax: PropTypes.number,
  changePriceRange: PropTypes.func.isRequired,
};

PriceRange.defaultProps = {
  currentMin: undefined,
  currentMax: undefined,
};

function testValue(value) {
  const reg = /^[0-9\b]+$/;

  if (value === "") {
    return " ";
  }

  if (!reg.test(value)) {
    return null;
  }

  return value;
}

export default PriceRange;
