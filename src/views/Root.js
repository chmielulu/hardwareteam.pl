import React from "react";
import MainTemplate from "@templates/MainTemplate";
import Button from "@components/atoms/Button";
import shoppingCartOutlineBadged from "@iconify/icons-clarity/shopping-cart-outline-badged";
import shoppingBagLine from "@iconify/icons-clarity/shopping-bag-line";
import avatarLine from "@iconify/icons-clarity/avatar-line";

const Root = () => (
  <MainTemplate>
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        isIcon
        icon={shoppingCartOutlineBadged}
        style={{ marginBottom: "20px" }}
      >
        Do koszyka
      </Button>
      <Button style={{ marginBottom: "20px" }}>Filtruj</Button>
      <Button
        style={{ marginBottom: "20px" }}
        icon={shoppingBagLine}
        type="secondary"
        position="right"
      >
        Chcę zobaczyć zamówienie
      </Button>
      <Button icon={avatarLine} type="tertiary">
        Zaloguj się lub zarejestruj
      </Button>
    </div>
  </MainTemplate>
);

export default Root;
