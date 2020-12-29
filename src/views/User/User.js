import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { UserNav } from "@components/molecules";
import { Redirect } from "react-router-dom";
import { useWindowSize } from "@hooks/utils";
import routes from "@routes";

const StyledWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 40px;
  padding-bottom: 20px;
`;

const User = () => {
  const { width } = useWindowSize();

  if (width > 1024) {
    return <Redirect to={routes.orders} />;
  }

  return (
    <MainTemplate>
      <StyledWrapper>
        <UserNav />
      </StyledWrapper>
    </MainTemplate>
  );
};

export default User;
