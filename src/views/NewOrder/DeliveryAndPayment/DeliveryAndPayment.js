import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { RadioGroup } from "@components/molecules";
import { Input, Checkbox } from "@components/atoms";
import { secondary } from "@constants/kinds";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 25, max: 45 })};
  }

  @media (max-width: 360px) {
    margin-top: 25px;
  }
`;

const StyledRadioGroup = styled(RadioGroup)``;

const StyledInput = styled(Input).attrs(() => ({
  kind: secondary,
}))`
  width: 470px;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledCheckboxHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  display: block;
  margin-bottom: 15px;
  margin-top: 25px;

  :first-of-type {
    margin-top: 40px;
  }
`;

const StyledCheckbox = styled(Checkbox).attrs(() => ({
  kind: secondary,
}))`
  margin-bottom: ${({ $withoutMargin }) => ($withoutMargin ? 0 : `15px`)};

  label {
    ${({ theme }) => useFontSize(theme, "m", "l")};
    font-weight: ${({ $bold }) => ($bold ? 400 : 300)};
  }
`;

const DeliveryAndPayment = ({
  Headline,
  SecondHeadline,
  Section,
  shipment,
  payment,
  activeShipment,
  activePayment,
  handlePaymentChange,
  handleShipmentChange,
  register,
}) => {
  return (
    <StyledWrapper>
      <Headline>Dostawa i płatność</Headline>

      <Section>
        <SecondHeadline>1. Sposób dostawy</SecondHeadline>
        <StyledRadioGroup
          name={shipment.name}
          items={shipment.items}
          activeId={activeShipment.id}
          onChange={handleShipmentChange}
          register={register}
        />
      </Section>

      <Section>
        <SecondHeadline>2. Metody płatności</SecondHeadline>
        <StyledRadioGroup
          name={payment.name}
          items={payment.items}
          activeId={activePayment.id}
          onChange={handlePaymentChange}
          register={register}
        />
      </Section>

      <Section>
        <SecondHeadline>3. Dane odbiorcy</SecondHeadline>
        <StyledInput
          name="name"
          label="Imię i nazwisko lub nazwa firmy"
          ref={register({ required: true })}
        />
        <StyledInput
          name="street"
          label="Ulica i numer"
          ref={register({ required: true })}
        />
        <StyledInput
          name="postCode"
          label="Kod pocztowy"
          ref={register({ required: true })}
        />
        <StyledInput
          name="city"
          label="Miejscowość"
          ref={register({ required: true })}
        />
        <StyledInput
          name="email"
          label="E-mail"
          ref={register({ required: true })}
        />
        <StyledInput
          name="phone"
          label="Telefon"
          ref={register({ required: true })}
        />

        <StyledCheckboxHeadline>Dane do faktury</StyledCheckboxHeadline>
        <StyledCheckbox
          name="invoiceDetails"
          label="Chcę dodać inne dane lub potrzebuję faktury na firmę"
          $withoutMargin
        />

        <StyledCheckboxHeadline>Komentarz do zamówienia</StyledCheckboxHeadline>
        <StyledCheckbox name="comment" label="Komentarz do zamówienia" />
      </Section>

      <Section>
        <SecondHeadline>Faktura</SecondHeadline>
        <StyledCheckbox
          name="emailInvoice"
          label="Faktura elektroniczna"
          checked
          readOnly
        />
        <StyledCheckbox
          name="invoice"
          label="Faktura papierowa"
          ref={register}
        />
      </Section>
    </StyledWrapper>
  );
};

DeliveryAndPayment.propTypes = {
  Headline: PropTypes.object.isRequired,
  SecondHeadline: PropTypes.object.isRequired,
  Section: PropTypes.object.isRequired,
  shipment: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  handlePaymentChange: PropTypes.func.isRequired,
  handleShipmentChange: PropTypes.func.isRequired,
  activeShipment: PropTypes.object.isRequired,
  activePayment: PropTypes.object.isRequired,
  register: PropTypes.any.isRequired,
};

export default DeliveryAndPayment;
