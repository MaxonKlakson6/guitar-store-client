import { ChangeEvent } from "react";
import { CountryData } from "react-phone-input-2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IconButton from "src/components/UI/IconButton";
import { ProfileForm } from "src/pages/Profile/types/profileForm";
import penIcon from "src/static/icons/pen.png";
import tickIcon from "src/static/icons/tick.png";
import stylesClasses from "src/pages/Profile/components/EditableField/styles.module.scss";

interface PhoneEditableFieldProps {
  name: keyof ProfileForm;
  value: string;
  label: string;
  isDisabled: boolean;
  onChangeDisabledStatus: (name: keyof ProfileForm) => void;
  onChange: (
    value: string,
    _: {} | CountryData,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  isValid: (_: string, country: object) => boolean;
}

const PhoneEditableField = ({
  name,
  value,
  label,
  isDisabled,
  onChangeDisabledStatus,
  onChange,
  isValid,
}: PhoneEditableFieldProps) => {
  return (
    <div className={stylesClasses.inputWrapper}>
      <h3 className={stylesClasses.label}>{label}</h3>
      <PhoneInput
        disabled={isDisabled}
        value={value}
        inputProps={{ name }}
        containerClass={stylesClasses.phoneInputWrapper}
        inputClass={stylesClasses.phoneInput}
        onChange={onChange}
        isValid={isValid}
      />
      <IconButton
        imageUrl={isDisabled ? penIcon : tickIcon}
        imageAlt="Изменить"
        imageClassName={stylesClasses.icon}
        onClick={() => onChangeDisabledStatus(name)}
      />
    </div>
  );
};

export default PhoneEditableField;
