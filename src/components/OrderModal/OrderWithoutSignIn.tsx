import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import loc from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import InputWithLabel from "../UI/InputWithLabel";
import { usePhoneInput } from "src/hooks/usePhoneInput";
import { pickUpAddress } from "src/constants/address";
import { orderForm } from "src/constants/initialValues";
import { orderSchemaWithoutSignIn } from "src/validation/orderSchema";
import { MakeOrderRequest } from "src/api/orderApi";
import stylesClasses from "src/components/OrderModal/styles.module.scss";

// @ts-ignore
const ReactPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

interface OrderWithoutSignInProps {
  onSubmit: (submitValues: Omit<MakeOrderRequest, "price">) => void;
}

const OrderWithoutSignIn = ({ onSubmit }: OrderWithoutSignInProps) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: orderForm,
    validationSchema: orderSchemaWithoutSignIn,
    onSubmit: () => {
      const submitValues = {
        deliveryMethod: values.deliveryMethod,
        address:
          values.deliveryMethod === "delivery"
            ? values.deliveryAddress
            : pickUpAddress,
      };
      if (
        values.deliveryMethod === "delivery" &&
        values.deliveryAddress &&
        isValidPhone
      ) {
        onSubmit(submitValues);
      } else if (values.deliveryMethod === "pickUp" && isValidPhone) {
        onSubmit(submitValues);
      }
    },
  });

  const { isValidPhone, checkIsValidPhone, handleChangePhone } = usePhoneInput({
    isValid: false,
    handleChange,
  });

  const isValid = (_: string, country: object) => {
    return checkIsValidPhone(_, country, values.phoneNumber);
  };

  return (
    <form className={stylesClasses.form} onSubmit={handleSubmit}>
      <InputWithLabel label="Имя">
        <input
          className={stylesClasses.input}
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </InputWithLabel>
      <InputWithLabel label="Фамилия">
        <input
          className={stylesClasses.input}
          name="surname"
          value={values.surname}
          onChange={handleChange}
        />
      </InputWithLabel>
      <InputWithLabel label="Контактный номер">
        <ReactPhoneInput
          country="by"
          localization={loc}
          value={values.phoneNumber}
          containerClass={stylesClasses.phoneInputContainer}
          inputClass={stylesClasses.phoneInput}
          inputProps={{
            name: "phoneNumber",
          }}
          onChange={handleChangePhone}
          isValid={isValid}
        />
      </InputWithLabel>
      <InputWithLabel label="Email">
        <input
          className={stylesClasses.input}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </InputWithLabel>
      <div className={stylesClasses.deliveryBlock}>
        <span className={stylesClasses.deliveryBlockTitle}>
          Способ доставки
        </span>
        <div className={stylesClasses.radioHolder}>
          <div>
            <Form.Check
              type="radio"
              className={stylesClasses.radio}
              label="Самовывоз"
              checked={values.deliveryMethod === "pickUp"}
              name="deliveryMethod"
              value="pickUp"
              onChange={handleChange}
            />
            <span className={stylesClasses.pickUpAddress}>
              Г. Минск, проспект Любимова 16, офис №8
            </span>
          </div>
          <div>
            <Form.Check
              type="radio"
              className={stylesClasses.radio}
              label="Доставка"
              checked={values.deliveryMethod === "delivery"}
              name="deliveryMethod"
              value="delivery"
              onChange={handleChange}
            />
            <InputWithLabel
              label="Адрес доставки"
              labelClassName={stylesClasses.deleveryAddressLabel}
            >
              <input
                className={stylesClasses.input}
                name="deliveryAddress"
                value={values.deliveryAddress}
                onChange={handleChange}
              />
            </InputWithLabel>
          </div>
        </div>
      </div>
      <button className={stylesClasses.submitBtn} type="submit">
        Оформить
      </button>
    </form>
  );
};

export default OrderWithoutSignIn;
