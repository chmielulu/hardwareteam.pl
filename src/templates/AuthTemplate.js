import React from "react";
import PropTypes from "prop-types";
import BlankTemplate from "@templates/BlankTemplate";
import styled, { css } from "styled-components";
import { Img } from "react-image";
import {
  Input,
  SlideControl,
  Button,
  SocialButton,
  BackButton,
  Logo,
  Spinner,
} from "@components/atoms";
import { Link } from "react-router-dom";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import { tertiary } from "@constants/kinds";
import extractLink from "@utils/extractLink";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 750px;
  display: flex;

  ${({ $minHeight }) => css`
    min-height: ${`${$minHeight}px`};
  `}

  @media (max-width: 1024px) {
    height: unset;
    min-height: 100vh;
  }
`;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: 40px;
  top: 40px;

  @media (max-width: 1250px) {
    left: 30px;
    top: 30px;
  }

  @media (max-width: 1024px) {
    position: static;
    margin-bottom: 40px;
  }
`;

const StyledLeftColumn = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1250px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    min-height: 100%;
    height: unset;
    align-items: flex-start;
    max-width: 450px;
    padding: 20px 0 40px;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 360px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const StyledHeader = styled.div``;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 500;
  margin: 30px 0;

  @media (max-width: 1024px) {
    margin: ${`${useFluidSize({ min: 20, max: 30 })} 0 ${useFluidSize({
      min: 10,
      max: 30,
    })}`};
  }

  @media (max-width: 1024px) {
    margin: 20px 0 10px;
  }
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 15px;

  :last-of-type {
    margin-bottom: 20px;
  }
`;

const StyledRightColumn = styled.div`
  width: 60%;
  overflow: hidden;

  @media (max-width: 1250px) {
    width: 50%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-left: 5px;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledSlideControl = styled(SlideControl)`
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledForm = styled.form``;

const StyledInformation = styled.div`
  ${({ theme }) => useFontSize(theme)}
  white-space: nowrap;
  font-weight: 300;
  margin-top: 30px;
`;

const StyledSpacer = styled.span`
  width: 380px;
  margin: 30px 0;
  height: 1px;
  background: ${({ theme }) => theme.lightGray};
  display: block;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 380px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: -30px;
  }
`;

const StyledSocialButton = styled(SocialButton)`
  margin-top: 30px;
`;

const StyledSecondButton = styled(Button)`
  margin: 40px auto 0;
`;

const AuthTemplate = ({
  title,
  subtitle,
  inputs,
  slideControls,
  button,
  information,
  background,
  backLink,
  minHeight,
}) => {
  const { width } = useWindowSize();

  return (
    <BlankTemplate>
      <StyledWrapper $minHeight={minHeight}>
        <StyledLeftColumn>
          <StyledBackButton to={backLink}>Zawróć się</StyledBackButton>

          <StyledInnerWrapper>
            <StyledHeader>
              <Logo
                size={
                  // eslint-disable-next-line no-nested-ternary
                  width <= 600 ? `30px` : width <= 1024 ? `40px` : undefined
                }
              />
            </StyledHeader>
            <StyledHeadline>{title}</StyledHeadline>
            <StyledParagraph>{subtitle}</StyledParagraph>

            <StyledForm>
              {inputs.map(({ name, label, icon }, index) => (
                <StyledInput
                  icon={icon}
                  label={label}
                  name={name}
                  key={index}
                />
              ))}

              {slideControls.map(({ name, label, link }, index) => (
                <StyledSlideControl
                  name={name}
                  label={label}
                  link={link}
                  hideLabel={false}
                  key={index}
                />
              ))}

              <StyledButton fullWidth icon={button.icon}>
                {button.text}
              </StyledButton>
            </StyledForm>

            {width > 1024 && (
              <StyledInformation>
                {extractLink(information.text, { link: information.link })}
              </StyledInformation>
            )}
          </StyledInnerWrapper>
          <StyledSpacer />

          <SocialMediaWrapper>
            <StyledSocialButton kind="facebook" />
            <StyledSocialButton kind="google" />
          </SocialMediaWrapper>

          {width <= 1024 && (
            <StyledSecondButton
              kind={tertiary}
              forwardedAs={Link}
              to={information.link}
            >
              {extractLink(information.text, { onlyLinkText: true })}
            </StyledSecondButton>
          )}
        </StyledLeftColumn>
        {width > 1024 && (
          <StyledRightColumn>
            <StyledImg src={background} alt="" loader={<Spinner />} />
          </StyledRightColumn>
        )}
      </StyledWrapper>
    </BlankTemplate>
  );
};

AuthTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
    })
  ).isRequired,
  slideControls: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
  information: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  background: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  minHeight: PropTypes.number,
};

AuthTemplate.defaultProps = {
  minHeight: 750,
};

export default AuthTemplate;
