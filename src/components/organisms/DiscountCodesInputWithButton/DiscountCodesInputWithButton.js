import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { addDiscountCode as addDiscountCodeAction } from "@actions/index";
import { connect } from "react-redux";
import styled from "styled-components";
import { InputWithButton } from "@components/molecules";

const StyledInputWithButton = styled(InputWithButton)`
  @media (max-width: 1024px) {
    order: -1;
    div {
      flex: 1;
    }
  }
`;

const DiscountCodesInputWithButton = ({
  discountCodes,
  addDiscountCode,
  ...props
}) => {
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    setDiscountCode("");
  }, [discountCodes]);

  const handleInputChange = ({ target }) => {
    setDiscountCode(target.value);
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === "Enter" && discountCode) {
      addDiscountCode(discountCode);
      target.blur();
    }

    return null;
  };

  return (
    <StyledInputWithButton
      name="discount-code"
      label="Kod rabatowy"
      value={discountCode}
      onChange={handleInputChange}
      onClick={() => addDiscountCode(discountCode)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      Dodaj
    </StyledInputWithButton>
  );
};

DiscountCodesInputWithButton.propTypes = {
  discountCodes: PropTypes.array,
  addDiscountCode: PropTypes.func.isRequired,
};

DiscountCodesInputWithButton.defaultProps = {
  discountCodes: [],
};

const mapStateToProps = (state) => {
  const { basket } = state;
  return {
    discountCodes: basket.discountCodes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addDiscountCode: (code) => dispatch(addDiscountCodeAction(code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountCodesInputWithButton);
