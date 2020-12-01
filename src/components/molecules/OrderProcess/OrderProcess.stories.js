import React from "react";
import OrderProcess from "./OrderProcess";

export default {
  title: "molecules/OrderProcess",
};

export const withArticleCard = () => {
  return (
    <OrderProcess
      content={[
        { name: "Nowe", isFinished: true },
        { name: "W realizacji", isFinished: true },
        { name: "Wysłane", isFinished: true },
        {
          name: "Zakończone",
          isFinished: true,
          isActive: true,
          description: "Świetnie! Twoje zamówienie już do ciebie dotarło",
        },
      ]}
    />
  );
};
