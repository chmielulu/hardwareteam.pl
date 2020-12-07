import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  margin: 0 5px;
`;

export default (string, { onlyLinkText, link } = {}) => {
  const extractLink = string.split("<").pop().split(">")[0];
  const textWithoutLink = string.split(`<${extractLink}>`);

  if (onlyLinkText) {
    return extractLink;
  }

  return (
    <>
      {textWithoutLink.map((text, index) => {
        if (textWithoutLink.length / 2 === index + 1) {
          return (
            <>
              {text}
              <StyledLink to={link}>{extractLink}</StyledLink>
            </>
          );
        }

        return <>{text}</>;
      })}
    </>
  );
};
