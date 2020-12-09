export default (products) => {
  const firstProductPrice = products[0].discount || products[0].price;

  const min = products.reduce((min, p) => {
    const price = p.discount || p.price;

    return price < min ? price : min;
  }, firstProductPrice);

  const max = products.reduce((max, p) => {
    const price = p.discount || p.price;

    return price > max ? price : max;
  }, firstProductPrice);

  return [min, max];
};
