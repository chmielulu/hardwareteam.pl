import React from "react";
import { useWindowSize } from "@hooks/utils";
import ProductCard from "./ProductCard";

export default {
  title: "molecules/ProductCard",
};

export const withProductCard = () => {
  const { width } = useWindowSize();

  return (
    <div style={{ width: width >= 1024 ? "70vw" : "80vw" }}>
      <ProductCard />
    </div>
  );
};
