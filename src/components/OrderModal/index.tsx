import { useEffect, useState } from "react";
import { Alert, Modal } from "react-bootstrap";

import OrderWithSignIn from "./OrderWithSignIn";
import OrderWithoutSignIn from "./OrderWithoutSignIn";
import { useAppSelector } from "src/hooks/reduxHooks";
import { MakeOrderRequest, useMakeOrderMutation } from "src/api/orderApi";
import logo from "src/static/images/logo.png";
import stylesClasses from "src/components/OrderModal/styles.module.scss";

interface OrderModalProps {
  show: boolean;
  price: number;
  onHide: () => void;
}

const OrderModal = ({ show, price, onHide }: OrderModalProps) => {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);
  const [showInnerModal, setShowInnerModal] = useState<boolean>(false);
  const [submitValues, setSubmitValues] = useState({
    deliveryMethod: "",
    address: "",
  });
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [makeOrder, { data }] = useMakeOrderMutation();

  const toggleInnerModal = () => setShowInnerModal(!showInnerModal);

  const onSubmit = (submitValues: Omit<MakeOrderRequest, "price">) => {
    if (!data) {
      setSubmitValues(submitValues);
      toggleInnerModal();
    }
  };

  const onPermit = () => {
    toggleInnerModal();
    makeOrder({ ...submitValues, price });
  };

  useEffect(() => {
    if (data) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        onHide();
      }, 2000);
    }
  }, [data]);

  return (
    <Modal show={show} className={stylesClasses.modal} onHide={onHide}>
      <Alert className={stylesClasses.alert} show={showAlert}>
        {data}
      </Alert>
      <Modal
        show={showInnerModal}
        onHide={toggleInnerModal}
        className={stylesClasses.innerModal}
      >
        <div className={stylesClasses.innerWrapper}>
          <h3 className={stylesClasses.innerTitle}>
            Оформить заказ на сумму {price} br?
          </h3>
          <div className={stylesClasses.innerDescriptionWrapper}>
            <div className={stylesClasses.innerDescription}>
              Способ:{" "}
              {submitValues.deliveryMethod === "pickUp"
                ? "самовывоз"
                : "доставка"}
            </div>
            <div className={stylesClasses.innerDescription}>
              Адрес: {submitValues.address}
            </div>
            <div className={stylesClasses.controlButtonsHolder}>
              <button className={stylesClasses.submitButton} onClick={onPermit}>
                Ок
              </button>
              <button
                className={stylesClasses.cancelButton}
                onClick={toggleInnerModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className={stylesClasses.contentHolder}>
        <img src={logo} alt="Logo" className={stylesClasses.logo} />
        <h3 className={stylesClasses.title}>Оформление заказа</h3>
        {isSignedIn ? (
          <OrderWithSignIn onSubmit={onSubmit} />
        ) : (
          <OrderWithoutSignIn onSubmit={onSubmit} />
        )}
      </div>
    </Modal>
  );
};

export default OrderModal;
