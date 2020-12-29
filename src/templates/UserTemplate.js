import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { useFontSize } from "@hooks/styled-components";
import { UserNav } from "@components/molecules";
import { useWindowSize } from "@hooks/utils";
import { BackButton } from "@components/atoms";
import routes from "@routes";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
  margin-top: 40px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledLeftColumn = styled.div``;

const StyledRightColumn = styled.div`
  padding-left: 40px;
  padding-top: 10px;
  border-left: 1px solid ${({ theme }) => theme.lightGray};
  flex: 1;
  overflow: hidden;

  @media (max-width: 1024px) {
    border-left: 0;
    padding-left: 0;
    padding-top: 0;
    margin-top: 30px;
  }
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 400;
`;

const UserTemplate = ({ Headline, children, withoutBackButton }) => {
  const { width } = useWindowSize();

  return (
    <MainTemplate>
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledLeftColumn>
            {width > 1024 ? (
              <UserNav />
            ) : (
              !withoutBackButton && (
                <BackButton to={routes.user} onClick={() => {}}>
                  Zawróć się
                </BackButton>
              )
            )}
          </StyledLeftColumn>
          <StyledRightColumn>
            {Headline && (
              <StyledHeadline>
                <Headline />
              </StyledHeadline>
            )}
            {children}
          </StyledRightColumn>
        </StyledInnerWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

UserTemplate.propTypes = {
  Headline: PropTypes.node,
  children: PropTypes.node.isRequired,
  withoutBackButton: PropTypes.bool,
};

UserTemplate.defaultProps = {
  Headline: null,
  withoutBackButton: false,
};

export default UserTemplate;
