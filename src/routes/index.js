import tags from "@database/tags";

const articles = tags.map((tag) => `/${tag.id}/:articleId`);

export default {
  index: "/",
  login: "/logowanie",
  register: "/rejestracja",
  category: "/kategoria/:categoryId",
  notFound: "/404",
  article: articles,
  products: "/kategoria/:categoryId/:subCategoryId",
  basket: "/koszyk",
  product: "/produkt/:productId",
  user: "/uzytkownik",
  orders: "/uzytkownik/zamowienia",
  returns: "/uzytkownik/zwroty-i-reklamacje",
  favorite: "/uzytkownik/ulubione-produkty",
  settings: "/uzytkownik/ustawienia",
  order: "/uzytkownik/zamowienia/:orderId",
};
