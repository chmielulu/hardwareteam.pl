/* eslint-disable import/order */
import promoCardImg1 from "./images/promotionCard1.png";
import promoCardImg2 from "./images/promotionCard2.png";
import promoCardImg3 from "./images/promotionCard3.png";

import storeIcon from "@iconify/icons-clarity/store-line";
import walletIcon from "@iconify/icons-clarity/wallet-line";
import eventIcon from "@iconify/icons-clarity/event-line";
import phoneIcon from "@iconify/icons-clarity/phone-handset-line";

import recommendedProductImg1 from "./images/recommendedProduct1.jpg";
import recommendedProductImg2 from "./images/recommendedProduct2.jpg";
import recommendedProductImg3 from "./images/recommendedProduct3.jpg";
import recommendedProductImg4 from "./images/recommendedProduct4.jpg";
import recommendedProductImg5 from "./images/recommendedProduct5.jpg";
import recommendedProductImg6 from "./images/recommendedProduct6.jpg";
import recommendedProductImg7 from "./images/recommendedProduct7.jpg";
import recommendedProductImg8 from "./images/recommendedProduct8.jpg";
import recommendedProductImg9 from "./images/recommendedProduct9.jpg";
import recommendedProductImg10 from "./images/recommendedProduct10.jpg";
import recommendedProductImg11 from "./images/recommendedProduct11.jpg";
import recommendedProductImg12 from "./images/recommendedProduct12.jpg";
import recommendedProductImg13 from "./images/recommendedProduct13.jpg";
import recommendedProductImg14 from "./images/recommendedProduct14.jpg";

import articleCard1 from "./images/articleCard1.png";
import articleCard2 from "./images/articleCard2.jpg";
import articleCard3 from "./images/articleCard3.jpg";
import articleCard4 from "./images/articleCard4.jpg";
import articleCard5 from "./images/articleCard5.jpg";
import articleCard6 from "./images/articleCard6.jpg";
import articleCard7 from "./images/articleCard7.png";

import promoCardImg4 from "./images/promotionCard4.png";
import promoCardImg5 from "./images/promotionCard5.png";
import promoCardImg6 from "./images/promotionCard6.png";

export const promotion = {
  slider: [...Array(3).keys()].map(() => ({
    brandName: "iPhone 11",
    name: "W wielkiej przecenie",
    img: promoCardImg3,
    discount: 30,
    link: "/",
  })),
  others: [
    {
      name: "Usłysz każdy detal",
      brandName: "NONAME",
      discount: 20,
      link: "/",
      img: promoCardImg1,
    },
    {
      name: "Pracuj wydajnie",
      brandName: "NONAME",
      discount: 15,
      link: "/",
      img: promoCardImg2,
    },
  ],
};

export const whyUs = [
  {
    icon: storeIcon,
    title: "Bezpieczna płatność",
    content: "100% Ochrony Kupującego",
  },
  {
    icon: walletIcon,
    title: "Prosta płatność",
    content: "Różne Metody Płatności",
  },
  {
    icon: eventIcon,
    title: "Śledzenie statusu",
    content: "Kontroluj realizację zamówienia",
  },
  {
    icon: phoneIcon,
    title: "Kontakt z klientem",
    content: "Jesteśmy do dyspozycji cały tydzień",
  },
];

export const recommendedProducts = [
  [
    {
      name: "Xiaomi Redmi Note 9 4/128GB Black",
      img: recommendedProductImg1,
      price: 999,
      discount: 799,
      score: 5,
      reviewsCount: 10,
    },
    {
      name: "Samsung Galaxy M21 SM-M215F Blue",
      img: recommendedProductImg2,
      price: 999,
      discount: 889,
      score: 5,
      reviewsCount: 32,
    },
    {
      name: "Xiaomi Redmi Note 9 4/128GB Forest Green",
      img: recommendedProductImg3,
      price: 999,
      discount: 779,
      score: 4.8,
      reviewsCount: 25,
    },
    {
      name: "Realme 6 Pro 6+128GB Lightning Blue",
      img: recommendedProductImg4,
      price: 1199,
      score: 5,
      reviewsCount: 1,
    },
    {
      name: "Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey",
      img: recommendedProductImg5,
      price: 1099,
      discount: 889,
      score: 4.6,
      reviewsCount: 37,
    },
    {
      name: "Xiaomi POCO X3 NFC 6/64GB Shadow Gray",
      img: recommendedProductImg6,
      price: 999,
      score: 4.8,
      reviewsCount: 23,
    },
    {
      name: "Realme 7 Pro 8+128GB Mirror Blue",
      img: recommendedProductImg7,
      price: 1299,
      score: 5,
      reviewsCount: 52,
    },
  ],
  [
    {
      name: "Lenovo IdeaPad Slim 1-14 A6/4GB/256",
      img: recommendedProductImg8,
      price: 1999,
      score: 5,
      reviewsCount: 1,
    },
    {
      name: "Huawei MateBook D 14 R5-3500/8GB/256/Win10 srebrny",
      img: recommendedProductImg9,
      price: 3099,
      score: 5,
      reviewsCount: 1,
    },
    {
      name: "HP Pavilion Gaming i5-10300H/16GB/512/GTX1650Ti 144Hz",
      img: recommendedProductImg10,
      price: 3999,
      score: 4.8,
      reviewsCount: 2,
    },
    {
      name: "Lenovo IdeaPad 3-15 i3-1005G1/8GB/256",
      img: recommendedProductImg11,
      price: 2799,
      score: 3,
      reviewsCount: 2,
    },
    {
      name: "Lenovo IdeaPad 3-15 i3-1005G1/8GB/256/Win10",
      img: recommendedProductImg12,
      price: 2999,
      score: 4.5,
      reviewsCount: 2,
    },
    {
      name: "Dell Inspiron 5501 i5-1035G1/16GB/256/Win10",
      img: recommendedProductImg13,
      price: 4199,
      score: 5,
      reviewsCount: 5,
    },
    {
      name: "ASUS TUF Gaming FX505GT i5-9300H/16GB/512/W10 144Hz",
      img: recommendedProductImg14,
      price: 4399,
      score: 4.6,
      reviewsCount: 13,
    },
  ],
];

