// import macBookImg from "@assets/images/database/macbook.webp";
import { kinds } from "@components/molecules/ProductCard/_components/Information/kinds";
import faker from "faker";

const attributes = [
  { name: "Procesor", values: ["Apple M1"] },
  { name: "Pamięć", values: ["8 GB (pamięć zunifikowana)"] },
  { name: "Grafika", values: ["Apple M1 (7 rdzeni)"] },
  { name: "Typ ekranu", values: ["Błyszczący, LED, IPS, Retina"] },
  { name: "Maksymalna obsługiwana ilość pamięci RAM", values: ["8 GB"] },
  {
    name: "Liczba gniazd pamięci (ogółem / wolne)",
    values: ["0/0 (pamięć wlutowana)"],
  },
  { name: "Dysk SSD M.2 PCI", values: ["256 GB"] },
  {
    name: "Dźwięk",
    values: ["Wbudowane głośniki stereo", "Wbudowane trzy mikrofony"],
  },
  { name: "Zainstalowany system operacyjny", values: ["macOS Big Sur"] },
];

export default [...Array(140).keys()].map(() => {
  return {
    name: faker.commerce.productName(),
    img: faker.image.technics(300, 300),
    price: parseInt(faker.commerce.price(2314, 12545), 10),
    score: Math.random() * 4 + 1,
    reviewsCount: Math.floor(Math.random() * 50 + 1),
    attributes,
    featuredAttributes: [
      attributes[0],
      attributes[1],
      attributes[2],
      attributes[3],
      attributes[6],
      attributes[7],
    ].map(({ name, values }) => ({ name, value: values[0] })),
    awards: ["recommendable", "valueForMoney", "a11yAdapted"],
    subcategoryId: "laptopy-notebooki-ultrabooki",
    informations: kinds,
  };
});
