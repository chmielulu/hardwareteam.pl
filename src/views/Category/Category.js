import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { Redirect, useParams } from "react-router-dom";
import categories from "@database/categories";
import allSubcategories from "@database/subcategories";
import routes from "@routes/";
import { Locator } from "@components/atoms";
import { CategoryCard } from "@components/molecules";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import Box from "./_components/Box/Box";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 20px auto 0;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  margin-top: 20px;
  font-weight: 400;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

const StyledContent = styled.div`
  margin-left: 60px;
  flex: 1;
  oveflow: hidden;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const StyledCategoryHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
`;

const StyledCategoryParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
  margin-top: 5px;
`;

const StyledCategoriesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 80px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    margin-top: 20px;
    grid-gap: unset;
  }
`;

const StyledCategoryCard = styled(CategoryCard)`
  @media (max-width: 1024px) {
    padding: 20px 0 20px 10px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};

    :first-of-type {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;

const CategoryView = () => {
  const { width } = useWindowSize();
  const { categoryId } = useParams();

  if (!categories.some((category) => category.id === categoryId)) {
    return <Redirect to={routes.notFound} />;
  }

  const category = categories.find((category) => category.id === categoryId);
  const subcategories = allSubcategories.filter(
    (subcategory) => subcategory.parentId === categoryId
  );

  return (
    <MainTemplate>
      <StyledWrapper>
        <Locator locations={[{ name: category.name, link: categoryId }]} />
        <StyledHeadline>{category.name}</StyledHeadline>

        <StyledInnerWrapper>
          {width > 1024 && (
            <Box
              categoryId={categoryId}
              categories={categories}
              subcategories={allSubcategories}
            />
          )}
          <StyledContent>
            <StyledCategoryHeadline>Kategorie</StyledCategoryHeadline>
            <StyledCategoryParagraph>
              w {category.name.toLowerCase()}
            </StyledCategoryParagraph>
            <StyledCategoriesWrapper>
              {subcategories.map(({ name, id, img }, index) => (
                <StyledCategoryCard
                  name={name}
                  count={47}
                  link={`/kategoria/${categoryId}/${id}`}
                  img={img}
                  key={index}
                />
              ))}
            </StyledCategoriesWrapper>
          </StyledContent>
        </StyledInnerWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default CategoryView;