export const news = [
  {
    img: articleCard1,
    title: "Oculus Quest 2 – nowy zestaw VR od Oculus",
    content:
      "O pojawieniu się nowego zestawu VR Oculus Quest 2, dowiedzieliśmy się po opublikowaniu zdjęcia rzekomo przedstawiającego następcy Questa. Zdjęcie zostało opublikowane przez popularnego użytkownika na Twitterze. Kolorystyka przedstawiona na Twiterze prezentuje wersję biało-różową oraz samo urządzenie wygląda na lżejsza konstrukcję oraz ma wiele subtelnych zmian estetycznych.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard2,
    title: "iPhone 12 – w kompaktowym rozmiarze",
    content:
      "Już od dłuższego czasu słyszymy, że podstawowa wersja iPhone 12 może mieć 5,4 calowy ekran, a najnowsze informacje pokazują jak mały może być cały telefon. Użytkownik iZac z forum MacRumors zakupił atrapę telefonu. Wygląd atrapy oczywiście opierał się na przeciekach i innych wyciekłych informacjach. Dodatkowo porównał atrapę iPhone 12 do iPhone 7 i SE.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard3,
    title: "Porsche Design i Acer – nowa współpraca",
    content:
      "Porsche Design i Acer zawarły nowe partnerstwo, które łączy innowacje technologiczne, zakorzenioną wiedzę na temat komputerów wraz z filozofią funkcjonalnego projektowania oraz inżynierii Porsche Design. Obie strony w ramach współpracy dążą do dostarczania wyjątkowych i najnowocześniejszych produktów.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard4,
    title: "TravelMate – 3 nowe biznesowe laptopy od Acer",
    content:
      "Acer prezentuje trzy nowe produkty z serii komercyjnych notebooków TravelMate dla użytkowników korporacyjnych i biznesowych. Należą do nich: konwertowalny notebook z ekranem dotykowym TravelMate Spin P4 (TMP414RN-51); mocny i przenośny notebook dla tych, którzy preferują tradycyjne konstrukcje – TravelMate P4 (TMP414-51) oraz TravelMate P2 (TMP214-53) – trwały notebook z bogatą liczbą portów i pojemną baterią, który pozwoli na pracę z dala od zasilania przez cały dzień roboczy.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard5,
    title: "Acer – nowe notebooki z serii Swift, Spin i Aspire",
    content:
      "Acer przedstawia nowe produkty z serii Swift oraz Spin dedykowane dla osób pracujących w podróży, które cenią sobie doskonałą wydajność i znakomitą jakość obrazu w metalowej, niezwykle smukłej i stylowej obudowie. Producent, oprócz nowości z serii Swift oraz Spin, zaprezentował również odświeżony model Aspire 5.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard6,
    title:
      "Wysoka jakość i przystępna cena – oto nowa seria głośników bezprzewodowych Xblitz.",
    content:
      "Xblitz to polska marka, która w swojej ofercie posiada szereg urządzeń technologicznych.  W ostatnim czasie producent przedstawił nową serię głośników bezprzewodowych bluetooth, które charakteryzują się funkcjonalnością, jakością wykonania, długim czasem pracy na baterii oraz przede wszystkim świetną jakością dźwięku.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
  {
    img: articleCard7,
    title: "Samsung Galaxy S20 FE – przecieki informacji",
    content:
      "Nie musimy czekać na oficjalna premierę, aby poznać szczegóły dotyczące specyfikacji oraz wyglądu nowego smartfona S20 FE, który będzie bardziej przystępną cenowo wersja Samsunga Galaxy S20. Według sprawdzonego źródła (Roland Quandta), nadchodzący model smartfona będzie wyposażony w Snapdragon 865 w wersji 5G. W wersji 4G smartfon będzie wyposażony w procesor Samsung Exynos 990.",
    date: 1607178678,
    readTime: 5,
    link: "/",
  },
];

export const secondPromotion = [
  {
    name: "Pracuj wydajnie",
    brandName: "IPAD",
    discount: 35,
    link: "/",
    img: promoCardImg4,
  },
  {
    name: "Pracuj wydajnie",
    brandName: "MACBOOK",
    discount: 35,
    link: "/",
    img: promoCardImg5,
  },
  {
    name: "Pracuj wydajnie",
    brandName: "MACBOOK",
    discount: 35,
    link: "/",
    img: promoCardImg6,
  },
];
