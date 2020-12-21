import cyberpunkImg from "./images/cyberpunk.png";
import asusImg from "./images/asus.png";
import ramImg from "./images/ram.png";
import ryzenImg from "./images/ryzen.png";

export const orders = [
  {
    status: "Zakończone",
    date: 1603965704000,
    number: 6786212356,
    price: 154,
    products: [
      {
        name: "PC Cyberpunk 2077",
        price: 154,
        count: 1,
        img: cyberpunkImg,
      },
    ],
  },
  {
    status: "Zakończone",
    date: 1602493304000,
    number: 6786205252,
    price: 3334,
    products: [
      {
        name: "AMD Ryzen 9 5900x",
        price: 1000,
        count: 1,
        img: ryzenImg,
      },
      {
        name: "Płyta główna Asus",
        price: 1000,
        count: 1,
        img: asusImg,
      },
      {
        name: "Pamięć RAM HyperX",
        price: 1334,
        count: 1,
        img: ramImg,
      },
    ],
  },
];
