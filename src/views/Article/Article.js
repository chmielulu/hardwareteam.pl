import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { Locator, Spinner, SocialButton } from "@components/atoms";
import { Wysiwyg } from "@components/molecules";
import articles from "@database/articles";
import { Redirect, useLocation, useParams } from "react-router";
import routes from "@routes/";
import tags from "@database/tags";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { Img } from "react-image";
import { useWysiwygStructure } from "@hooks/utils";
import scrollToElement from "@utils/scrollToElement";
import { connect } from "react-redux";

import dummyContent from "./_dummyContent/dummyContent";
import Comments from "./_components/Comments/Comments";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 20px auto 0;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xxl")}
  margin-top: 30px;
  font-weight: 500;
  max-width: 930px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLeftColumn = styled.div`
  max-width: 930px;
`;

const StyledRightColumn = styled.div`
  order: 1;

  @media (max-width: 1422px) {
    display: none;
  }
`;

const StyledInformationsWrapper = styled.div`
  max-width: 930px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 10, max: 30 })};
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const StyledAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAuthorContentWrapper = styled.div`
  order: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const StyledAuthorName = styled.span`
  ${({ theme }) => useFontSize(theme)}

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledAuthorPhoto = styled(Img)`
  width: 40px;
  height: 40px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledTime = styled.time`
  ${({ theme }) => useFontSize(theme, "s")}
  color: ${({ theme }) => theme.darkGray};
  margin-top: 3px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const StyledSocialButtonsWrapper = styled.div`
  display: flex;
  margin-right: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledSocialButton = styled(SocialButton)`
  :last-of-type {
    margin-left: 20px;
  }
`;

const StyledFeaturedImg = styled(Img)`
  width: 100%;
  height: 570px;
  border-radius: 20px;
  margin: 30px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1024px) {
    height: ${useFluidSize({ min: 200, max: 570 })};
  }

  @media (max-width: 300px) {
    height: 170px;
  }
`;

const StyledContent = styled.div`
  width: 95%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledListWrapper = styled.nav`
  margin-left: 50px;
  margin-top: 30px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  width: 300px;
  position: sticky;
  top: 160px;
  transition: transform 0.2s ease-in-out;

  ${({ $isBottomBarHidden }) =>
    $isBottomBarHidden &&
    css`
      @media (min-width: 1024px) {
        transform: translateY(-45px);
      }

      @media (max-width: 1752px) {
        transform: translateY(-50px);
      }
    `}
`;

const StyledListHeadline = styled.div`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 500;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)}
  margin-bottom: 10px;
`;

const StyledSecondList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  margin-left: 50px;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
`;

const StyledIndex = styled.span`
  color: ${({ theme }) => theme.gray};
  margin-right: 10px;
  display: block;
`;

const StyledText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  visibility: visible;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledPagination = styled.div`
  margin-top: 60px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  max-width: 930px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

const ArticleView = ({ isBottomBarHidden }) => {
  const { articleId } = useParams();
  const { pathname } = useLocation();

  const tagPath = pathname.split("/").filter((path) => path !== "")[0];
  const tag = tags.find((tag) => tag.id === tagPath);
  const article = articles.find((article) => article.id === articleId);

  if (!article || !tag) {
    return <Redirect to={routes.notFound} />;
  }

  const {
    title,
    author,
    time,
    featuredImg,
    blocks,
    comments,
    description,
  } = dummyContent;
  const structure = useWysiwygStructure(blocks);

  return (
    <MainTemplate title={title} description={description} ogImage={featuredImg}>
      <StyledWrapper>
        <Locator
          locations={[
            { name: tag.name, link: `/${tag.id}` },
            { name: article.name, link: pathname },
          ]}
        />

        <StyledHeadline>{title}</StyledHeadline>

        <StyledInformationsWrapper>
          <StyledAuthorWrapper>
            <StyledAuthorContentWrapper>
              <StyledAuthorName>{author.name}</StyledAuthorName>
              <StyledTime>{time}</StyledTime>
            </StyledAuthorContentWrapper>
            <StyledAuthorPhoto src={author.photo} loader={<Spinner />} />
          </StyledAuthorWrapper>

          <StyledSocialButtonsWrapper>
            <StyledSocialButton kind="facebook" secondary />
            <StyledSocialButton kind="twitter" secondary />
          </StyledSocialButtonsWrapper>
        </StyledInformationsWrapper>

        <StyledInnerWrapper>
          <StyledRightColumn>
            {structure && (
              <StyledListWrapper $isBottomBarHidden={isBottomBarHidden}>
                <StyledListHeadline>Spis treści</StyledListHeadline>
                <StyledList>
                  {structure.map(({ name, id, subHeaders }, index) => (
                    <StyledItem key={id}>
                      <StyledLink
                        href={`#${id}`}
                        onClick={(e) =>
                          scrollToElement(`#${id}`, e, { yOffset: 160 })
                        }
                      >
                        <StyledIndex>
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </StyledIndex>
                        <StyledText>{name}</StyledText>
                      </StyledLink>
                      {subHeaders && (
                        <StyledSecondList>
                          {subHeaders.map(({ name, id }) => (
                            <StyledItem key={id}>
                              <StyledLink
                                href={`#${id}`}
                                onClick={(e) =>
                                  scrollToElement(`#${id}`, e, { yOffset: 160 })
                                }
                              >
                                <StyledText>{name}</StyledText>
                              </StyledLink>
                            </StyledItem>
                          ))}
                        </StyledSecondList>
                      )}
                    </StyledItem>
                  ))}
                </StyledList>
              </StyledListWrapper>
            )}
          </StyledRightColumn>
          <StyledLeftColumn>
            <StyledFeaturedImg src={featuredImg} loader={<Spinner />} />

            <StyledContent>
              <Wysiwyg blocks={blocks} />
            </StyledContent>
          </StyledLeftColumn>
        </StyledInnerWrapper>

        <StyledPagination>
          <StyledSocialButton kind="facebook" secondary />
          <StyledSocialButton kind="twitter" secondary />
        </StyledPagination>

        <Comments comments={comments} />
      </StyledWrapper>
    </MainTemplate>
  );
};

ArticleView.propTypes = {
  isBottomBarHidden: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { navigation } = state;
  return { isBottomBarHidden: navigation.isBottomBarHidden };
};

export default connect(mapStateToProps)(ArticleView);
