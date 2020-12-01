import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import { Link } from "react-router-dom";
import getDateFromTimestamp from "./utils/getDateFromTimestamp";
import getMinutesWord from "./utils/getMinutesWord";

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media (max-width: 1024px) {
    width: ${useFluidSize(236, 350, 361, 1024)};
  }

  @media (max-width: 360px) {
    height: 236px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    text-decoration: underline;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    height: ${useFluidSize(144, 220, 361, 1024)};
  }

  @media (max-width: 360px) {
    height: 220px;
  }
`;

const StyledFooterImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 400;
  margin-left: 3px;
`;

const StyledContent = styled.p`
  ${({ theme }) => useFontSize(theme, "xs", "m")};
  font-weight: 300;
  margin: 8px 0 8px 3px;
`;

const StyledFooter = styled.footer`
  margin-left: 3px;
  font-weight: 300;
  ${({ theme }) => useFontSize(theme, "xs")};
  color: ${({ theme }) => theme.darkGray};
  display: flex;
  align-items: center;
`;

const StyledDate = styled.time``;

const StyledReadTime = styled.span``;

const Spacer = styled.span`
  margin: 0 9px;
  width: 15px;
  height: 1px;
  display: block;
  background: ${({ theme }) => theme.gray};
`;

const ArticleCard = ({ img, name, content, date, readTime, link }) => {
  return (
    <StyledWrapper>
      <StyledLink to={link}>
        <StyledImageWrapper>
          <StyledFooterImage src={img} name={name} />
        </StyledImageWrapper>
        <StyledHeadline>{name}</StyledHeadline>
      </StyledLink>
      <StyledContent>{content}</StyledContent>
      <StyledFooter>
        <StyledDate dateTime="test">{getDateFromTimestamp(date)}</StyledDate>
        <Spacer />
        <StyledReadTime>
          {readTime} {getMinutesWord(readTime)} czytania
        </StyledReadTime>
      </StyledFooter>
    </StyledWrapper>
  );
};

ArticleCard.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  readTime: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default ArticleCard;
