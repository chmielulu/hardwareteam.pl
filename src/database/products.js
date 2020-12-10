import macBookImg from "@assets/images/database/macbook.webp";
import { kinds } from "@components/molecules/ProductCard/_components/Information/kinds";
import faker from "faker";

export default [...Array(Math.floor(Math.random() * 746)).keys()].map(() => {
  const name = () => {
    const name = faker.lorem.word(10);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const attributes = [
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
    {
      name: name(),
      value: { id: faker.random.uuid(), name: faker.lorem.words(4) },
      id: faker.random.uuid(),
    },
  ];

  return {
    name: faker.commerce.productName(),
    img: macBookImg,
    price: parseInt(faker.commerce.price(2314, 12545), 10),
    score: Math.random() * 4 + 1,
    reviewsCount: Math.floor(Math.random() * 50 + 1),
    attributes,
    featuredAttributes: [
      attributes[0],
      attributes[1],
      attributes[2],
      attributes[3],
      attributes[4],
    ].map(({ name, value }) => ({ name, value: value.name })),
    awards: ["recommendable", "valueForMoney", "a11yAdapted"],
    subcategoryId: "laptopy-notebooki-ultrabooki",
    informations: kinds,
  };
});
