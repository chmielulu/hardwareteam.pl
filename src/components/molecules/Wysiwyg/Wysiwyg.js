import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Img } from "react-image";

const StyledFirstHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 500;
  margin-top: 30px;
`;

const StyledSecondHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-top: 20px;
`;

const StyledImg = styled(Img)`
  max-width: 100%;
  margin: 25px 0 0;

  ${({ $nextElement }) => {
    if ($nextElement === "paragraph") {
      return css`
        margin-bottom: 10px;
      `;
    }

    if ($nextElement === "image") {
      return css`
        margin-bottom: 25px;
      `;
    }

    return undefined;
  }}
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 10px;
  text-align: justify;

  b {
    font-weight: 500;
  }

  :first-of-type {
    margin-top: 0;
  }
`;

const Wysiwyg = ({ blocks, ...props }) => (
  <React.Fragment {...props}>
    {blocks.map(({ type, data }, index) => {
      if (type === "paragraph") {
        return (
          <StyledParagraph
            key={index}
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        );
      }

      if (type === "header") {
        if (data.level === 1) {
          return (
            <StyledFirstHeadline
              key={index}
              id={data.id || data.text.replace(" ", "-")}
            >
              {data.text}
            </StyledFirstHeadline>
          );
        }
        return (
          <StyledSecondHeadline
            key={index}
            id={data.id || data.text.replace(" ", "-")}
          >
            {data.text}
          </StyledSecondHeadline>
        );
      }

      if (type === "image") {
        return (
          <StyledImg
            src={data.file.url}
            alt={data.alt}
            $stretched={data.stretched}
            $center={data.centered}
            $nextElement={blocks[index + 1] ? blocks[index + 1].type : false}
            key={index}
          />
        );
      }

      return null;
    })}
  </React.Fragment>
);

Wysiwyg.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Wysiwyg;
