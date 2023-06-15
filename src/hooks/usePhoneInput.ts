import { ChangeEvent } from "react";
import { CountryData } from "react-phone-input-2";

interface UsePhoneInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const usePhoneInput = ({ handleChange }: UsePhoneInputProps) => {
  const handleChangePhone = (
    value: string,
    _: {} | CountryData,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(event);
  };

  return {
    handleChangePhone,
  };
};
