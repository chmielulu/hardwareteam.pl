import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import { Link } from "react-router-dom";
import facebookIcon from "@iconify/icons-entypo-social/facebook-with-circle";
import instagramIcon from "@iconify/icons-entypo-social/instagram-with-circle";
import twitterIcon from "@iconify/icons-entypo-social/twitter-with-circle";
import youtubeIcon from "@iconify/icons-entypo-social/youtube-with-circle";
import phoneIcon from "@iconify-icons/clarity/mobile-phone-solid";
import emailIcon from "@iconify/icons-clarity/email-solid";
import { useFontSize } from "@hooks/styled-components";

const socialMedias = [
  { icon: facebookIcon, link: "/" },
  { icon: instagramIcon, link: "/" },
  { icon: twitterIcon, link: "/" },
  { icon: youtubeIcon, link: "/" },
];

const StyledWrapper = styled.div`
  @media (max-width: 1024px) {
    order: 0;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const StyledSocialMediaWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const StyledSocialMediaInnerWrapper = styled.div`
  display: flex;
`;

const StyledSocialMediaIcon = styled(Icon)`
  color: ${({ theme }) => theme.gray};
  font-size: 3.2rem;
  margin-right: 8px;
  transition: color 0.2s ease;

  :hover {
    color: ${({ theme }) => theme.black};
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "l", "xl")}

    ${StyledContactWrapper} > & {
      margin-bottom: 20px;
    }
  }
`;

const StyledContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;

  :last-of-type {
    margin-bottom: 0;
    align-items: center;
  }
`;

const StyledContactIcon = styled(Icon)`
  color: ${({ theme }) => theme.black};
  font-size: 3rem;
  margin-right: 10px;
`;

const StyledContactText = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "xl")}
  font-weight: 300;

  ${StyledContactItem}:last-of-type & {
    ${({ theme }) => useFontSize(theme, "m", "l")}
  }
`;

const StyledContactInnerWrapper = styled.div`
  ${({ theme }) => useFontSize(theme, "s", "l")}
  margin-top: 5px;
`;

const StyledContactInnerRow = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin-bottom: 2.5px;
`;

const StyledContactInnerSpan = styled.span`
  font-weight: 400;
  margin-right: 10px;
`;

const ContactRow = () => {
  return (
    <StyledWrapper>
      <StyledSocialMediaWrapper>
        <StyledHeadline>Social media</StyledHeadline>
        <StyledSocialMediaInnerWrapper>
          {socialMedias.map(({ icon, link }, index) => (
            <StyledLink to={link} key={index}>
              <StyledSocialMediaIcon icon={icon} />
            </StyledLink>
          ))}
        </StyledSocialMediaInnerWrapper>
      </StyledSocialMediaWrapper>
      <StyledContactWrapper>
        <StyledHeadline>Masz pytania?</StyledHeadline>
        <StyledContactItem>
          <StyledContactIcon icon={phoneIcon} />
          <StyledContactText>
            14 300 00 25
            <StyledContactInnerWrapper>
              <StyledContactInnerRow>
                <StyledContactInnerSpan>pon. - pt.</StyledContactInnerSpan>
                8:00 - 21:00
              </StyledContactInnerRow>
              <StyledContactInnerRow>
                <StyledContactInnerSpan>pt. - niedz.</StyledContactInnerSpan>
                8:00 - 19:00
              </StyledContactInnerRow>
            </StyledContactInnerWrapper>
          </StyledContactText>
        </StyledContactItem>
        <StyledContactItem>
          <StyledContactIcon icon={emailIcon} />
          <StyledContactText>kontakt@hardwareteam.pl</StyledContactText>
        </StyledContactItem>
      </StyledContactWrapper>
    </StyledWrapper>
  );
};

export default ContactRow;
