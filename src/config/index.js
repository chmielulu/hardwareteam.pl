import logoImg from "@assets/images/logo.png";

export const domain = "hardwareteam.pl";

export const basicMetaTags = {
  title: "Sklep internetowy Hardware Team",
  description:
    "Sklep Internetowy - laptopy, RTV i AGD, konsole, aparaty cyfrowe, telefony komórkowe. Najniższe ceny w Polsce, wysyłka w 24h, zakupy na raty. Sprawdź nas!",
  logo: logoImg,
  ogImage: logoImg,
  keywords: [],
  suffix: " | Hardware Team",
};

export const maxDiscount = 70; // In procents

export const errors = {
  DISCOUNT_CODE_ALREADY_ADDED: "Ten kod został już dodany do koszyka",
  DISCOUNT_CODE_ALREADY_USED: "Ten kod został już wykorzystany",
  DISCOUNT_CODE_NOT_EXIST: "Ten kod jest niepoprawny",
  DISCOUNT_CODE_TOO_MUCH: "Suma kodów rabatowych nie może przekroczyć 70%:",
};

export const done = {
  DISCOUNT_CODE_ADDED: "Kod został dodany pomyślnie",
  DISCOUNT_CODE_REMOVED: "Kod został usunięty pomyślnie",
};
