import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { Redirect, useParams } from "react-router-dom";
import categories from "@database/categories";
import subcategories from "@database/subcategories";
import allProducts from "@database/products";
import routes from "@routes";
import { Locator } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  max-width: 1500px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
  margin-top: 20px;
`;

const StyledCountWrapper = styled.span`
  color: ${({ theme }) => theme.gray};
`;

const StyledProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

const StyledProductCard = styled(ProductCard)`
  margin-bottom: 50px;
`;

const ProductsView = () => {
  const { categoryId, subCategoryId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const subcategory = subcategories.find((c) => c.id === subCategoryId);

  if (!category || !subcategory) {
    return <Redirect to={routes.notFound} />;
  }

  const products = allProducts.filter((p) => p.subcategoryId === subCategoryId);

  return (
    <MainTemplate>
      <StyledWrapper>
        <Locator
          locations={[
            { name: category.name, link: `/kategoria/${category.id}` },
            {
              name: subcategory.name,
              id: `/kategoria/${subcategory.id}/${subcategory.id}`,
            },
          ]}
        />

        <StyledHeadline>
          {subcategory.name}{" "}
          <StyledCountWrapper>({products.length})</StyledCountWrapper>
        </StyledHeadline>

        <StyledProductsWrapper>
          {products.slice(40).map(({ featuredAttributes, ...props }, index) => (
            <StyledProductCard
              key={index}
              {...props}
              attributes={featuredAttributes}
            />
          ))}
        </StyledProductsWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default ProductsView;
