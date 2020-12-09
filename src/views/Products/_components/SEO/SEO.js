import React from "react";
import styled from "styled-components";
import { Wysiwyg } from "@components/molecules";

const StyledWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  margin-top: 80px;

  p:first-of-type {
    margin-top: 10px;
  }
`;

const content = [
  {
    type: "header",
    data: {
      text: `Smartfony i telefony – zawsze w kontakcie`,
      id: "smartfony-i-telefony",
      level: 1,
    },
  },
  {
    type: "header",
    data: {
      text: "Czym różni się smartfon od telefonu komórkowego?",
      id: "czym-sie-rozni",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text: `Nazwa „telefon komórkowy” wiąże się ze sposobem rozmieszczenia i funkcjonowania infrastruktury telekomunikacyjnej. Obszary objęte sygnałem emitowanym przez stacje nadawcze nazywane są „komórkami”. W zasadzie każdy smartfon jest więc telefonem komórkowym, ponieważ korzysta z sygnału GSM. Jednak oprócz możliwości nawiązywania połączeń i wysyłania wiadomości oferuje Ci znacznie więcej. Najważniejsze różnice między tzw. inteligentnym telefonem a tradycyjnym telefonem komórkowym przejawiają się w:
      `,
    },
  },
  {
    type: "header",
    data: {
      text: "Systemie operacyjnym",
      id: "system-operacyjny",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "Tradycyjne telefony komórkowe posiadają proste systemy operacyjne, które pozwalają uruchamiać niewymagające, najczęściej preinstalowane aplikacje (np. kalendarz, edytor zdjęć) oraz np. gry Java.",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "Smartfony pracują pod kontrolą zaawansowanych systemów operacyjnych. Środowiska te umożliwiają korzystanie z zaawansowanych aplikacji i programów, które możesz pobrać z platform dystrybucji cyfrowej.",
    },
  },
  {
    type: "header",
    data: {
      text: "Cechach konstrukcyjnych",
      id: "cechy-konstrukcyjne",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "Tradycyjne telefony komórkowe wyposażone są zazwyczaj w fizyczną klawiaturę o układzie klasycznym (jeden przycisk służy do wprowadzania cyfr i liter) lub QWERTY oraz niedotykowy wyświetlacz. Przedni panel jest więc podzielony na dwie części.",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "Smartfony posiadają duże wyświetlacze dotykowe, często zajmujące cały przedni panel. Niektóre modele mają jednak fizyczną klawiaturę (umieszczoną z przodu albo wysuwaną) lub przyciski funkcyjne. Co ważne, w smartfonach znaleźć można też moduły GPS, wi-fi, NFC oraz czujniki (np. akcelerometr, żyroskop), które umożliwiają korzystanie z wielu dodatkowych funkcjonalności.",
    },
  },
  {
    type: "header",
    data: {
      text: "Najważniejsze cechy tradycyjnych telefonów komórkowych",
      id: "Cechy konstrukcyjne",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "Standardowe telefony komórkowe wciąż cieszą się dużą popularnością. Są proste w obsłudze, wytrzymałe i niedrogie, a do tego działają nawet kilka dni na jednym ładowaniu baterii. Takie urządzenie jest więc doskonałą propozycją na pierwszy telefon dla dziecka. Najlepiej sprawdzi się tu model wyposażony w kolorowy ekran, prosty aparat fotograficzny oraz wbudowaną pamięć na pliki lub w czytnik kart pamięci. Taki zestaw cech umożliwi korzystanie z podstawowych multimediów, dzięki czemu gadżet będzie też źródłem rozrywki. Istnieją także telefony komórkowe dla seniorów. To zazwyczaj urządzenia wyposażone w duże przyciski oraz czytelne wyświetlacze. Doskonale łączą intuicyjną obsługę z podstawowymi funkcjonalnościami. Znacznym udogodnieniem są stosowane w wielu modelach klawisze SOS, które po wciśnięciu wybierają numer służb ratunkowych.",
    },
  },
  {
    type: "header",
    data: {
      text: "Systemy operacyjne smartfonów",
      id: "systemy-operacyjne-smartfonow",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "System operacyjny zainstalowany w smartfonie odpowiada nie tylko za optymalizację urządzenia, ale też za wygodę korzystania z niego. Obecnie najpopularniejsze są inteligentne telefony wyposażone w jeden z tych trzech systemów:",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "<b>Android</b> – największa liczba użytkowników i najbardziej rozbudowane możliwości personalizacji. To system otwarty, co oznacza, że użytkownicy mogą wprowadzać udoskonalenia i usprawnienia w postaci różnych łatek i aplikacji. Z tej opcji korzysta wielu producentów, którzy dodają własne nakładki, mogące znacząco różnić się od czystej wersji systemu. Co ważne, Android jest w pełni zintegrowany z usługami świadczonymi przez Google.",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "<b>iOS</b> – zamknięty system operacyjny, stosowany wyłącznie w urządzeniach z logo marki Apple. Ogromną zaletą jest to, że opracowane przez producenta aktualizacje oprogramowania są dostępne także dla posiadaczy starszych modeli smartfonów iPhone. Dzięki temu urządzenia pracują optymalnie i zapewniają płynne działanie dostępnych aplikacji.",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "<b>BlackBerry OS</b> – posiadają go smartfony marki BlackBerry. Jego niewątpliwymi atutami są intuicyjne w obsłudze aplikacje do wysyłania wiadomości tekstowych oraz dający dostęp do wielu praktycznych funkcji klient e-mail. Co ważne, system współpracuje z najczęściej używanymi komunikatorami.",
    },
  },
  {
    type: "header",
    data: {
      text: "Na jakie parametry smartfona trzeba zwrócić szczególną uwagę?",
      id: "Na-jakie-parametry",
      level: 1,
    },
  },
  {
    type: "paragraph",
    data: {
      text: "Oto najważniejsze właściwości smartfonów:",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        "<b>Ekran</b> – Wysoką jakość wyświetlanych materiałów gwarantują wyświetlacze o rozdzielczości co najmniej Full HD. Obecnie coraz więcej modeli posiada matryce zapewniające jeszcze lepsze parametry obrazu (np. QHD, WQHD, a nawet 4K). Cennym wsparciem jest także obsługa trybu HDR, który zwiększa rozpiętość tonalną. Dzięki temu filmy i zdjęcia prezentują się doskonale. Znaczenie dla wygody używania smartfona ma z kolei wielkość ekranu. Jeśli chcesz swobodnie obsługiwać urządzenie jedną ręką, wybierz model o mniejszej przekątnej, np. do 5,2”. Ale pamiętaj, że najnowsze smartfony o bezramkowych konstrukcjach mogą cechować się bardziej poręcznymi rozmiarami przy większej przekątnej ekranu. To za sprawą zredukowanej obudowy.",
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        '<b>Aparat fotograficzny</b> – smartfon prawie zawsze jest w zasięgu Twojej ręki. Dlatego dobrze, by posiadał robiący ostre, nasycone kolorami zdjęcia aparat fotograficzny, który pozwoli Ci utrwalić warte tego momenty. Znajdziesz urządzenia z pojedynczymi, podwójnymi, a nawet potrójnymi matrycami. Jakość fotek zależy jednak przede wszystkim od specyfikacji technologicznej matrycy głównej oraz od oprogramowania. Najważniejszymi parametrami są wymiary i rozdzielczość matrycy – które wpływają na wielkość pikseli – oraz światło obiektywu. Drugi parametr wyraża wartość przysłony. Im jest niższa, tym więcej światła dostaje się do wnętrza obiektywu (najmniejsza liczba to f/1.0). To przekłada się na bardziej wyraziste i szczegółowe zdjęcia. Duże znaczenie ma również wsparcie systemowe, na przykład tryb stabilizacji obrazu, który zapewnia czytelne, nierozmazane zdjęcia. Więcej o smartfonach i fotografii mobilnej dowiesz się z naszego poradnika <a href="/">Jak fotografować smartfonem?</a> ABC fotografii mobilnej.',
    },
  },
  {
    type: "paragraph",
    data: {
      text:
        '<b>Podzespoły i bateria</b> – procesor, pamięć RAM oraz układ graficzny – najogólniej rzecz ujmując – odpowiadają za wielozadaniowość, płynność działania aplikacji oraz za grafikę 3D. Dobór konkretnej specyfikacji zależy od tego, z jakich programów chcesz korzystać najczęściej. Lubisz odprężać się przy najnowszych grach lub często używasz smartfona do pracy? Wybierz urządzenie o bardziej zaawansowanej specyfikacji. Możesz też poszukać modelu wyposażonego w baterię o dużej pojemności, choć to nie reguła, bo czas pracy na jednym ładowaniu akumulatora zależy też od optymalizacji sprzętowej. A co zrobić, gdy zabraknie Ci energii, dowiesz się z naszego poradnika <a href="/">Jaki powerbank wybrać do smartfona i tabletu?</a>',
    },
  },
];

const SEO = () => (
  <StyledWrapper>
    <Wysiwyg blocks={content} />
  </StyledWrapper>
);

export default SEO;
