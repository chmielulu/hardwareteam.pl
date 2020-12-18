import React, { useState } from "react";
import styled from "styled-components";
import { Headline, Score, Progress, Button, Select } from "@components/atoms";
import { Comment } from "@components/molecules";
import { secondary, tertiary } from "@constants/kinds";
import Icon from "@iconify/react";
import starIcon from "@iconify/icons-clarity/star-solid";
import chatIcon from "@iconify/icons-clarity/chat-bubble-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";

const reviews = [
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Andrzej",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry.
    Telefon może służyć też jako powerbank - całkiem przydatna funkcja.`,
    likeCount: 4,
    dislikeCount: 0,
  },
  {
    userName: "Piotrek",
    productOptions: { score: 5 },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    content: `Dobry telefon dla starszej osoby. Bardzo długo trzyma na baterii. Mama jest zadowolona.`,
    likeCount: 4,
    dislikeCount: 0,
  },
];

const StyledWrapper = styled.section`
  margin-top: 80px;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 50, max: 80 })};
  }

  @media (max-width: 360px) {
    margin-top: 50px;
  }
`;

const StyledReviewsSummmary = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding-bottom: 40px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 5%;
    margin-top: ${useFluidSize({ min: 20, max: 40 })};
  }

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const StyledScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAverage = styled.div`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 500;
  margin-bottom: 10px;
`;

const StyledScore = styled(Score)`
  width: 100px;
`;

const StyledScoreText = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-top: 5px;
`;

const StyledStatistics = styled.div`
  margin-left: 10%;

  @media (max-width: 1220px) {
    margin-left: 5%;
  }

  @media (max-width: 1024px) {
    margin-left: 50px;
  }

  @media (max-width: 420px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

const StyledStatisticsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: ${({ theme }) => theme.gray};
  margin-right: 7px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.5, max: 2, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const StyledStatisticType = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-right: 10px;
`;

const StyledProgress = styled(Progress)`
  height: 12px;
  margin-right: 7px;

  @media (max-width: 520px) {
    width: 100px;
  }
`;

