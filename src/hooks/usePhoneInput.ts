import { ChangeEvent, useState } from "react";
import { CountryData } from "react-phone-input-2";

interface Country {
  format: string;
}

interface UsePhoneInputProps {
  isValid: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const usePhoneInput = ({
  isValid,
  handleChange,
}: UsePhoneInputProps) => {
  const [isValidPhone, setIsValidPhone] = useState(isValid);

  const checkIsValidPhone = (
    _: string,
    country: object,
    currentValue: string
  ): boolean => {
    const currentCountry = country as Country;

    if (!currentCountry.format) {
      return false;
    }

    const phoneValidationCondition =
      currentCountry.format.length === currentValue.length;

    if (phoneValidationCondition && isValidPhone !== true) {
      setIsValidPhone(true);
    } else if (!phoneValidationCondition && isValidPhone !== false) {
      setIsValidPhone(false);
    }

    return isValidPhone;
  };

  const handleChangePhone = (
    value: string,
    _: {} | CountryData,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(event);
  };

  return {
    isValidPhone,
    checkIsValidPhone,
    handleChangePhone,
  };
};
