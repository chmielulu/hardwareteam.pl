import truckIcon from "@iconify-icons/clarity/truck-line";
import coinBagIcon from "@iconify/icons-clarity/coin-bag-line";
import inpostImg from "./images/inpost.png";
import blikImg from "./images/blik.png";
import visaImg from "./images/visa.png";
import mastercardImg from "./images/mastercard.png";
import traditionalImg from "./images/traditional.png";
import aliorImg from "./images/alior.png";
import santanderImg from "./images/santander.png";
import creditImg from "./images/credit.png";
import pkoImg from "./images/pko.png";
import grenkeImg from "./images/grenke.png";

export const shipment = {
  name: "shipment",
  items: [
    {
      id: "courier",
      value: "Kurier",
      text: "Kurier – InPost, UPS, DHL, FedEx lub DTS ",
      additionalText: "(bezpłatnie)",
      icon: truckIcon,
    },
    {
      id: "parcelMachine",
      value: "Paczkomat",
      text: "Paczkomaty inPost 24/7 ",
      additionalText: "(bezpłatnie)",
      img: inpostImg,
    },
  ],
};

export const payment = {
  name: "payment",
  items: [
    {
      id: "blik",
      value: "BLIK",
      text: "BLIK",
      additionalText: "(bezpłatnie)",
      img: blikImg,
    },
    {
      id: "card",
      value: "Karta płatnicza",
      text: "Karta płatniczna online ",
      additionalText: "(bezpłatnie)",
      img: [visaImg, mastercardImg],
    },
    {
      id: "cashTransfer",
      value: "Przelew gotówkowy",
      text: "Przelew gotówkowy ",
      additionalText: "(bezpłatnie)",
      img: traditionalImg,
    },
    {
      id: "onDelivery",
      value: "Przy odbiorze",
      text: "Przy odbiorze",
      additionalText: "(25 zł)",
      icon: coinBagIcon,
    },
    {
      id: "instalments",
      value: "Raty",
      text: "Raty",
      additionalText: "(bezpłatnie)",
      img: [aliorImg, santanderImg, creditImg],
    },
    {
      id: "leasing",
      value: "Leasing",
      text: "Leasing",
      additionalText: "(bezpłatnie)",
      img: [pkoImg, grenkeImg],
    },
  ],
};
