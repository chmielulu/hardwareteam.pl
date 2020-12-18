import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import infoIcon from "@iconify/icons-clarity/info-standard-line";
import atomIcon from "@iconify/icons-clarity/atom-line";
import accessoriesIcon from "@iconify/icons-clarity/add-text-line";
import chatIcon from "@iconify/icons-clarity/chat-bubble-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import scrollTo from "@utils/scrollToElement";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

const items = ({ description, reviews, accessories, specification }) => {
  const yOffset = 220;

  return [
    {
      icon: infoIcon,
      text: "Opis",
      onClick: () => scrollTo(description, null, { yOffset }),
    },
    {
      icon: atomIcon,
      text: "Specyfikacja",
      onClick: () => scrollTo(specification, null, { yOffset }),
    },
    {
      icon: accessoriesIcon,
      text: "Akcesoria",
      onClick: () => scrollTo(accessories, null, { yOffset }),
    },
    {
      icon: chatIcon,
      text: "Opinie (2)",
      onClick: () => scrollTo(reviews, null, { yOffset }),
    },
  ];
};

const StyledWrapper = styled.nav`
  padding: 15px 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  display: inline-flex;
  margin-top: 20px;
  background: #fff;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 410px) {
    padding: 15px 20px;
  }

  ${({ $isFixed }) =>
    $isFixed &&
    css`
      position: fixed;
      left: 0;
      top: 130px;
      z-index: 99999;
      margin-top: 0;
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      width: 100%;
      padding: 15px 5%;

      @media (max-width: 1752px) {
        top: 135px;
      }

      @media (max-width: 1024px) {
        top: 85px;
        border-top: 1px solid ${({ theme }) => theme.lightGray};
      }

      @media (max-width: 768px) {
        top: 55px;
      }
    `}
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 5px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.2, max: 2, unit: "rem" })};
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  white-space: nowrap;

  :last-of-type {
    margin-right: 0;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: ${theme.primary};
    `}

  @media (max-width: 1024px) {
    margin-right: 20px;
  }

  @media (max-width: 360px) {
    margin-right: 10px;
  }
`;

const Navigation = ({ allSections }) => {
  const wrapper = useRef();
  const [top, setTop] = useState();
  const [isFixed, setFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const { isVisible: isDescriptionVisible } = useVisibilitySensor(
    allSections.description,
    {
      intervalCheck: false,
      scrollCheck: true,
      resizeCheck: true,
      partialVisibility: true,
    }
  );

  const { isVisible: isAccessoriesVisible } = useVisibilitySensor(
    allSections.accessories,
    {
      intervalCheck: false,
      scrollCheck: true,
      resizeCheck: true,
      partialVisibility: true,
    }
  );

  const { isVisible: isSpecificationVisible } = useVisibilitySensor(
    allSections.specification,
    {
      intervalCheck: false,
      scrollCheck: true,
      resizeCheck: true,
      partialVisibility: true,
    }
  );

  const { isVisible: isReviewsVisible } = useVisibilitySensor(
    allSections.reviews,
    {
      intervalCheck: false,
      scrollCheck: true,
      resizeCheck: true,
      partialVisibility: true,
      minTopValue: 400,
    }
  );

  useEffect(() => {
    setTop(wrapper.current.offsetTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateFixed = () => {
      const y = window.pageYOffset;

      if (y > top && !isFixed) {
        setFixed(true);
      } else if (y <= top && isFixed) {
        setFixed(false);
        setActiveSection(0);
      }
    };

    window.addEventListener("scroll", updateFixed);

    return () => {
      window.removeEventListener("scroll", updateFixed);
    };
  });

  useEffect(() => {
    if (isReviewsVisible) {
      setActiveSection(3);
    } else if (isAccessoriesVisible) {
      setActiveSection(2);
    } else if (isSpecificationVisible) {
      setActiveSection(1);
    } else if (isDescriptionVisible) {
      setActiveSection(0);
    }
  }, [
    isDescriptionVisible,
    isSpecificationVisible,
    isAccessoriesVisible,
    isReviewsVisible,
  ]);

  return (
    <StyledWrapper ref={wrapper} $isFixed={isFixed}>
      <StyledList>
        {items(allSections).map(({ icon, text, onClick }, index) => (
          <StyledItem
            key={index}
            $isActive={index === activeSection}
            onClick={onClick}
          >
            <StyledIcon icon={icon} />
            {text}
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

Navigation.propTypes = {
  allSections: PropTypes.shape({
    description: PropTypes.any,
    accessories: PropTypes.any,
    specification: PropTypes.any,
    reviews: PropTypes.any,
  }).isRequired,
};

export default Navigation;
