import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import { Img } from "react-image";
import { Spinner } from "@components/atoms";
import phoneIcon from "@iconify/icons-clarity/mobile-line";
import cameraIcon from "@iconify/icons-clarity/camera-line";
import cpuIcon from "@iconify/icons-clarity/cpu-line";
import shoppingIcon from "@iconify/icons-clarity/shopping-bag-line";
import faceIcon from "@iconify/icons-clarity/happy-face-line";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import firstImg from "../../_dummyContent/images/1.png";
import secondImg from "../../_dummyContent/images/6.png";
import thirdImg from "../../_dummyContent/images/4.png";
import fourthImg from "../../_dummyContent/images/fourth.png";
import fifthImg from "../../_dummyContent/images/fifth.png";

const items = [
  {
    icon: phoneIcon,
    headline: "Przejrzysty ekran",
    content:
      'Jest on wyposażony w 6,3" wyświetlacz Dewdrop, który zapewnia komfortowe oglądanie na dużym ekranie. Dodatkowo, w stosunku do poprzedników, zwężone zostały jego ramki. Dzięki temu wyświetlacz jest o wiele bardziej czytelniejszy i przejrzysty. Podczas oglądania dźwięk będzie wspierany przez HUAWEI SuperSound oraz HUAWEI Histen 6.0. Oba, zapewniają czyste brzmienie i wzmacniają efekty basowe.',
    img: firstImg,
  },
  {
    icon: cameraIcon,
    headline: "Fotografia z Y6p",
    content:
      "HUAWEI Y6p jest wyposażony w potrójny aparat główny, który składa się z aparatu 13 Mpix z przysłoną f/1.8 oferującego lepsze możliwości fotografowania w słabym świetle i wspierającego w uzyskaniu wysokiej jakości zdjęć. Drugi aparat to szerokokątny obiektyw o rozdzielczości 5 Mpix, który zapewnia pole widzenia 120 stopni, dzięki czemu użytkownicy mogą uchwycić jeszcze większy obraz na jednym ujęciu. Ostatni aparat, 2 Mpix, służy do pomiaru głębi ostrości.",
    img: secondImg,
  },
  {
    icon: cpuIcon,
    headline: "Doskonała wydajność",
    content:
      "Dzięki pamięci RAM oraz ośmiordzeniowemu procesorowi HUAWEI Y6p może z łatwością uruchamiać wiele aplikacji na raz. Posiada on również 64 GB pamięci użytkowej, co pozwala na przechowywanie dużej ilości multimediów w telefonie. Może ona zostać powiększona dzięki karcie pamięci.",
    img: thirdImg,
  },
  {
    icon: shoppingIcon,
    headline: "HUAWEI AppGallery",
    content: `Zapewnij sobie dostęp do wyselekcjonowanych i zróżnicowanych aplikacji, dzięki oficjalnej platformie dystrybucyjnej HUAWEI AppGallery przygotowanej dla systemu Android. Wyszukaj, pobieraj i udostępniaj aplikacje mobilne. Skorzystaj z kategorii tematycznych, rankingu ocen oraz algorytmów uczenia maszynowego, aby szybciej odnajdywać interesujące Cię treści. Inteligentny menadżer ułatwi Ci zarządzanie pakietami instalacyjnymi oraz zadba o regularne aktualizacje. Co więcej, AppGallery zawiera mechanizmy detekcji szkodliwych zachowań, kontrole prywatności oraz skanowanie luk w zabezpieczeniach, aby zapewnić pełne bezpieczeństwo korzystania z aplikacji dostępnych w usłudze AppGallery. <a href="#">Dowiedz się więcej o ekosystemie HUAWEI.</a><br><br>*Smartfon nie posiada fabrycznie instalowanych usług Google Mobile Services.`,
    img: fourthImg,
  },
  {
    icon: faceIcon,
    headline: "Odkryj możliwości jakie daje Huawei Mobile Services",
    content:
      "Wykorzystaj w pełni funkcje, jakie dostarczają Ci urządzenia Huawei. Możesz na przykład sprawnie sklonować swój smartfon i przenieść wszystkie niezbędne dane, a w przypadku telefonów Huawei nawet układ ikon na pulpicie. Przeszukaj AppGallery i znajdź niezbędne aplikacje, jak i takie, po których nawet nie spodziewałeś się, że mogą ułatwić Ci życie. Jeżeli nie zajdziesz czegoś, co potrzebujesz, z pomocą przychodzi More APPs – narzędzie od producenta Huawei, z którego zainstalujesz swoje ulubione aplikacje pochodzące ze sprawdzonych źródeł. Zeskanuj poniższe kody QR by dowiedzieć się więcej o każdej z funkcji.",
    img: fifthImg,
  },
];

const StyledWrapper = styled.section`
  margin-top: 60px;
  position: relative;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::before,
  ::after {
    position: absolute;
    content: "";
    top: 0;
    height: 3px;
    width: 70px;
  }

  ::before {
    left: 0;
    background: ${({ theme }) => theme.gradient};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  ::after {
    left: 70px;
    background: ${({ theme }) => theme.lightGray};
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 30, max: 60 })};

    ::before,
    ::after {
      width: ${useFluidSize({ min: 30, max: 60 })};
    }

    ::after {
      left: ${useFluidSize({ min: 30, max: 60 })};
    }
  }

  @media (max-width: 360px) {
    margin-top: 30px;

    ::before,
    ::after {
      width: 30px;
    }

    ::after {
      left: 30px;
    }
  }
`;

const StyledItem = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  width: 85%;
  margin-bottom: 80px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: ${useFluidSize({ min: 40, max: 80 })};
    width: 100%;
  }

  @media (max-width: 360px) {
    margin-bottom: 40px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 7rem;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const StyledContentWrapper = styled.div`
  flex: 1;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 400;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-top: 10px;
  line-height: 1.5;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const StyledImg = styled(Img)`
  max-width: 75%;
  max-height: 520px;
  border-radius: 20px;
  margin: 50px auto 0;
  display: block;

  @media (max-width: 1024px) {
    max-width: 100%;
    max-height: ${useFluidSize({ min: 180, max: 520 })};
    margin-top: ${useFluidSize({ min: 10, max: 50 })};
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const Description = () => {
  return (
    <StyledWrapper>
      {items.map(({ icon, headline, content, img }, index) => (
        <StyledItem key={index}>
          <StyledIcon icon={icon} />
          <StyledContentWrapper>
            <StyledHeadline>{headline}</StyledHeadline>
            <StyledParagraph dangerouslySetInnerHTML={{ __html: content }} />
            <StyledImg src={img} loader={<Spinner />} />
          </StyledContentWrapper>
        </StyledItem>
      ))}
    </StyledWrapper>
  );
};

export default Description;
