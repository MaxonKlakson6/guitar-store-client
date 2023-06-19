import { useState, MouseEvent } from "react";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

import InputWithLabel from "src/components/UI/InputWithLabel";
import { MakeOrderRequest } from "src/api/orderApi";
import { useGetUserQuery } from "src/api/authApi";
import {
  orderFormWithSignedIn,
  userInitialValue,
} from "src/constants/initialValues";
import { pickUpAddress } from "src/constants/address";
import stylesClasses from "src/components/OrderModal/styles.module.scss";

interface OrderWithSignInProps {
  onSubmit: (submitValues: Omit<MakeOrderRequest, "price">) => void;
}

const OrderWithSignIn = ({ onSubmit }: OrderWithSignInProps) => {
  const { data: user = userInitialValue } = useGetUserQuery();
  const [showAddresses, setShowAddresses] = useState<boolean>(false);
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: orderFormWithSignedIn,
    onSubmit: () => {
      if (values.deliveryMethod === "delivery" && values.deliveryMethod) {
        onSubmit({
          deliveryMethod: values.deliveryMethod,
          address: values.address,
        });
      } else if (values.deliveryMethod === "pickUp") {
        onSubmit({
          deliveryMethod: values.deliveryMethod,
          address: pickUpAddress,
        });
      }
    },
  });

  const handleShowAddresses = () => setShowAddresses(true);
  const handleHideAddresses = () => {
    setTimeout(() => {
      setShowAddresses(false);
    }, 200);
  };

  const handleSelectAddress = (event: MouseEvent<HTMLDivElement>) => {
    setFieldValue("address", event.currentTarget.textContent);
    handleHideAddresses();
  };

  return (
    <form className={stylesClasses.form} onSubmit={handleSubmit}>
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
              <div className={stylesClasses.addressInput}>
                <input
                  className={stylesClasses.input}
                  name="address"
                  value={values.address}
                  autoComplete="off"
                  onChange={handleChange}
                  onFocus={handleShowAddresses}
                  onBlur={handleHideAddresses}
                />
                {showAddresses && (
                  <div
                    className={stylesClasses.hintWrapper}
                    onMouseOver={handleShowAddresses}
                  >
                    <div
                      className={stylesClasses.hint}
                      onClick={handleSelectAddress}
                    >
                      {user.deliveryAddress}
                    </div>
                    <div
                      className={stylesClasses.hint}
                      onClick={handleSelectAddress}
                    >
                      {user.secondDeliveryAddress}
                    </div>
                  </div>
                )}
              </div>
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

export default OrderWithSignIn;
