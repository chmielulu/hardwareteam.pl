import React, { useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { Redirect, useParams } from "react-router-dom";
import categories from "@database/categories";
import subcategories from "@database/subcategories";
import allProducts from "@database/products";
import routes from "@routes";
import { Locator, Pagination } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { useFontSize } from "@hooks/styled-components";
import { usePages, useSearchParameters, useSortedProducts } from "@hooks/utils";
import TopNav from "./_components/TopNav/TopNav";
import LeftNav from "./_components/LeftNav/LeftNav";
import SEO from "./_components/SEO/SEO";

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
  margin-top: 40px;
`;

const StyledProductCard = styled(ProductCard)`
  margin-bottom: 50px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const StyledLeftColumn = styled.div`
  width: 300px;
`;

const StyledRightColumn = styled.div`
  margin-left: 50px;
  flex-grow: 1;
`;

const StyledPaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  margin-top: 40px;
`;

const ProductsView = () => {
  const { categoryId, subCategoryId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const subcategory = subcategories.find((c) => c.id === subCategoryId);

  if (!category || !subcategory) {
    return <Redirect to={routes.notFound} />;
  }

  const {
    products,
    methods,
    currentMinPrice,
    currentMaxPrice,
    minPrice,
    maxPrice,
  } = useSortedProducts(
    allProducts.filter((p) => p.subcategoryId === subCategoryId)
  );

  const { page: pageParameter } = useSearchParameters();
  const pageNumber = parseInt(pageParameter, 10) || 1;
  const allPages = usePages(products.length);

  const currentPage = pageNumber > allPages || pageNumber < 1 ? 1 : pageNumber;

  const ranges = [30 * (currentPage - 1), 30 + 30 * currentPage];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <MainTemplate>
      <StyledWrapper>
        <Locator
          locations={[
            { name: category.name, link: `/kategoria/${category.id}` },
            {
              name: subcategory.name,
              link: `/kategoria/${category.id}/${subcategory.id}`,
              onClick: (e) => methods.clearAll(e),
            },
          ]}
        />

        <StyledHeadline>
          {subcategory.name}{" "}
          <StyledCountWrapper>({products.length})</StyledCountWrapper>
        </StyledHeadline>

        <StyledInnerWrapper>
          <StyledLeftColumn>
            <LeftNav />
          </StyledLeftColumn>
          <StyledRightColumn>
            <TopNav
              currentPage={currentPage}
              allPages={allPages}
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentMinPrice={currentMinPrice}
              currentMaxPrice={currentMaxPrice}
              changePage={methods.changePage}
              changePriceRange={methods.changePriceRange}
            />

            <StyledProductsWrapper>
              {products
                .slice(ranges[0], ranges[1])
                .map(({ featuredAttributes, ...props }, index) => (
                  <StyledProductCard
                    key={index}
                    {...props}
                    attributes={featuredAttributes}
                  />
                ))}
            </StyledProductsWrapper>

            <StyledPaginationWrapper>
              <Pagination
                max={5}
                min={1}
                current={currentPage}
                changePage={methods.changePage}
              />
            </StyledPaginationWrapper>
          </StyledRightColumn>
        </StyledInnerWrapper>
        <SEO />
      </StyledWrapper>
    </MainTemplate>
  );
};

export default ProductsView;
