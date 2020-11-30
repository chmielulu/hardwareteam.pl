/* eslint-disable import/no-duplicates */
import React from "react";
import PropTypes from "prop-types";
import { kinds as awardKinds } from "@components/atoms/Award/kinds";
import PrimaryView from "./views/Primary/Primary";
import SecondaryView from "./views/Secondary/Secondary";
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

  return getView(kind, allProps);
};

function getView(kind, allProps) {
  if (kind === "primary") return <PrimaryView {...allProps} />;
  if (kind === "secondary") return <SecondaryView {...allProps} />;
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
};

ProductCard.defaultProps = {
  discount: null,
  kind: "primary",
};

export default ProductCard;
