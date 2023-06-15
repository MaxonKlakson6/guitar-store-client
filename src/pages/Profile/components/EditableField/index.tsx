import { ChangeEvent } from "react";
import IconButton from "src/components/UI/IconButton";
import { ProfileForm } from "src/pages/Profile/types/profileForm";
import penIcon from "src/static/icons/pen.png";
import tickIcon from "src/static/icons/tick.png";
import stylesClasses from "src/pages/Profile/components/EditableField/styles.module.scss";

interface EditableFieldProps {
  name: keyof ProfileForm;
  value: string;
  label: string;
  isDisabled: boolean;
  onChangeDisabledStatus: (name: keyof ProfileForm) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const EditableField = ({
  name,
  value,
  label,
  isDisabled,
  onChangeDisabledStatus,
  onChange,
}: EditableFieldProps) => {
  return (
    <div className={stylesClasses.inputWrapper}>
      <h3 className={stylesClasses.label}>{label}</h3>
      <input
        type="text"
        className={stylesClasses.input}
        disabled={isDisabled}
        name={name}
        value={value}
        onChange={onChange}
      />
      <IconButton
        imageUrl={isDisabled ? penIcon : tickIcon}
        imageAlt="Изменить"
        onClick={() => onChangeDisabledStatus(name)}
        imageClassName={stylesClasses.icon}
      />
    </div>
  );
};

export default EditableField;
