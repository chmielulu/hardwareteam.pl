import React, { useState } from "react";
import styled, { css } from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { Checkbox, Button, CircleButton } from "@components/atoms";
import extractLink from "@utils/extractLink";
import pencilIcon from "@iconify/icons-clarity/pencil-line";

const StyledWrapper = styled.div`
  margin-top: 35px;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 25, max: 35 })};
  }

  @media (max-width: 360px) {
    margin-top: 25px;
  }
`;

const StyledSection = styled.div`
  margin-bottom: 35px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledSectionHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 20, max: 30 })};
  }

  @media (max-width: 360px) {
    margin-bottom: 20px;
  }
`;

const StyledItem = styled.div`
  width: 100%;
  max-width: 515px;
  margin-bottom: 25px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledItemHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledItemContentWrapper = styled.div`
  padding: 20px 65px 20px 25px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  position: relative;
`;

const StyledItemContent = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-bottom: 8px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :last-of-type {
    margin-bottom: 0;
  }

  ${({ $password }) =>
    $password &&
    css`
      ${({ theme }) => useFontSize(theme, "xxl")}
      line-height: 19px;
    `}
`;

const StyledCircleButton = styled(CircleButton).attrs(() => ({
  icon: pencilIcon,
  label: "Edytuj",
}))`
  position: absolute;
  right: 7px;
  top: 9px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 10, max: 15 })};
  }

  @media (max-width: 360px) {
    margin-bottom: 10px;
  }
`;

const StyledCheckboxRender = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: ${({ $fontWeight }) => $fontWeight || 300};
  max-width: 500px;
  
  ${StyledCheckbox}:nth-of-type(2) & {
    line-height: 20px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 25px;
`;

const Settings = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState([false, false]);

  const handleCheckAll = () => {
    if (!checkedAll) {
      setCheckboxes(checkboxes.map(() => true));
      setCheckedAll(true);
    } else {
      setCheckboxes(checkboxes.map(() => false));
      setCheckedAll(false);
    }
  };

  const handleCheckboxChange = (e, indexProp) => {
    const allCheckboxes = checkboxes.map((checked, index) =>
      index === indexProp ? e.target.checked : checked
    );
    setCheckboxes(allCheckboxes);

    const allCheckedCheckboxes = allCheckboxes.filter((checked) => checked);

    if (allCheckedCheckboxes.length === allCheckboxes.length) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  };

  const title = "Ustawienia konta";

  return (
    <UserTemplate Headline={() => <>{title}</>} title={title}>
      <StyledWrapper>
        <StyledSection>
          <StyledSectionHeadline>Dane konta</StyledSectionHeadline>
          <StyledItem>
            <StyledItemHeadline>Twoje dane</StyledItemHeadline>
            <StyledItemContentWrapper>
              <StyledItemContent>Jakub Chmielewski</StyledItemContent>
              <StyledItemContent>Telefon: +48 887 077 904</StyledItemContent>
              <StyledCircleButton />
            </StyledItemContentWrapper>
          </StyledItem>
          <StyledItem>
            <StyledItemHeadline>Adres e-mail</StyledItemHeadline>
            <StyledItemContentWrapper>
              <StyledItemContent>
                jakubchmielewski80@gmail.com
              </StyledItemContent>
              <StyledCircleButton />
            </StyledItemContentWrapper>
          </StyledItem>
          <StyledItem>
            <StyledItemHeadline>Hasło</StyledItemHeadline>
            <StyledItemContentWrapper>
              <StyledItemContent $password>••••••••</StyledItemContent>
              <StyledCircleButton />
            </StyledItemContentWrapper>
          </StyledItem>
        </StyledSection>
        <StyledSection>
          <StyledSectionHeadline>
            Twoje zgody i poświadczenia
          </StyledSectionHeadline>

          <StyledCheckbox
            name="check_all"
            render={() => (
              <StyledCheckboxRender $fontWeight={400}>
                Zaznacz wszystkie
              </StyledCheckboxRender>
            )}
            checked={checkedAll}
            onChange={handleCheckAll}
          />
          <StyledCheckbox
            name="promotion_emails"
            render={() => (
              <StyledCheckboxRender>
                {extractLink(
                  "Chcę otrzymywać informacje o aktualnych ofertach oraz promocjach w wiadomości e‑mail.<Więcej>",
                  { link: "/" }
                )}
              </StyledCheckboxRender>
            )}
            checked={checkboxes[0]}
            onChange={(e) => handleCheckboxChange(e, 0)}
          />
          <StyledCheckbox
            name="customised_offer"
            render={() => (
              <StyledCheckboxRender>
                {extractLink(
                  "Chcę otrzymywać ofertę dopasowaną do moich potrzeb.<Więcej>",
                  { link: "/" }
                )}
              </StyledCheckboxRender>
            )}
            checked={checkboxes[1]}
            onChange={(e) => handleCheckboxChange(e, 1)}
          />
          <StyledButton>Zapisz zgody</StyledButton>
        </StyledSection>
      </StyledWrapper>
    </UserTemplate>
  );
};

export default Settings;
