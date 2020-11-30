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
  big,
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
    big,
  });
};

function getView({ kind, allProps, render = undefined, big } = {}) {
  if (kind === "primary") return <PrimaryView {...allProps} />;
  if (kind === "secondary") return <SecondaryView {...allProps} />;
  if (kind === "tertiary")
    return <TertiaryView render={render} big={big} {...allProps} />;
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
  ).isRequired,
  score: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  informations: PropTypes.arrayOf(PropTypes.oneOf(informationKinds)).isRequired,
  awards: PropTypes.arrayOf(PropTypes.oneOf(awardKinds)).isRequired,
  discount: PropTypes.number,
  kind: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  render: PropTypes.func,
  big: PropTypes.bool,
};

ProductCard.defaultProps = {
  discount: null,
  kind: "primary",
  render: undefined,
  big: false,
};

export default ProductCard;
