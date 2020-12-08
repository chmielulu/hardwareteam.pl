import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Comment } from "@components/molecules";
import { Input, Button } from "@components/atoms";
import chatIcon from "@iconify-icons/clarity/chat-bubble-line";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import { secondary, tertiary } from "@constants/kinds";
import { useWindowSize } from "@hooks/utils";

const StyledWrapper = styled.aside`
  max-width: 930px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const StyledHeadline = styled.div`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
`;

const StyledCountWrapper = styled.span`
  color: ${({ theme }) => theme.gray};
`;

const StyledForm = styled.form`
  padding-right: 25%;
  padding-bottom: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;

const StyledTextArea = styled(Input)`
  margin-top: 40px;

  textarea {
    resize: none;
    width: 100%;
    height: 230px !important;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;

    textarea {
     height: ${`${useFluidSize({ min: 134, max: 230 })}!important`}};
    }
  }

  @media (max-width: 300px) {
    textarea {
      height: 250px;
    }
  }

`;

const StyledTextAreaWrapper = styled.div``;

const StyledInputButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: ${useFluidSize({ min: 10, max: 20 })};
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const StyledInput = styled(Input)`
  width: 65%;

  @media (max-width: 1024px) {
    width: 100%;
  }
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

const StyledButton = styled(Button)`
  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 20, max: 30 })};
  }

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const Comments = ({ comments }) => {
  const [maxComments, setMaxComments] = useState(4);
  const { width } = useWindowSize();

  const handleShowMoreClick = () => {
    if (maxComments + 4 >= comments.length) {
      setMaxComments(comments.length);
    }

    setMaxComments(maxComments + 4);
  };

  return (
    <StyledWrapper>
      <StyledHeadline>
        Komentarze <StyledCountWrapper>({comments.length})</StyledCountWrapper>
      </StyledHeadline>

      <StyledForm>
        <StyledTextAreaWrapper>
          <StyledTextArea
            forwardedAs="textarea"
            name="content"
            label="Treść komentarza"
            maxLength={2000}
            kind={secondary}
          />
        </StyledTextAreaWrapper>
        <StyledInputButtonWrapper>
          <StyledInput name="name" label="Imię" kind={secondary} />
          <StyledButton
            icon={chatIcon}
            kind={secondary}
            fullWidth={width <= 1024}
          >
            Dodaj komentarz
          </StyledButton>
        </StyledInputButtonWrapper>
      </StyledForm>
      {comments.slice(0, maxComments).map((props, index) => (
        <Comment key={index} {...props} />
      ))}
      {comments.length > maxComments && (
        <ShowMoreButton kind={tertiary} onClick={handleShowMoreClick}>
          Pokaż więcej komentarzy ({comments.length - maxComments})
        </ShowMoreButton>
      )}
    </StyledWrapper>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      likeCount: PropTypes.number.isRequired,
      dislikeCount: PropTypes.number.isRequired,
    })
  ),
};

Comments.defaultProps = {
  comments: null,
};

export default Comments;
