import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import IconButton from "src/components/UI/IconButton";
import EditableField from "src/pages/Profile/components/EditableField";
import PhoneEditableField from "src/pages/Profile/components/EditableField/PhoneIditableField";
import { usePhoneInput } from "src/hooks/usePhoneInput";
import { profileFormSchema } from "src/validation/profileFormSchema";
import { ROUTE_NAMES } from "src/router/routeNames";
import { User } from "src/types/user";
import { ProfileForm } from "src/pages/Profile/types/profileForm";
import profileImage from "src/static/images/profile-image.png";
import plusIcon from "src/static/icons/plus.png";
import stylesClasses from "src/pages/Profile/components/ProfileLayout/styles.module.scss";

interface ProfileLayoutProps {
  user: User;
  updateField: (
    fieldName: string,
    value: string,
    errors: Record<string, string>,
    isValidPhone?: boolean
  ) => void;
  handleLogout: () => void;
}

const ProfileLayout = ({
  user,
  updateField,
  handleLogout,
}: ProfileLayoutProps) => {
  const { values, errors, handleChange, setValues } = useFormik<ProfileForm>({
    initialValues: {
      name: user.name || "",
      surname: user.surname || "",
      phoneNumber: user.phoneNumber || "",
      email: user.email || "",
      deliveryAddress: user.deliveryAddress || "",
      secondDeliveryAddress: user.secondDeliveryAddress || "",
    },
    validationSchema: profileFormSchema,
    onSubmit: () => {},
  });
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    surname: true,
    phoneNumber: true,
    email: true,
    deliveryAddress: true,
    secondDeliveryAddress: true,
  });
  const [isShowSecondDeliveryAddress, setIsShowSecondDeliveryAddress] =
    useState(false);

  const { isValidPhone, handleChangePhone, checkIsValidPhone } = usePhoneInput({
    isValid: true,
    handleChange,
  });

  const isValid = (_: string, country: object): boolean => {
    return checkIsValidPhone(_, country, values.phoneNumber);
  };

  const handleSubmit = (fieldName: keyof ProfileForm) => {
    if (values[fieldName] !== user[fieldName]) {
      updateField(fieldName, values[fieldName], errors, isValidPhone);
    }
  };

  const handleShowSecondDeliveryAddress = () => {
    setIsShowSecondDeliveryAddress(true);
  };

  const handleUpdatingChange = (fieldName: keyof ProfileForm) => {
    const updatedStatus = !isDisabled[fieldName];
    setIsDisabled({
      ...isDisabled,
      [fieldName]: updatedStatus,
    });

    if (updatedStatus) {
      handleSubmit(fieldName);
    }
  };

  useEffect(() => {
    if (user && user.name) {
      const formValues = {
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        deliveryAddress: user.deliveryAddress,
        secondDeliveryAddress: user.secondDeliveryAddress,
      };
      setValues(formValues);
    }
  }, [user]);

  return (
    <div className={stylesClasses.wrapper}>
      <div className={stylesClasses.profile}>
        <div className={stylesClasses.profileContainer}>
          <h1 className={stylesClasses.title}>Аккаунт</h1>
          <div className={stylesClasses.infoColumns}>
            <div className={stylesClasses.leftColumn}>
              <EditableField
                label="Имя"
                isDisabled={isDisabled.name}
                name="name"
                value={values.name}
                onChangeDisabledStatus={handleUpdatingChange}
                onChange={handleChange}
              />
              <EditableField
                label="Фамилия"
                isDisabled={isDisabled.surname}
                name="surname"
                value={values.surname}
                onChangeDisabledStatus={handleUpdatingChange}
                onChange={handleChange}
              />
              <PhoneEditableField
                label="Контактный номер"
                isDisabled={isDisabled.phoneNumber}
                name="phoneNumber"
                value={values.phoneNumber}
                onChangeDisabledStatus={handleUpdatingChange}
                onChange={handleChangePhone}
                isValid={isValid}
              />
              <EditableField
                label="Email"
                isDisabled={isDisabled.email}
                name="email"
                value={values.email}
                onChangeDisabledStatus={handleUpdatingChange}
                onChange={handleChange}
              />
            </div>
            <div>
              <EditableField
                label="Адрес"
                isDisabled={isDisabled.deliveryAddress}
                name="deliveryAddress"
                value={values.deliveryAddress}
                onChangeDisabledStatus={handleUpdatingChange}
                onChange={handleChange}
              />
              <div className={stylesClasses.addAddress}>
                {isShowSecondDeliveryAddress || values.secondDeliveryAddress ? (
                  <EditableField
                    label="Второй адрес"
                    isDisabled={isDisabled.secondDeliveryAddress}
                    name="secondDeliveryAddress"
                    value={values.secondDeliveryAddress}
                    onChangeDisabledStatus={handleUpdatingChange}
                    onChange={handleChange}
                  />
                ) : (
                  <>
                    <h3 className={stylesClasses.label}>Адрес доставки</h3>
                    <IconButton
                      imageUrl={plusIcon}
                      imageAlt="Добавить адрес"
                      onClick={handleShowSecondDeliveryAddress}
                    />
                  </>
                )}
              </div>
              <button
                className={stylesClasses.logoutBtn}
                onClick={handleLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
            <div className={stylesClasses.rightColumn}>
              <Link to={ROUTE_NAMES.ORDERS}>Текущие заказы</Link>
              <Link to={ROUTE_NAMES.FAVOURITE}>Избранные товары</Link>
              <Link to={ROUTE_NAMES.CART}>Корзина</Link>
            </div>
          </div>
        </div>
        <img src={profileImage} alt="Логотип" />
      </div>
    </div>
  );
};

export default ProfileLayout;
