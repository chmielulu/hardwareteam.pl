import React from "react";
import styled from "styled-components";
import { Headline } from "@components/atoms";
import { secondary } from "@constants/kinds";
import { useFontSize } from "@hooks/styled-components";

const rows = [
  {
    name: "Procesor",
    values: [
      "MediaTek MT6762R Helio P22 (4 rdzenie, 2.0 GHz, + 4 rdzenie, 1.50 GHz, Cortex A53)",
    ],
  },
  {
    name: "Układ graficzny",
    values: ["PowerVR GE8320"],
  },
  {
    name: "Pamięć RAM",
    values: ["3 GB"],
  },
  {
    name: "Pamięć wbudowana",
    values: ["64 GB"],
  },
  {
    name: "Maks. pojemność karty pamięci",
    values: ["512 GB"],
  },
  {
    name: "Typ ekranu",
    values: ["Dotykowy, IPS"],
  },
  {
    name: "Przekątna ekranu",
    values: [`6,3"`],
  },
  {
    name: "Rozdzielczość ekranu",
    values: ["1600 x 720"],
  },
  {
    name: "Zagęszczenie pikseli",
    values: ["278 ppi"],
  },
  {
    name: "Rozdzielczość aparatu - tył",
    values: ["2.0 Mpix", "13.0 Mpix", "5.0 Mpix - szerokokątny"],
  },
  {
    name: "Rozdzielczość aparatu - przód",
    values: ["8.0 Mpix - do selfie"],
  },
  {
    name: "Przysłona obiektywu",
    values: [
      "f/1.8 - tylny obiektyw",
      "f/2.2 - tylny obiektyw szerokokątny",
      "f/2.4 - tylny obiektyw DoF",
      "f/2.0 - przedni obiektyw",
    ],
  },
  {
    name: "Zoom - kamera tylna",
    values: ["4x zoom cyfrowy"],
  },
  {
    name: "Dodatkowe cechy aparatu",
    values: ["Wbudowana lampa błyskowa"],
  },
  {
    name: "Rozdzielczość nagrywania wideo",
    values: ["FullHD 1080p"],
  },
  {
    name: "Łączność",
    values: ["4G (LTE)", "Bluetooth 5.0", "NFC", "Wi-Fi"],
  },
  {
    name: "System nawigacji satelitarnej",
    values: ["A-GPS", "GLONASS", "GPS"],
  },
  {
    name: "Złącza",
    values: [
      "Micro USB - 1 szt.",
      "Czytnik kart pamięci - 1 szt.",
      "Gniazdo kart nanoSIM - 2 szt.",
      "Wyjście słuchawkowe/głośnikowe - 1 szt.",
    ],
  },
  {
    name: "Czytnik linii papilarnych",
    values: ["Tył obudowy"],
  },
  {
    name: "Czujniki",
    values: ["Akcelerometr", "Światła", "Zbliżenia"],
  },
  {
    name: "Ładowanie bezprzewodowe",
    values: ["Nie obsługuje"],
  },
  {
    name: "Dual SIM",
    values: ["Dual SIM - Obsługa dwóch kart SIM"],
  },
  {
    name: "Zainstalowany system operacyjny",
    values: ["Android 10"],
  },
  {
    name: "Dodatkowe informacje",
    values: ["Obsługa radia FM", "USB OTG"],
  },
  {
    name: "Typ baterii",
    values: ["Litowo-polimerowa"],
  },
  {
    name: "Pojemność baterii",
    values: ["5000 mAh"],
  },
  {
    name: "Dołączone akcesoria",
    values: [
      "Zasilacz",
      "Kabel microUSB",
      "Instrukcja szybkiego uruchomienia telefonu",
    ],
  },
  {
    name: "Kolor",
    values: ["Fioletowy"],
  },
  {
    name: "Wysokość",
    values: ["159,1 mm"],
  },
  {
    name: "Szerokość",
    values: ["74 mm"],
  },
  {
    name: "Grubość",
    values: ["9 mm"],
  },
  {
    name: "Waga",
    values: ["185 g"],
  },
  {
    name: "Rodzaj gwarancji",
    values: ["Standardowa"],
  },
  {
    name: "Gwarancja",
    values: ["24 miesiące (gwarancja producenta)"],
  },
  {
    name: "Kod producenta",
    values: ["Merida-L49C Phantom Purple"],
  },
  {
    name: "Kod Hardware Team",
    values: ["563587"],
  },
];

const StyledWrapper = styled.section`
  margin-top: 50px;
`;

const StyledTable = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.gray};
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  padding: 17px 10%;
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  :nth-of-type(odd) {
    background: ${({ theme }) => theme.lighterGray};
  }

  :last-of-type {
    border-bottom: 0;
  }
`;

const StyledHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  width: 270px;
  margin-right: 50px;
`;

const StyledContentWrapper = styled.div``;

const StyledContent = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-bottom: 6px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const Specification = () => {
  return (
    <StyledWrapper>
      <Headline as="h3" kind={secondary}>
        Specyfikacja
      </Headline>
      <StyledTable>
        {rows.map(({ name, values }, index) => (
          <StyledRow key={index}>
            <StyledHeadline>{name}</StyledHeadline>
            <StyledContentWrapper>
              {values.map((value, index) => (
                <StyledContent key={`a${index}`}>{value}</StyledContent>
              ))}
            </StyledContentWrapper>
          </StyledRow>
        ))}
      </StyledTable>
    </StyledWrapper>
  );
};

export default Specification;
