import React from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "@hooks/utils";
import { kinds as awardKinds } from "@components/atoms/Award/kinds";
import PrimaryView from "./views/desktop/Primary";
import PrimaryMobileView from "./views/mobile/Primary";
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
}) => {
  const { width } = useWindowSize();
  const allProps = {
    name,
    img,
    attributes,
    score,
    reviewsCount,
    price,
    informations,
    awards,
  };

  if (width >= 1024) {
    return <PrimaryView {...allProps} />;
  }

  return <PrimaryMobileView {...allProps} />;
};

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
};

export default ProductCard;
