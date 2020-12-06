import witcherImg from "@assets/images/storybook/HotShot/witcher.png";

const timestamp = new Date();
timestamp.setHours(timestamp.getHours() + 12);

export default {
  timestamp: timestamp.getTime(),
  maxCount: 7,
  currentCount: 4,
  price: 220,
  discount: 170,
  name: "Wiedźmin 3: Dziki Gon EDYCJA GRA ROKU (PS4)",
  img: witcherImg,
};
