import huaweiImg from "@assets/images/huaweiPhone.png";

export default {
  addedProduct: {
    name: "Smartfon Huawei Y6P 64GB Dual SIM Fioletowy",
    img: huaweiImg,
    price: 559,
    count: 1,
  },
  recommendedProducts: [...Array(8).keys()].map(() => ({
    name: "Smartfon Huawei Y6P 64GB Dual SIM Fioletowy",
    img: huaweiImg,
    price: 559,
    discount: 338,
    score: 5,
    reviewsCount: 40,
  })),
};
