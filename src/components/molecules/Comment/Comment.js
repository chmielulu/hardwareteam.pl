import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Score } from "@components/atoms";
import Icon from "@iconify/react";
import clockIcon from "@iconify/icons-clarity/clock-line";
import thumpsUpIcon from "@iconify/icons-clarity/thumbs-up-line";
import thumpsDownIcon from "@iconify/icons-clarity/thumbs-down-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import Confirmed from "./_components/Confirmed/Confirmed";
import getTimeFromNow from "./utils/getTimeFromNow";

const StyledWrapper = styled.div`
  padding: 45px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: ${`${useFluidSize({ min: 25, max: 45 })} ${useFluidSize({
      min: 15,
      max: 45,
    })}`};
  }

  @media (max-width: 360px) {
    padding: 25px 15px;
  }
`;

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  ${({ $isProductComment }) =>
    $isProductComment &&
    css`
      min-width: 165px;
    `}

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledUserName = styled.span`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;
`;

const StyledRightColumn = styled.div`
  width: 800px;

  @media (max-width: 1400px) {
    width: 700px;
  }

  @media (max-width: 1140px) {
    width: 600px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledInformations = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 7px;
  }
`;

const StyledScore = styled(Score)`
  width: 115px;
  margin-right: 25px;

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 68, max: 115 })};
    margin-right: ${useFluidSize({ min: 10, max: 25 })};
    margin-left: -2px;
  }

  @media (max-width: 360px) {
    width: 68px;
    margin-right: 10px;
  }
`;

const StyledTime = styled.div`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const StyledTimeIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 8px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.5, max: 2, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const StyledImgWrapper = styled.div`
  margin-top: 20px;
`;

const StyledImg = styled.img`
  width: 90px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 15px;

  :last-of-type {
    margin-right: 0;
  }
`;

const StyledContent = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  line-height: 1.4;
  margin-top: 20px;
  display: block;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const StyledReview = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 10, max: 15 })};
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const StyledReviewTitle = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  color: ${({ theme }) => theme.darkGray};
  margin-right: 30px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledReviewItem = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  display: flex;
  align-items: center;
  font-weight: 300;
  margin-right: 20px;
`;

const StyledReviewIcon = styled(Icon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.darkGray};
  margin-right: 5px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({
      min: 1.8,
      max: 3,
      unit: "rem",
    })};
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const StyledConfirmedWrapper = styled.div`
  margin-top: 10px;
  margin-left: -4px;

  @media (max-width: 1024px) {
    margin-top: 0;
    margin-left: 15px;
  }
`;

const Comment = ({
  userName,
  date,
  content,
  likeCount,
  dislikeCount,
  productOptions: { isConfirmed, score, images },
}) => {
  const { width } = score ? useWindowSize() : { width: null };

  return (
    <StyledWrapper>
      <StyledLeftColumn $isProductComment={score}>
        <StyledUserName>{userName}</StyledUserName>
        {isConfirmed && (
          <StyledConfirmedWrapper>
            <Confirmed />
          </StyledConfirmedWrapper>
        )}
      </StyledLeftColumn>
      <StyledRightColumn>
        <StyledInformations>
          {score && <StyledScore score={score} />}
          <StyledTime>
            <StyledTimeIcon icon={clockIcon} />
            {getTimeFromNow(date)}
          </StyledTime>
        </StyledInformations>
        {images && width > 1024 && (
          <StyledImgWrapper>
            {images.map((image, index) => (
              <StyledImg src={image} alt="" key={index} />
            ))}
          </StyledImgWrapper>
        )}
        <StyledContent>{content}</StyledContent>
        <StyledReview>
          <StyledReviewTitle>Czy ta opinia była pomocna?</StyledReviewTitle>
          <StyledReviewItem>
            <StyledReviewIcon icon={thumpsUpIcon} />
            {likeCount}
          </StyledReviewItem>
          <StyledReviewItem>
            <StyledReviewIcon icon={thumpsDownIcon} />
            {dislikeCount}
          </StyledReviewItem>
        </StyledReview>
      </StyledRightColumn>
    </StyledWrapper>
  );
};

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  productOptions: PropTypes.shape({
    isConfirmed: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    images: PropTypes.array,
  }),
};

Comment.defaultProps = {
  productOptions: {},
};

export default Comment;
