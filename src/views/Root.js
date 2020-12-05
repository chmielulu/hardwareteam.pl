import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCard } from "@components/molecules";
import { Navigation, Footer } from "@components/organisms";
import productImg from "@assets/images/huaweiPhone.png";
import dummyContent from "@components/organisms/Footer/dummyContent";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 5%;

  @media (max-width: 320px) {
    padding: 20px 0;
  }

  @media (max-width: 300px) {
    overflow-x: scroll;
  }
`;

const Root = () => (
  <MainTemplate>
    <Router>
      <Navigation />
      <div className="main-wrapper">
        <Wrapper>
          <ProductCard
            awards={["recommendable", "bestseller", "valueForMoney"]}
            name="Smartfon Huawei Y6P 64GB Dual SIM Fioletowy"
            img={productImg}
            attributes={[
              { name: "Ekran", value: '6,3"' },
              { name: "Procesor", value: "MediaTek MT6762R Helio P22" },
              { name: "Pamięć RAM", value: "3GB" },
              { name: "Pamięć wbudowana", value: "64GB" },
              { name: "System", value: "Android 10" },
            ]}
            score={5}
            reviewsCount={20}
            price={3000}
            informations={["time", "delivery"]}
          />
        </Wrapper>

        <Footer
          brands={dummyContent.brands}
          copyrightImages={dummyContent.copyrightImages}
        />
      </div>
    </Router>
  </MainTemplate>
);

export default Root;
