import React from "react";
import PropTypes from "prop-types";
import { kinds as awardKinds } from "@components/atoms/Award/kinds";
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
    props,
  });
};

function getView({ kind, allProps, render = null, size, props } = {}) {
  if (kind === "primary") return <PrimaryView {...allProps} {...props} />;
  if (kind === "secondary")
    return <SecondaryView size={size} {...allProps} {...props} />;
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
  kind: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  render: PropTypes.func,
  size: PropTypes.oneOf(["big", "normal", "small"]),
};

ProductCard.defaultProps = {
  discount: null,
  kind: "primary",
  render: undefined,
  size: "normal",
  informations: null,
  awards: null,
  price: null,
  reviewsCount: null,
  score: null,
  attributes: null,
};

export default ProductCard;
