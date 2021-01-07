import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Link } from "react-router-dom";
import { useWindowSize } from "@hooks/utils";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledWrapper = styled.ul`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-wrap: none;
    display: inline-flex;
    flex-shrink: 0;
  }
`;

const StyledSeperator = styled.span`
  margin: 0 6px;
`;

const StyledItem = styled.li`
  display: inline-flex;
  line-height: 1.4;
  font-weight: 300;

  @media (max-width: 1024px) {
    flex-shrink: 0;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .swiper-wrapper {
    display: inline-flex;
    flex-shrink: 0;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-slide {
    display: inline-flex;
    flex-shrink: 0;
  }
`;

// eslint-disable-next-line react/prop-types
const Item = ({ locations }) => (
  <>
    {[{ name: "Hardware Team", link: "/" }]
      .concat(locations)
      .map(({ name, link, onClick }, index) => (
        <div key={link}>
          <StyledItem>
            <StyledLink to={link} onClick={onClick || undefined}>
              {name}
            </StyledLink>
          </StyledItem>
          {/* eslint-disable-next-line react/prop-types */}
          {index !== locations.length && (
            <StyledSeperator>&gt;</StyledSeperator>
          )}
        </div>
      ))}
  </>
);

const Locator = ({ locations }) => {
  const { width } = useWindowSize();

  return (
    <StyledWrapper>
      {width > 1024 ? (
        <Item locations={locations} />
      ) : (
        <SwiperWrapper>
          <Swiper mousewheel slidesPerView="auto" freeMode>
            <SwiperSlide>
              <Item locations={locations} />
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>
      )}
    </StyledWrapper>
  );
};

Locator.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default Locator;
