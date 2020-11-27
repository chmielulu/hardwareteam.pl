import React from "react";
import ProductCard from "./ProductCard";

export default {
  title: "molecules/ProductCard",
};

export const withProductCard = () => (
  <div style={{ width: "1225px" }}>
    <ProductCard />
  </div>
);
