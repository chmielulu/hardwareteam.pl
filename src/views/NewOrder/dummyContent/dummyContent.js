import truckIcon from "@iconify-icons/clarity/truck-line";
import coinBagIcon from "@iconify/icons-clarity/coin-bag-line";
import walletIcon from "@iconify/icons-clarity/wallet-line";
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
      value: "courier",
      text: "Kurier – InPost, UPS, DHL, FedEx lub DTS ",
      price: 20,
      icon: truckIcon,
    },
    {
      id: "parcelMachine",
      value: "parcelMachine",
      text: "Paczkomaty inPost 24/7 ",
      price: 0,
      img: inpostImg,
    },
  ],
};

export const payment = {
  name: "payment",
  items: [
    {
      id: "wallet",
      value: "wallet",
      text: "Twój portfel",
      price: 0,
      icon: walletIcon,
      notLoggedIn: {
        disabled: true,
        additionalText: "(Tylko zalogowani użytkownicy)",
      },
    },
    {
      id: "blik",
      value: "blik",
      text: "BLIK",
      price: 0,
      img: blikImg,
    },
    {
      id: "card",
      value: "card",
      text: "Karta płatniczna online ",
      price: 0,
      img: [visaImg, mastercardImg],
    },
    {
      id: "cashTransfer",
      value: "cashTransfer",
      text: "Przelew gotówkowy ",
      price: 0,
      img: traditionalImg,
    },
    {
      id: "onDelivery",
      value: "onDelivery",
      text: "Przy odbiorze",
      price: 25,
      icon: coinBagIcon,
    },
    {
      id: "instalments",
      value: "instalments",
      text: "Raty",
      price: 0,
      img: [aliorImg, santanderImg, creditImg],
    },
    {
      id: "leasing",
      value: "leasing",
      text: "Leasing",
      price: 0,
      img: [pkoImg, grenkeImg],
    },
  ],
};