const StyledStatisticCount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
`;

const StyledAddReview = styled.div`
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 100px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;

  @media (max-width: 1220px) {
    margin-left: 5%;
  }

  @media (max-width: 1024px) {
    padding: 0;
    border: 0;
    margin-left: 0;
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledAddReviewHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledAddReviewText = styled.span`
  ${({ theme }) => useFontSize(theme)}
  color: ${({ theme }) => theme.gray};
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledAddReviewButton = styled(Button)``;

const StyledReviewsWrapper = styled.div`
  margin-top: 40px;
`;

const StyledReviewsNavigation = styled.div`
  padding-left: 3%;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  @media (max-width: 1024px) {
    padding-bottom: 20px;
  }
`;

const StyledReviewsHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const StyledReviewsFiltersWrapper = styled.div`
  display: flex;
`;

const StyledReviewsFilter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

const StyledReviewsFilterText = styled.span`
  ${({ theme }) => useFontSize(theme)}
  white-space: nowrap;
  margin-right: 15px;
`;

const StyledSelect = styled(Select)`
  width: 192px;
`;

const StyledResultsCounter = styled.span`
  ${({ theme }) => useFontSize(theme)}
  margin-top: 30px;
  display: block;
  color: ${({ theme }) => theme.gray};
`;

const ShowMoreButton = styled(Button)`
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 20, max: 40 })};
  }

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const StyledScoreAndStatisticWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Reviews = React.forwardRef((_, ref) => {
  const [maxReviews, setMaxReviews] = useState(4);
  const { width } = useWindowSize();

  const handleShowMoreClick = () => {
    if (maxReviews + 4 >= reviews.length) {
      setMaxReviews(reviews.length);
    }

    setMaxReviews(maxReviews + 4);
  };

  const getWord = () => {
    const { length } = reviews;

    if (length === 1) {
      return "Opinia";
    }

    if (length > 1 && length <= 4) {
      return "Opinie";
    }

    return "Opinii";
  };

  return (
    <StyledWrapper ref={ref}>
      <Headline as="h3" kind={secondary}>
        Opinie
      </Headline>
      <StyledReviewsSummmary>
        <StyledScoreAndStatisticWrapper>
          <StyledScoreWrapper>
            <StyledAverage>5/5</StyledAverage>
            <StyledScore score={5} />
            <StyledScoreText>
              ({reviews.length} {getWord()})
            </StyledScoreText>
          </StyledScoreWrapper>
          <StyledStatistics>
            <StyledStatisticsRow>
              <StyledIcon icon={starIcon} />
              <StyledStatisticType>5</StyledStatisticType>
              <StyledProgress min={0} max={2} value={2} />
              <StyledStatisticCount>2</StyledStatisticCount>
            </StyledStatisticsRow>
            <StyledStatisticsRow>
              <StyledIcon icon={starIcon} />
              <StyledStatisticType>4</StyledStatisticType>
              <StyledProgress min={0} max={2} value={0} />
              <StyledStatisticCount>0</StyledStatisticCount>
            </StyledStatisticsRow>
            <StyledStatisticsRow>
              <StyledIcon icon={starIcon} />
              <StyledStatisticType>3</StyledStatisticType>
              <StyledProgress min={0} max={2} value={0} />
              <StyledStatisticCount>0</StyledStatisticCount>
            </StyledStatisticsRow>
            <StyledStatisticsRow>
              <StyledIcon icon={starIcon} />
              <StyledStatisticType>2</StyledStatisticType>
              <StyledProgress min={0} max={2} value={0} />
              <StyledStatisticCount>0</StyledStatisticCount>
            </StyledStatisticsRow>
            <StyledStatisticsRow>
              <StyledIcon icon={starIcon} />
              <StyledStatisticType>1</StyledStatisticType>
              <StyledProgress min={0} max={2} value={0} />
              <StyledStatisticCount>0</StyledStatisticCount>
            </StyledStatisticsRow>
          </StyledStatistics>
        </StyledScoreAndStatisticWrapper>

        <StyledAddReview>
          <StyledAddReviewHeadline>Masz ten produkt?</StyledAddReviewHeadline>
          <StyledAddReviewText>Pomóż innym w wyborze!</StyledAddReviewText>
          <StyledAddReviewButton
            icon={chatIcon}
            kind={secondary}
            fullWidth={width <= 1024}
          >
            Dodaj opinię
          </StyledAddReviewButton>
        </StyledAddReview>
      </StyledReviewsSummmary>

      <StyledReviewsWrapper>
        <StyledReviewsNavigation>
          <StyledReviewsHeadline>
            Opinie użytkowników ({reviews.length})
          </StyledReviewsHeadline>
          {width > 1024 && (
            <>
              <StyledReviewsFiltersWrapper>
                <StyledReviewsFilter>
                  <StyledReviewsFilterText>Filtruj:</StyledReviewsFilterText>
                  <StyledSelect
                    options={[
                      { name: "Wszystkie oceny" },
                      { name: "1 gwiazdka" },
                      { name: "2 gwiazdki" },
                      { name: "3 gwiazdki" },
                      { name: "4 gwiazdki" },
                      { name: "5 gwiazdek" },
                    ]}
                    kind={secondary}
                  />
                </StyledReviewsFilter>
                <StyledReviewsFilter>
                  <StyledReviewsFilterText>Sortuj od:</StyledReviewsFilterText>
                  <StyledSelect
                    options={[
                      { name: "Najwyżej ocenione" },
                      { name: "Najnowsze" },
                    ]}
                    kind={secondary}
                  />
                </StyledReviewsFilter>
              </StyledReviewsFiltersWrapper>
              <StyledResultsCounter>
                Wyniki {reviews.length} z {reviews.length}
              </StyledResultsCounter>
            </>
          )}
        </StyledReviewsNavigation>

        {reviews.slice(0, maxReviews).map((props, index) => (
          <Comment key={index} {...props} />
        ))}
        {reviews.length > maxReviews && (
          <ShowMoreButton kind={tertiary} onClick={handleShowMoreClick}>
            Pokaż więcej komentarzy ({reviews.length - maxReviews})
          </ShowMoreButton>
        )}
      </StyledReviewsWrapper>
    </StyledWrapper>
  );
});

export default Reviews;
