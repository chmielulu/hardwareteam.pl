import React from "react";
import { useWindowSize } from "@hooks/utils";
import PrimaryView from "./views/desktop/Primary";
import PrimaryMobileView from "./views/mobile/Primary";

const ProductCard = () => {
  const { width } = useWindowSize();

  if (width >= 1024) {
    return <PrimaryView />;
  }

  return <PrimaryMobileView />;
};

export default ProductCard;
