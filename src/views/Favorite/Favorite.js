import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { Checkbox, SlideControl } from "@components/atoms";
import shoppingIcon from "@iconify/icons-clarity/shopping-cart-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import SpecificButton from "./_components/Button/Button";
import { favoriteProducts } from "./_dummyContent/dummyContent";
import FavoriteProduct from "./_components/FavoriteProduct/FavoriteProduct";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin-top: 35px;
`;

const StyledSlideControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  margin-bottom: 15px;
`;

const StyledSlideControl = styled(SlideControl)`
  label {
    font-weight: 300;
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  align-items: center;
  padding: 0 20px;
  justify-content: flex-end;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: auto;
`;

const StyledSpecificButton = styled(SpecificButton)``;

const Favorite = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    favoriteProducts.map(() => false)
  );
  const [isActiveButtons, setActiveButtons] = useState(false);

  const handleCheckAll = () => {
    if (!allChecked) {
      setCheckboxes(checkboxes.map(() => true));
      setAllChecked(true);
    } else {
      setCheckboxes(checkboxes.map(() => false));
      setAllChecked(false);
    }
  };

  const handleCheckboxChange = (e, indexProp) => {
    const allCheckboxes = checkboxes.map((checked, index) =>
      index === indexProp ? e.target.checked : checked
    );
    setCheckboxes(allCheckboxes);

    const allCheckedCheckboxes = allCheckboxes.filter((checked) => checked);

    if (allCheckedCheckboxes.length === allCheckboxes.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  useEffect(() => {
    const allCheckedCheckboxes = checkboxes.filter((checked) => checked);

    if (allCheckedCheckboxes.length > 0) {
      setActiveButtons(true);
    } else {
      setActiveButtons(false);
    }
  }, [checkboxes]);

  return (
    <UserTemplate Headline={() => <>Zapisane Produkty</>}>
      <StyledWrapper>
        <StyledSlideControlWrapper>
          <StyledSlideControl
            label="Pokaż tylko dostępne produkty"
            name="show_only_available"
          />
        </StyledSlideControlWrapper>

        <StyledNavigation>
          <StyledCheckbox
            name="check_all"
            label="Zaznacz wszystkie"
            checked={allChecked}
            onChange={handleCheckAll}
          />
          <StyledSpecificButton icon={shoppingIcon} disabled={!isActiveButtons}>
            Do koszyka
          </StyledSpecificButton>
          <StyledSpecificButton icon={trashIcon} disabled={!isActiveButtons}>
            Usuń
          </StyledSpecificButton>
        </StyledNavigation>

        {favoriteProducts.map((props, index) => (
          <FavoriteProduct
            checked={checkboxes[index]}
            onChange={(e) => handleCheckboxChange(e, index)}
            {...props}
          />
        ))}
      </StyledWrapper>
    </UserTemplate>
  );
};

export default Favorite;
