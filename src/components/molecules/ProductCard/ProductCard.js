import React from "react";
import PropTypes from "prop-types";
import { kinds as awardKinds } from "@components/atoms/Award/kinds";
import { addToBasket as addToBasketAction } from "@actions";
import { connect } from "react-redux";
import { primary, secondary, allKinds } from "@constants/kinds";
import PrimaryView from "./views/Primary/Primary";
import SecondaryView from "./views/Secondary/Secondary";
import TertiaryView from "./views/Tertiary/Tertiary";
import { kinds as informationKinds } from "./_components/Information/kinds";

const ProductCard = ({
  name,
  img,
  attributes,
  score,
  reviewsCount,
  price,
  informations,
  awards,
  discount,
  kind,
  render,
  size,
  addToBasket,
  ...props
}) => {
  const productLink = "/";

  const allProps = {
    name,
    img,
    attributes,
    score,
    reviewsCount,
    price,
    informations,
    awards,
    discount,
    productLink,
  };

  return getView({
    kind,
    allProps,
    render,
    size,
    addToBasket,
    props,
  });
};

function getView({
  kind,
  allProps,
  render = null,
  size,
  addToBasket,
  props,
} = {}) {
  if (kind === primary)
    return <PrimaryView addToBasket={addToBasket} {...allProps} {...props} />;
  if (kind === secondary)
    return (
      <SecondaryView
        addToBasket={addToBasket}
        {...allProps}
        {...props}
        size={size}
        {...allProps}
        {...props}
      />
    );
  if (kind === "tertiary")
    return (
      <TertiaryView render={render} size={size} {...allProps} {...props} />
    );
  return null;
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  score: PropTypes.number,
  reviewsCount: PropTypes.number,
  price: PropTypes.number,
  informations: PropTypes.arrayOf(PropTypes.oneOf(informationKinds)),
  awards: PropTypes.arrayOf(PropTypes.oneOf(awardKinds)),
  discount: PropTypes.number,
  kind: PropTypes.oneOf(allKinds),
  render: PropTypes.func,
  size: PropTypes.oneOf(["big", "normal", "small"]),
  addToBasket: PropTypes.func,
};

ProductCard.defaultProps = {
  discount: null,
  kind: primary,
  render: undefined,
  size: "normal",
  informations: null,
  awards: null,
  price: null,
  reviewsCount: null,
  score: null,
  attributes: null,
  addToBasket: null,
};

const mapDispatchToProps = (dispatch) => ({
  addToBasket: (product) => dispatch(addToBasketAction(product)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
